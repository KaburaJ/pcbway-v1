import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";

function App() {
  return (
    <BrowserRouter>
    <Routes path="/">
      <Route path="/pcbway-v1" element={<Home/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
