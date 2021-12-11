import Iroute from "../interfaces/route";
import Clients from "../pages/Clients/Clients";
//Pages
import Home from "../pages/Home/Home";
import Login from "../pages/LoginPage/Login";
import Operation from "../pages/Operation/Operation";

const routes: Iroute[] = [
  {
    path: "/",
    name: "Login Page",
    component: Login,
    exact: true,
  },
  {
    path: "/home",
    name: "Home Page",
    component: Home,
    exact: false,
  },
  {
    path: "/clients",
    name: "Clients Page",
    component: Clients,
    exact: false,
  },
  {
    path: "/operation",
    name: "Operation Page",
    component: Operation,
    exact: false,
  },
];

export default routes;
