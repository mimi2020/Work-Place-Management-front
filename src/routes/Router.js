import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.js"));
/****End Layouts*****/

/*****Pages******/
const Dashboard1 = lazy(() => import("../views/dashboards/Dashboard1"));

/*****Tables******/
const BasicTable = lazy(() => import("../views/tables/BasicTable"));

// form elements
const ExAutoComplete = lazy(() =>
  import("../views/FormElements/ExAutoComplete")
);
const ExButton = lazy(() => import("../views/FormElements/ExButton"));
const ExCheckbox = lazy(() => import("../views/FormElements/ExCheckbox"));
const ExRadio = lazy(() => import("../views/FormElements/ExRadio"));
const ExSlider = lazy(() => import("../views/FormElements/ExSlider"));
const ExSwitch = lazy(() => import("../views/FormElements/ExSwitch"));
// form layouts
const FormLayouts = lazy(() => import("../views/FormLayouts/FormLayouts"));
const Users = lazy(()=>import("../views/dashboards/Users"))
const Departements = lazy(()=>import("../views/dashboards/Departements.js"))
const ChartJS = lazy(()=>import("../views/dashboards/ChartJS.js"))
const App2 = lazy(()=>import("../views/dashboards/App2.js"))
const Scan = lazy(()=>import("../views/dashboards/Scan.js"))
const Login = lazy(()=>import("../views/dashboards/Login.js"))
/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    // element: <FullLayout />,
    children: [
      {path:"/",element:<Login/>},
      // { path: "/", element: <Navigate to="dashboards/dashboard1" /> },
      { path: "dashboards/dashboard1", exact: true, element: <Dashboard1 /> },
      { path: "tables/basic-table", element: <BasicTable /> },
      { path: "/form-layouts/form-layouts", element: <FormLayouts /> },
      { path: "/form-elements/autocomplete", element: <ExAutoComplete /> },
      { path: "/form-elements/button", element: <ExButton /> },
      { path: "/form-elements/checkbox", element: <ExCheckbox /> },
      { path: "/form-elements/radio", element: <ExRadio /> },
      { path: "/form-elements/slider", element: <ExSlider /> },
      { path: "/form-elements/switch", element: <ExSwitch /> },
      {path:"/Users",element:<Users/>},
      {path:"/Departements", element:<Departements/>},
      {path:"/ChartJS",element:<ChartJS/>},
      {path:"/App2",element:<App2/>},
      {path:"/Scan",element:<Scan/>},
  
    ],
  


    
  },
  {  path: "/Login",
   
  children: [
    {path:"/Login",element:<Login/>},
    // { path: "/", element: <Navigate to="dashboards/dashboard1" /> },
  

  ],}
];

export default ThemeRoutes;
