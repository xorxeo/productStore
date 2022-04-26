import React from "react";

export const Auth = () => {
  return (
    <div
      className="flex 
                    justify-content-center
                    align-items-center
                    h-[calc(100vh-3rem)]
                    "
    >
      <div
        className="flex 
                   h-[calc(100vh-20rem)]
                   w-1/2
                   justify-content-center
                   align-items-center
                  
                   shadow
                  "
      >
        <div>
          <h2 className="text-center text-3xl font text-gray-900">
            Sign in to your account
          </h2>
          <form className="mt-8 space-y-6" action="#" method="POST">
            
            <div className=" rounded shadow -space-y-px">
              <div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email address"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"   
                  autoComplete="current-password"
                  required                                                                  // set type password <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
                  placeholder="Password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>

              <div className="flex h-full items-center justify-center py-10 px-4">
                <button
                  type="submit"
                  className="group relative w-full flex justify-content-center py-2 px-4 border border-transparent bg-indigo-500 text-white font-medium focus:outline-none"
                >
                    Sign in
                </button>
              </div>
            </div>
          </form>
        </div>


      </div>
    </div>
  );
};
