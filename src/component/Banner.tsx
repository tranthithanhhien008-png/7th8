import React from 'react';
import './Banner.css'
const Banner: React.FC = () => {
  return (
    <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <img src="/banner/1.png" className="d-block w-100" alt="Banner 1" />
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img src="/banner/2.jpg" className="d-block w-100" alt="Banner 2" />
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img src="/banner/3.png" className="d-block w-100" alt="Banner 2" />
        </div>
      </div>

      {/* Điều khiển chuyển slide */}
      <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
