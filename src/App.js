import './css/App.css';
import HomePage from './components/HomePage';
import Project from './components/Project';
import Error from './components/Error';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage></HomePage>,
      errorElement: <Error />
    },
    {
      path: "project",
      element: <Project />,
      errorElement: <Error />
    }
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
