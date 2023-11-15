import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
//import TextForm from './components/TextForm.js';
import About from './components/About.js';

function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    <div className="container my-3">
    {/*<TextForm heading="Enter the text to analyze below"/>*/}
    <About/>
    </div>
    </>
  );
}

export default App;
