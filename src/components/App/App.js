import React from 'react';
import './App.css';
import Navbar from "../Navbar/Navbar";
import Cards from "../IdeasDashboard/IdeasDashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

function App() {
  const [labelFilter, setLabelFilter] = React.useState([]);

  const FilteredCards = () => <Cards labelFilter={labelFilter}/>;

  return (
    <div className="App">
      <Navbar labelFilter={labelFilter} setLabelFilter={setLabelFilter}/>
      <PrivateRoute component={FilteredCards}/>
    </div>
  );
}

export default App;
