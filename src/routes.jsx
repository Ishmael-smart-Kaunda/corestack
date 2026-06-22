import Layout from "./layout/layout";
import Home from "./pages/home";
import Services from "./pages/services";
import About from "./pages/about";
import Contact from "./pages/contact";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
                    [
                       { path: "/", 
                        Component: Layout,
                        children: [
                            {index: true, Component: Home},
                            {path: "services", Component: Services},
                            {path: "about", Component: About},
                              
                        ],                    
                       },
                       {path: "contact", Component: Contact}                    
                    ]);
export default router;