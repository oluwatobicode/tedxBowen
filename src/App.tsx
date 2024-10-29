import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
