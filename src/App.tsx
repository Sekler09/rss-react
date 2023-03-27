import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import NotFound from './pages/NotFound';
import About from './pages/about/About';
import Main from './pages/main/Main';
import React from 'react';
import Forms from './pages/forms/Forms';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/forms',
        element: <Forms />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

class App extends React.Component {
  render() {
    return <RouterProvider router={router} />;
  }
}

export default App;
