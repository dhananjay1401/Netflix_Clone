import "./app.scss";
import { Home } from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Watch } from "./pages/watch/Watch";

// Router
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router className="App">
      <Routes className="App-header">
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/register" replace />}
        />
        {}
        {user && (
          <>
            <Route path="/movies" element={<Home type="movies" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch" element={<Watch />} />
          </>
        )}
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" replace />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
