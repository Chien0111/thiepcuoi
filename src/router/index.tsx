import { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/index";
import HomePage from "../page/Home/index";
import NoPage from "../page/Nopge";
import InvitationPage from "../page/Invitation";
import { useSelector } from "react-redux";
import { playSelect } from "../store/select";

interface RouteType {
  path: string;
  element: FunctionComponent;
}

const ConfigRouter = () => {
  const playValue = useSelector(playSelect);
  const publicPage: RouteType[] = [
    {
      path: "/",
      element: InvitationPage,
    },
    {
      path: "*",
      element: InvitationPage,
    },
  ];
  const privatePage: RouteType[] = [
    {
      path: "/",
      element: InvitationPage,
    },
    {
      path: "/home",
      element: HomePage,
    },
    {
      path: "*",
      element: NoPage,
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        {playValue
          ? privatePage.map((router: RouteType) => {
              const Container = router.element;
              return (
                <Route
                  path={router.path}
                  element={
                    <Layout>
                      <Container />
                    </Layout>
                  }
                />
              );
            })
          : publicPage.map((router: RouteType) => {
              const Container = router.element;
              return (
                <Route
                  path={router.path}
                  element={
                    <Layout>
                      <Container />
                    </Layout>
                  }
                />
              );
            })}
      </Routes>
    </BrowserRouter>
  );
};

export default ConfigRouter;
