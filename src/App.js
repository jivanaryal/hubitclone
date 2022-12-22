
import './App.css';
import Layout from "./Hoc/Layout/Layout"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Homepages from './Components/Pages/HomePages';




function App() {
  return (
    <div>
      <Router>
        <Layout />
        <Routes>
          <Route path='/' exact element={<Homepages />} />
        </Routes>
      </Router>
      
  </div>
  );
}

export default App;
