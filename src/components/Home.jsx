import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <ul>
        <li>
          <Link to="/auto">Import Code Block from Jupyter Notebook</Link>
        </li>
        <li>
          <Link to="/manual">Manually Add Code Block</Link>
        </li>
        <li>
          <Link to="/browse">Browse Current Code Blocks</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
