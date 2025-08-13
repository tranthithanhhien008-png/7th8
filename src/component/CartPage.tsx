import React, { useEffect, useState } from "react";
import { useParams, Link, useSearchParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

interface CartItem {
    id: number;
    name: string;
    price: number;
    images?: string[];
    quantity: number;
}

function CartPage() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [searchParams] = useSearchParams();
    const user_id = searchParams.get("user_id");


    // Lấy giỏ hàng từ localStorage khi load trang
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(storedCart);
    }, []);

    // Xóa sản phẩm khỏi giỏ hàng
    const handleRemove = (id: number) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // Cập nhật số lượng
    const handleQuantityChange = (id: number, quantity: number) => {
        if (quantity < 1) return;
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    useEffect(() => {
        console.log("cart_id:", user_id)

        fetch(`http://localhost:3001/cart?user_id=${user_id}`)
            .then(res => {
                if (!res.ok) throw new Error('Không tìm thấy sản phẩm');
                return res.json();
            })
            .then(data => {
                if (data.length > 0) {
                    setCart(data[0].items); // lấy mảng items bên trong giỏ
                    console.log("cart", cart)
                } else {
                    setCart([]);
                }
            })
            .catch(console.error)
    }, [user_id]);

    // Tính tổng tiền
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return (
            <div className="container mt-4">
                <h3>Giỏ hàng trống</h3>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <h3>🛒 Giỏ hàng</h3>
            <table className="table table-bordered align-middle">
                <thead>
                    <tr>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td style={{ width: "120px" }}>
                                <img
                                    src={item.images?.[0] ?? ""}
                                    alt={item.name}
                                    className="img-fluid rounded"
                                />
                            </td>
                            <td>{item.name}</td>
                            <td className="text-danger">
                                {item.price.toLocaleString("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                })}
                            </td>
                            <td style={{ width: "140px" }}>
                                <div className="d-flex align-items-center">
                                    <button
                                        className="btn btn-sm border"
                                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                    >
                                        -
                                    </button>

                                    <input
                                        type="number"
                                        value={item.quantity}
                                        min={1}
                                        onChange={(e) =>
                                            handleQuantityChange(item.id, Number(e.target.value))
                                        }
                                        className="form-control form-control-sm mx-1 text-center"
                                        style={{ width: "60px" }}
                                    />

                                    <button
                                        className="btn btn-sm border"
                                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </td>


                            <td className="text-danger">
                                {(item.price * item.quantity).toLocaleString("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                })}
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleRemove(item.id)}
                                >
                                    <i className="bi bi-trash"></i> Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="d-flex justify-content-between align-items-center mt-4">
                <h4>
                    Tổng cộng:{" "}
                    <span className="text-danger">
                        {total.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                        })}
                    </span>
                </h4>
                <button className="btn btn-success">
                    <i className="bi bi-credit-card"></i> Thanh toán
                </button>
            </div>
        </div>
    );
}

export default CartPage;
