import { createBrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import MainContainer from "../components/MainContainer";
import WatchPage from "../components/WatchPage";

export const appRouter = createBrowserRouter([
  {
    path: "/youtube-app",
    element: <Body />,
    children: [
      {
        path: "/youtube-app",
        element: <MainContainer />,
      },
      {
        path: "/youtube-app/watch",
        element: <WatchPage />,
      },
    ],
  },
]);
