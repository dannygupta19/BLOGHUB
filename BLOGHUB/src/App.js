import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddPost from '../src/component/AddPost';
import EditPost from './component/EditPost';
import ViewPost from '../src/component/ViewPost'
import HomePage from './component/HomePage';
import MainHeader from './component/MainHeader';


const router = createBrowserRouter([

  {
    path: '/',
    element: <MainHeader />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/view/:id',
        element: <ViewPost />
      },
      {
        path: '/addingblog/',
        element: <AddPost />
      },
      {
        path: '/editblog/:id',
        element: <EditPost />
      }
    ]
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
