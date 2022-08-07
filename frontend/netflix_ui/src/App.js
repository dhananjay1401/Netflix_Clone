import "./app.scss"
import { Home } from "./pages/home/Home";
import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
import { Watch } from "./pages/watch/Watch";


// Router
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Routes className="App-header">
      <Route exact path="/" element={<Home />} />       
      <Route path="/movies" element={<Home type="movies"/>} />       
      <Route path="/series" element={<Home type="series"/>} />  
      <Route path="/watch" element={<Watch />} />  
          {/* <Watch /> */}
          {/* <Watch /> */}
           {/* <Register /> */}
           {/* <Login /> */}
      </Routes>
    </Router>
  );
}

export default App;
