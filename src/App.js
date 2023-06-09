import logo from './logo.svg';
import './css/App.css';
import Card from './components/Card';
import ImageSlider from './components/ImageSlider';

const websiteData = require('./assets/data.json');
let introSection= websiteData["introSection"];
let projectSection = websiteData["projectSection"];
let hobbiesSection = websiteData["hobbiesSection"];

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
        <Card cname="intro" title={introSection["title"]} content={<div className="cardflexitem"><p className="text">{transformContentIntoJSX(introSection["content"])}</p></div>}></Card>
        <Card cname="project" title={projectSection["title"]} ></Card>
        <Card cname="hobbies" title={hobbiesSection["title"]} content={<div className="cardflexitem"><p className="text">{transformContentIntoJSX(hobbiesSection["content"])}</p></div>}></Card>
      </header>
    </div>
  );
}

export default App;
