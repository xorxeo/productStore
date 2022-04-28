import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { NavBar } from "./components/NavBar";
import styles from './App.module.css';

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      
    </BrowserRouter>
  );
};
