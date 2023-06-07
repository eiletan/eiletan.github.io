import logo from './logo.svg';
import './css/App.css';
import Card from './components/Card';

const websiteData = require('./assets/data.json');
let introTitle= websiteData["introSection"]["title"];
let introContent = websiteData["introSection"]["content"];
let projectTitle = websiteData["projectSection"]["title"];

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <Card classname="intro" title={introTitle} content={<div className="cardflexitem"><p className="text">{introContent}</p></div>}></Card>
        <Card classname="project" title={projectTitle} ></Card>
      </header>
    </div>
  );
}

export default App;
