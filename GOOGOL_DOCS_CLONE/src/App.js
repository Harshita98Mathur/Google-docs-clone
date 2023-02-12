import { Route,Routes } from "react-router-dom";
import Login from './components/Login';
import { app, database } from './firebaseConfig';
import Footer from './components/Footer';
import Home from './components/Home';
import Editor from "./components/Editor";
import logo from "./components/google-docs-logo.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> <img src={logo} width='50px' height='60px'/> Google Docs Clone </h1>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home database={database} />}/>
        <Route path="/editor/:id" element={<Editor database={database} />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
