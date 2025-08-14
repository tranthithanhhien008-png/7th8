import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../component/UserContext";

const DEFAULT_USER = {
  fullName: "user1",
  email: "user1@example.com",
  password: "123456",
  phone: "0123456789",
};

const Login: React.FC = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Kiểm tra user cố định
    if (email === DEFAULT_USER.email && password === DEFAULT_USER.password) {
      localStorage.setItem("currentUser", JSON.stringify(DEFAULT_USER));
      setUser(DEFAULT_USER);
      alert("Đăng nhập thành công!");
      navigate("/Defaultlayout"); // chuyển về trang chủ
    } else {
      alert("Sai email hoặc mật khẩu!");
    }
  };
  return (
    <div className="container py-5">
      <h2>Đăng nhập</h2>
      <form onSubmit={handleLogin} style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label>Mật khẩu:</label>
          <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>

        <button type="submit" className="btn btn-success w-100">Đăng nhập</button>
      </form>
      </div>
  );
};

export default Login;
