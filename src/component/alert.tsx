import React, { useState } from "react";

function Alert() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <button
        onClick={() => setShow(true)}
        style={{
          padding: "8px 16px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Mở Alert
      </button>

      {show && (
        <div
          style={{
            marginTop: 20,
            padding: "12px 16px",
            background: "#d1fae5",
            border: "1px solid #10b981",
            borderRadius: 6,
            color: "#065f46",
          }}
        >
          Đây là thông báo!{" "}
          <button
            onClick={() => setShow(false)}
            style={{
              marginLeft: 10,
              padding: "4px 8px",
              background: "#10b981",
              color: "white",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            Đóng
          </button>
        </div>
      )}
    </div>
  );
}

export default Alert;
