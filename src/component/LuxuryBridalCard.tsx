import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export interface Product {
  id: number;
  name: string;
  images: string[];
  price: number;
  oldPrice?: number;
  rating?: number;      
  shortDesc?: string;   
  tags?: string[];
  category?: string;
}

interface LuxuryBridalCardProps {
  product: Product;
  onView?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  className?: string;
}

const LuxuryBridalCard: React.FC<LuxuryBridalCardProps> = ({
  product,
  onView,
  onAddToCart,
  className = ""
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
const navigate=useNavigate();
  const formatVND = (value: number) =>
    value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫";

  const handleFavoriteClick = () => {
    setIsFavorite(true);
  };

  // useEffect(()=>{
  //   console.log(product)
  // },[product])

  if(!product) return <div>...</div>

  return (
    <div className={`card h-100 shadow-sm border-0 ${className}`} style={{ borderRadius: 12, marginBottom: "24px",boxShadow: "0 16px 20px rgba(0, 0, 0, 0.15) " }}>
      <div className="position-relative">
        <img
          src={product.images?.[0] || "/placeholder.jpg"}
          className="card-img-top img-fluid"
          alt={product.name}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "auto",
            maxHeight: 320, 
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            backgroundColor: "#f8f8f8" 
          }}
        />

        <span
          className="badge bg-dark text-white position-absolute"
          style={{ top: 12, left: 12, borderRadius: 8 }}
        >
          Sang trọng
        </span>
        <button
          type="button"
          className="btn btn-light position-absolute d-flex align-items-center justify-content-center"
          style={{
            top: 10,
            right: 10,
            width: 40,
            height: 40,
            borderRadius: 10,
          }}
          aria-label="Add to wishlist"
          onClick={handleFavoriteClick}
        >
          <i
            className={`bi ${isFavorite ? "bi-heart-fill text-danger" : "bi-heart"}`}
          />
        </button>
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title mb-1" style={{ fontWeight: 600 }}>
          {product.name}
        </h5>
        {product.rating !== undefined && (
          <div className="d-flex align-items-center mb-2">
            <small className="me-2">{product.rating.toFixed(1)}</small>
            <div>
              {Array.from({ length: 5 }).map((_, i) => (
                <i
                  key={i}
                  className={`bi ${
                    i < Math.round(product.rating ?? 0) ? "bi-star-fill" : "bi-star"
                  }`}
                  style={{ fontSize: 14 }}
                />
              ))}
            </div>
          </div>
        )}
        {product.shortDesc && (
          <p
            className="card-text text-muted small mb-3"
            style={{ lineHeight: 1.2 }}
          >
            {product.shortDesc}
          </p>
        )}

        <div className="mt-auto">
          <div className="d-flex align-items-baseline gap-2 mb-3">
            <div>
              <div className="fs-5" style={{ fontWeight: 700 }}>
                {formatVND(product.price)}
              </div>
              {product.oldPrice && (
                <div className="text-muted small text-decoration-line-through">
                  {formatVND(product.oldPrice)}
                </div>
              )}
            </div>
            <div className="ms-auto">
              {product.tags?.slice(0, 2).map((t, idx) => (
                <span
                  key={idx}
                  className="badge bg-light text-dark ms-1"
                  style={{ borderRadius: 6 }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="d-flex gap-2">
          <button
                className="btn btn-outline-dark flex-grow-1"
                onClick={() => navigate(`/trangchitiet?id=${product.id}`)}
              >
                Xem
              </button>
            <button
              className="btn btn-dark"
              onClick={() => onAddToCart && onAddToCart(product)}
            >
             <i className="bi bi-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="card-footer bg-white border-0 small text-muted">
        <div className="d-flex justify-content-between">
          <div>Miễn phí tư vấn cá nhân</div>
          <div>Giao hàng toàn quốc</div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryBridalCard;
