import Header from "./components/Header";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import "./css/main.min.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
      </Router>
      <Profile />
      <Router>
        <Posts />
      </Router>
    </div>
  );
}

export default App;
