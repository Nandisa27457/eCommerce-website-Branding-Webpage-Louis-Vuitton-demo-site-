import "./Collections.css";
import lilacCollection from "../assets/lilac collection.webp";
import flowerCollection from "../assets/flower-collection.webp";
import pontCover from "../assets/Pont-cover.webp";

export default function Collections() {
    return (
        <div className="collections-container">
            <marquee
                className="collections-marquee"
                behavior="scroll"
                direction="left"
                scrollamount="10">
                Explore the iconic collections of the late Virgil Abloh - where
                timeless elegance meets modern sophistication. Discover our
                curated selection of fashion, accessories, bags and more...
            </marquee>
            <h1 className="featured-heading">Featured Collections</h1>
            <div className="collections-images">
                <img
                    src={lilacCollection}
                    alt="collection-1"
                    className="collection-image"
                />
                <div className="collections-row">
                    <img
                        src={flowerCollection}
                        alt="collections-2"
                        className="collection-image-2"
                    />
                    <img
                        src={pontCover}
                        alt="collections-3"
                        className="collection-image-3"
                    />
                </div>
            </div>
        </div>
    );
}
