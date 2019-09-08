import React from 'react';
import './App.css';
import Navbar from "../Navbar/Navbar";
import IdeasDashboard from "../IdeasDashboard/IdeasDashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

function App() {
  const [labelFilter, setLabelFilter] = React.useState([]);

  const FilteredIdeasDashboard = () => <IdeasDashboard labelFilter={labelFilter}/>;

  return (
    <div className="App">
      <Navbar labelFilter={labelFilter} setLabelFilter={setLabelFilter}/>
      <PrivateRoute component={FilteredIdeasDashboard}/>
    </div>
  );
}

export default App;
