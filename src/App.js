import './css/App.css';
import HomePage from './components/HomePage';
import Project from './components/Project';
import {
  createHashRouter,
  RouterProvider
} from "react-router-dom";

function App() {


  const router = createHashRouter([
    {
      path: "/",
      element: <HomePage></HomePage>
    },
    {
      path: "project",
      element: <Project />
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
