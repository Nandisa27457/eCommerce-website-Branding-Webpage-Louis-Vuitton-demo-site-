import "./Dedication.css";

export default function Dedication() {
    return (
        <div className="dedication-container">
            <h1>Dedication</h1>
            <div className="dedication-flex-row">
                <div className="dedication-image-wrapper">
                    <img src="./src/assets/story-virgil-abloh.webp" alt="Virgil Abloh" className="dedication-image" />
                </div>
                <div className="dedication-text">
                    <h1 className="dedication-heading">A Dedication to Virgil Abloh</h1>
                    <p className="dedication-para">In loving memory of Virgil Abloh, a visionary designer whose creativity and innovation transformed the fashion industry. His legacy lives on through his groundbreaking work and the inspiration he continues to provide to aspiring designers worldwide.</p>
                    <p className="dedication-quote">"The only way to be original is to be yourself." - Virgil Abloh</p>
                </div>
            </div>
        </div>
    );
}   