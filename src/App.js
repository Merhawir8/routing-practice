import './App.css';
// import First from './components/first';
import {Router} from '@reach/router';
import First from './components/First';
// import Second from './components/Second';
// import Third from './components/Third';
// import Navbar from './components/Navbar';
import Param from './components/Param';
import ParamTwo from './components/ParamTwo';
// import ParamThree from './components/ParamThree';



function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Router>
        <First path="/home"/>
        {/* <Second path="/second" /> */}
        {/* <Third path="/anything" /> */}
        <Param path="/:number"/>
          {/* number is passed as prop in Param.jsx */}
        <ParamTwo path="/word/:word" />
        <ParamTwo path="/word/:word/:color1/:color2" />
      </Router>
      
    </div>
  );
}

export default App;
