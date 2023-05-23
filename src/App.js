import logo from "./logo.svg";
import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./compoments/pages/HomePage";
import Course from "./compoments/pages/course/Course";
import TeachingModel from "./compoments/pages/teachingModel/TeachingModel";
import About from "./compoments/pages/about/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course" element={<Course />} />
          <Route path="/teachingModel" element={<TeachingModel />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
