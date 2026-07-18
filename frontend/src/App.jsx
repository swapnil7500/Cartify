import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Cart, ProductDetails, Checkout, Login, Register routes added Day 2 */}
        {/* AdminDashboard route added Day 4 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;