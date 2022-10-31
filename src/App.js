import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Message from "./component/message";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Message />} />
      </Routes>
    </Router>
  );
}

export default App;
