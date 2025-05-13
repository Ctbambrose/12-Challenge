import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import AboutMe from './components/AboutMe.jsx'
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Resume from './components/Resume.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                index:true,
                element: <AboutMe/>
            },
            {
                path: '/Portfolio',
                element: <Portfolio/>
            },
            {
                path: '/Contact',
                element: <Contact/>
            },
            {
                path: '/Resume',
                element: <Resume/>
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)