import {createBrowserRouter} from 'react-router-dom'; 
import App from '../App';
import Home from '../pages/Home';
import Help from '../pages/Help';
import Donors from '../pages/Donors';
import Awards from '../pages/Awards';
import Internships from '../pages/Internships';
import Gallery from '../pages/Gallery';
import Privacy from '../pages/Privacy';
const router= createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/help", 
                element: <Help/>
            },
            {
                path: "/donors", 
                element: <Donors/>
            },
            {
                path: "/awards", 
                element: <Awards/>
            },
            {
                path: "/internships", 
                element: <Internships/>
            },
            {
                path: "/gallery", 
                element: <Gallery/>
            },
            {
                path: "/privacy", 
                element: <Privacy/>
            }
        ]
    }
]);
export default router;