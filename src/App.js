import logo from './logo.svg';
import './css/App.css';
import Card from './components/Card';

const websiteData = require('./assets/data.json');
let introSection= websiteData["introSection"];
let projectTitle = websiteData["projectSection"]["title"];

function App() {
  
  // Takes content and creates a JSX expression for the component
  function transformContentIntoJSX(data) {
    if (typeof data === "string") {
      let jsx = <div className="cardflexitem">
          <p className="text">{data}</p>
      </div>
      return jsx;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Card classname="intro" title={introSection["title"]} content={<div className="cardflexitem"><p className="text">{transformContentIntoJSX(introSection["content"])}</p></div>}></Card>
        <Card classname="project" title={projectTitle} ></Card>
      </header>
    </div>
  );
}

export default App;
