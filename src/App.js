import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import BlogDetails from "./components/Blog/BlogDetails";
import { LikeProvider } from "./Context/LikeContext";

function App() {
  return (
    <LikeProvider>
      <BrowserRouter>
        {/* <Router> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
        {/* </Router> */}
      </BrowserRouter>
    </LikeProvider>
  );
}

export default App;
