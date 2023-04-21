import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { appRouter } from "./route/AppRoutes";
import store from "./utils/store";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}>
        <App />
      </RouterProvider>
    </Provider>
  );
  /**
   * header
   * body
   *  sidebar
   *    menuitems
   *  maincontainer
   *    buttonslist
   *    videocontainer
   *      videocard
   *
   */
}

export default App;
