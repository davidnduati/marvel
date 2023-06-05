import React from 'react';
import { RouterProvider, createBrowserRouter,Link } from 'react-router-dom';
import Characters from './charactrs';
import Comics from './comic';
import Movies from './movies';
//import Shows from './tvShows';
import Navigation from './navigation';



function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Navigation />
    },
    {
      path: '/characters',
      element: <Characters />,
    },

    {
      path: '/comics',
      element: <Comics />
    },
    {
      path: '/movies',
      element: <Movies />
    }






  ])


  return (<>


    <div >
      <div>
        <ul>
        <li>
          <Link to='/characters'>CHARACTERS</Link>
        </li>
        <li>
          <Link to='/comics'>Comics</Link>
        </li>
        <li>
          <Link to='/movies'>movies</Link>
        </li>

      </ul>
      </div>
      <div>

        <RouterProvider router={router} />
        </div>




  </div >

</>
);
}







export default App;
