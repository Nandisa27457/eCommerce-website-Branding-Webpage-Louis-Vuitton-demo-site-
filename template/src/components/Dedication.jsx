import "./Dedication.css";
import virgilStory from "../assets/story-virgil-abloh.webp";

export default function Dedication() {
    return (
        <div className="dedication-container">
            <h1>Dedication</h1>
            <div className="dedication-flex-row">
                <div className="dedication-image-wrapper">
                    <img
                        src={virgilStory}
                        alt="Virgil Abloh"
                        className="dedication-image"
                    />
                </div>
                <div className="dedication-text">
                    <h1 className="dedication-heading">
                        A Dedication to Virgil Abloh
                    </h1>
                    <p className="dedication-para">
                        In loving memory of Virgil Abloh, a visionary designer
                        whose creativity and innovation transformed the fashion
                        industry. His legacy lives on through his groundbreaking
                        work and the inspiration he continues to provide to
                        aspiring designers worldwide.
                    </p>
                </div>
            </div>
        </div>
    );
}
