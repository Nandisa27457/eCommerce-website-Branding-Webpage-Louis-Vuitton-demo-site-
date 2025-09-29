import "./Herosection.css"

export default function Herosection() {
    return (
      <div className="herosection-container">
        <img src="./src/assets/cover-2.webp" alt="cover-image" className="cover-image"/>
        <div className="herosection-overlay"></div>
        <div className="herosection-text">
          <h2 className="herosection-heading">Louis Vuitton</h2>
          <p className="herosection-para">Discover the new Spring-Summer 2024 collection,<br/> where creativity meets elegance in every stitch.</p>
          <button className="explore-button">Explore the collection</button>
        </div>
      </div>
    );
}
