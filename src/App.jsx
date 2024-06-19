import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import SignUpPage from "./routes/Signin";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
