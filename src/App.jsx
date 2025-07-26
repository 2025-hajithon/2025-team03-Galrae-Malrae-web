import {Routes, Route} from "react-router-dom";
import "./App.css";
import {Home} from "./pages/Home";
import SignUp from "./pages/SignUp";
import {Setting} from "./pages/Setting";
import {Test} from "./pages/Test";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/setting" element={<Test />} />
    </Routes>
  );
}

export default App;
