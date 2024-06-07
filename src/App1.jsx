import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar/>} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
