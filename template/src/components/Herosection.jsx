import "./Herosection.css"

export default function Herosection() {
    return (
      <div className="herosection-container">
        <img src="./src/assets/Coat.webp" alt="cover-image" className="cover-image"/>
        <div className="herosection-overlay"></div>
        <div className="herosection-text">
          <h2 className="herosection-heading">Louis Vuitton x Virgil Abloh</h2>
          <p className="herosection-para">Honoring the legacy of Virgil Abloh,<br/> where creativity meets elegance in every stitch.</p>
          <button className="explore-button">Explore the collection</button>
        </div>
      </div>
    );
}
