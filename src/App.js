import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Root from "./Layouts/RootLayout"
import AuthPage from './Pages/AuthPage';
import BodyLayout from './Layouts/BodyLayout';
import HomePage from './Pages/HomePage';
import Overview from './Pages/SubPages/Overview';
import HistoryPage from './Pages/SubPages/HistoryPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '', 
      element:<Root/>,
      children:[
        {
          path:'/Auth',
          element: <AuthPage/>
        },
        {
          path:"/:userName/budget_manager",
          element:<BodyLayout/>,
          children:[{
            index:true,
            element:<Overview/>
          },{
            path:'categories',
            element:<h1>categories</h1>
          },{
            path:'history',
            element:<HistoryPage/>
          },{
            path:'settings',
            element:<h1>settings</h1>
          }]
        },
        {
          path:"/Home",
          element:<HomePage/>
        }
      ]
    }
  ])
  return (<RouterProvider router={router}/>
  );
}

export default App;
