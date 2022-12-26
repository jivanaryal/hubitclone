
import './App.css';
import Layout from "./Hoc/Layout/Layout"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Homepages from './Components/Pages/HomePages';
import About from './Components/Pages/About';
function App() {
  return (
    <div>
      <Router>
        <Layout >
        <Routes>
          <Route path='/' exact element={<Homepages />} />
          <Route path='/about' exact element={<About />} />
          </Routes>
          </Layout>
      </Router>
      
  </div>
  );
}

export default App;
