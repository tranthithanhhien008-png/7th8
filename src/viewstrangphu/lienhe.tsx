import React, { useState } from "react";
import axios from "axios";
import Headers from "../containers/Headers";
import Footer from "../containers/Footer";

export default function LienHe() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("gopy"); // gopy = Góp ý, khieunai = Khiếu nại
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newFeedback = {
      fullName,
      email,
      type,
      message,
      date: new Date().toISOString(),
    };

    try {
      await axios.post("http://localhost:3001/contacts", newFeedback);
      alert("Gửi thành công! Cảm ơn bạn đã phản hồi.");
      setFullName("");
      setEmail("");
      setType("gopy");
      setMessage("");
    } catch (err) {
      console.error("Lỗi khi gửi phản hồi:", err);
      alert("Gửi thất bại, vui lòng thử lại.");
    }
  };

  return (
    <>
      <Headers />
      <div className="container mt-4" style={{ maxWidth: "600px" }}>
        <h2>Liên hệ / Phản hồi</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Họ và tên</label>
            <input
              type="text"
              className="form-control"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Loại phản hồi</label>
            <select
              className="form-select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="gopy">Góp ý</option>
              <option value="khieunai">Khiếu nại</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Nội dung</label>
            <textarea
              className="form-control"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Gửi phản hồi
          </button>
        </form>
      </div><br/>
    <Footer/>
    </>
  );
}
