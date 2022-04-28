// import logo from './logo.svg';
import Auto from "./components/AutoCodeBlocks";
import Manual from "./components/ManualCodeBlocks";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, 
    Route} from "react-router-dom";

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auto" element={<Auto />} />
          <Route path="/manual" element={<Manual />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;