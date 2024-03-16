import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
