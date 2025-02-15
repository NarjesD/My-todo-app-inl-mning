import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoPage from "./Pages/TodoPage";
import AboutPage from "./Pages/AboutPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">To do </Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
