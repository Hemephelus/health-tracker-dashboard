import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage"
import Dashboard from "./pages/Dashboard"


function App() {
 
  return (
    <div className="">
    
      <Routes>
      <Route path="*" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    
          
    </div>
  );
}

export default App;