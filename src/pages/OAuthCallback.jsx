// src/pages/OAuthCallback.jsx
import {useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom";

export const OAuthCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const needSignup = params.get("needSignup");

    if (needSignup === "true") {
      navigate("/signup");
    } else {
      navigate("/"); // 로그인 완료 후 홈으로
    }
  }, [location, navigate]);

  return null; // 화면에 아무 것도 렌더링하지 않음
};
