import { Page2 } from "../Page1";
import { UrlParameter } from "../UrlParameter";

export const page2Routers = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
