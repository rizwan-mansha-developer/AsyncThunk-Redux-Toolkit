import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./features/posts/Posts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
