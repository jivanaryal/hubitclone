
import './App.css';
import Layout from "./Hoc/Layout/Layout"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Contact from './Components/Pages/Contact';
import HomePage from './Components/Pages/HomePage';
import About from './Components/Pages/About';
import MapFunction from './bujauniktaharulaii/MapFunction';

function App() {
  return (
    <div>
      <Router>
        <Layout />
        <Routes>
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/' exact element={<HomePage />} />
          <Route path='/about' exact element={<About />} />
        </Routes>
      </Router>
      
  </div>
  );
}

export default App;
