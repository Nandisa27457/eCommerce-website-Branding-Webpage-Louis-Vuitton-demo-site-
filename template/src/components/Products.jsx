import "./Products.css";

export default function FashionGrid() {
  return (
    <div className="fashion-container">
      <h1>Products</h1>
      <div className="products-row">
        {/* First set: main image and grid */}
        <div className="product-block">
          <div className="image-card main-image">
            <img src="./src/assets/Virgilx Nigo.webp" alt="Front look" className="front" />
            <img src="./src/assets/back-view.png" alt="Back look" className="back" />
          </div>
          <div className="details-grid">
            <div className="image-card detail-image"><img src="./src/assets/close-up.jpg" alt="Detail view 1" /></div>
            <div className="image-card detail-image"><img src="./src/assets/item image.avif" alt="Detail view 2" /></div>
            <div className="image-card detail-image"><img src="./src/assets/Item-image-pants .avif" alt="Detail view 3" /></div>
            <div className="image-card detail-image"><img src="./src/assets/hat.jpg" alt="Detail view 4" /></div>
          </div>
        </div>
        {/* Second set: main image and grid */}
        <div className="product-block">
          <div className="image-card main-image">
            <img src="./src/assets/bag-full.webp" alt="Front look 2" className="front" />
            <img src="./src/assets/bag-image .jpg" alt="Back look 2" className="back" />
          </div>
          <div className="details-grid">
            <div className="image-card detail-image"><img src="./src/assets/bag-1.jpg" alt="Detail view 5" /></div>
            <div className="image-card detail-image"><img src="./src/assets/bag-4(1).jpeg" alt="Detail view 6" /></div>
            <div className="image-card detail-image"><img src="./src/assets/bag-2(1).jpg" alt="Detail view 7" /></div>
            <div className="image-card detail-image"><img src="./src/assets/bag-5.webp" alt="Detail view 8" /></div>
          </div>
        </div>
        {/* Third set: main image and grid */}
        <div className="product-block">
          <div className="image-card main-image">
            <img src="./src/assets/bracelet.webp" alt="Front look 3" className="front" />
            <img src="./src/assets/bracelet-top.webp" alt="Back look 3" className="back" />
          </div>
          <div className="details-grid">
            <div className="image-card detail-image"><img src="./src/assets/bracelet-1.avif" alt="Detail view 9" /></div>
            <div className="image-card detail-image"><img src="./src/assets/bracelet-2.avif" alt="Detail view 10" /></div>
            <div className="image-card detail-image"><img src="./src/assets/bracelet-3.avif" alt="Detail view 11" /></div>
            <div className="image-card detail-image"><img src="./src/assets/bracelet-4.avif" alt="Detail view 12" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
