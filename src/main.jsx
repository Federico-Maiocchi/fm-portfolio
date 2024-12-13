import './index.css'
import "./styles/reset/reset.scss";
import "./styles/utilities/_utilities.scss";
import "./styles/variables/_variables.scss";
import "./styles/pagesStyle/pages.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

//importiamo il provider
import { Provider } from "react-redux";
//importo lo store
import store from "./redux/store.js";

//importiamo il roputer dom per la creazione della lista rotte
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
//import About from "./pages/About/about.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Project from "./pages/Projects/project.jsx";

//Router list
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      //HOME
      {
        path: "/",
        element: <Home />, // pagina home
      },
      //ABOUT
      // {
      //   path: "/about",
      //   element: <About />, // pagina about
      // },
      //PROJECTS
      {
        path: "/projects",
        element: <Projects />, // pagina progetti
      },
      //PROJECTS/PROJECTID
      // {
      //   path: "/projects/:projectID",
      //   element: <Project/>
      // },
      {
        path: "/projects/:slug",
        element: <Project />, // pagina progetto specifico
      },
      //CONTACT
      {
        path: "contact",
        element: <Contact />, // pagina contact
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
