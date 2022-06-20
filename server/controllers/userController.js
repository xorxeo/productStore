const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User, UserRefProduct } = require("../models/models");

const generateJwt = (id, email, role) => {
    return jwt.sign(
                { id, email, role },
                process.env.SECRET_KEY,
                { expiresIn: "24h" }
      );
};

class UserController {
  async registration(req, res, next) {
    try {
      const { email, password, role } = req.body;
      if (!email || !password) {
        return next(ApiError.badRequest("Uncorrect email or password"));
      }
      const candidate = await User.findOne({ where: { email } });
      if (candidate) {
        return next(ApiError.badRequest("User with this email already exists"));
      }
      const hashPassword = await bcrypt.hash(password, 5);
      const user = await User.create({ email, role, password: hashPassword });
      // const basket = UserRefProduct.create({ userId: user.id });
      const token = generateJwt(user.id, user.email, user.role);

      return res.json({ token });
    } catch (e) {
      console.log('catch registration', req.body)
      next(ApiError.badRequest(e.message));

    }
  }

  async getAllUsers(req, res, next) {
    try {
      const allUsers = await User.findAll();
      return res.json(allUsers);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async login(req, res, next) {
      const {email, password} = req.body;
      const user = await User.findOne({where: {email}});
      if(!user) {
          return next(ApiError.internal('User is not found'))
      }
      let comparePassword = bcrypt.compareSync(password, user.password);
      if(!comparePassword) {
          return next(ApiError.internal('Wrong password specified'));
      }
      const token = generateJwt(user.id, user.email, user.role);
      return res.json({token});
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.json({token});
  }
}

module.exports = new UserController();
