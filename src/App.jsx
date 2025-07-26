import {Routes, Route} from "react-router-dom";
import "./App.css";
import {Home} from "./pages/Home";
import SignUp from "./pages/SignUp";
import {Setting} from "./pages/Setting";
import {MyPage} from "./pages/MyPage";
import {Test} from "./pages/Test";
import {Login} from "./pages/Login";
import {OAuthCallback} from "./pages/OAuthCallback";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/test" element={<Test />} />
      <Route path="/login" element={<Login />} />
      <Route path="/oauth/callback" element={<OAuthCallback />} />
    </Routes>
  );
}

export default App;
