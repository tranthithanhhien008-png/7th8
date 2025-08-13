// server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Kết nối db.json
const file = path.join(__dirname, "db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);

// Load dữ liệu ban đầu
await db.read();
db.data ||= { users: [], products: [] };

// API Đăng ký
app.post("/api/register", async (req, res) => {
  const { fullName, email, phone, password } = req.body;

  if (db.data.users.find(u => u.email === email)) {
    return res.status(400).json({ message: "Email đã tồn tại!" });
  }

  db.data.users.push({ fullName, email, phone, password });
  await db.write();

  res.json({ message: "Đăng ký thành công!" });
});

// API Đăng nhập
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = db.data.users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(400).json({ message: "Sai email hoặc mật khẩu!" });
  }

  res.json({ message: "Đăng nhập thành công!", user });
});

app.listen(3000, () =>
  console.log("✅ Server chạy ở http://localhost:3000")
);
