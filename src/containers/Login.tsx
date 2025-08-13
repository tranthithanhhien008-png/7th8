import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../component/UserContext";

const Login: React.FC = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || "Đăng nhập thất bại!");
        return;
      }

      // ✅ Lưu vào localStorage và context
      localStorage.setItem("currentUser", JSON.stringify(data.user));
      setUser(data.user);

      alert("Đăng nhập thành công!");
      navigate("/"); // về trang chủ
    } catch (error) {
      console.error("Lỗi:", error);
      alert("Không thể kết nối server!");
    }
  };

  return (
    <div className="container py-5">
      <h2>Đăng nhập</h2>
      <form onSubmit={handleLogin} style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Mật khẩu:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Login;
