import React from 'react';
import './App.css';
import Navbar from "../Navbar/Navbar";
import Cards from "../IdeasDashboard/IdeasDashboard";

function App() {
  const [labelFilter, setLabelFilter] = React.useState("");

  return (
    <div className="App">
      <Navbar labelFilter={labelFilter} setLabelFilter={setLabelFilter}/>
      <Cards labelFilter={labelFilter}/>
    </div>
  );
}

export default App;
