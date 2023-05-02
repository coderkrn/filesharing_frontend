import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar></Navbar>
      <div className="container" >
        <h1 className="text-center" >File Sharing App</h1>
        <Home></Home>
      </div>
    </>
  );
}

export default App;
