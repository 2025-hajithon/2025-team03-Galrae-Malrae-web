import {Routes, Route} from "react-router-dom";
import "./App.css";
import {Home} from "./pages/Home";
import SignUp from './pages/SignUp';
import {Setting} from './pages/Setting';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  );
}

export default App;
