import React, { useRef } from "react";

import { SubHeading } from "../../components";
import "./Gallery.css";
import { images } from "../../constants";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => { 
  const scrollContainerRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollContainerRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="gallery_container section__padding">
      <div className="gallery_container_info">
        <SubHeading text="Instagram" />
        <h1>Photo Gallery</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis
          ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button">View More</button>
      </div>
      <div className="gallery_container_images" ref={scrollContainerRef}>
        <BsArrowLeftShort className="gallery_container_images_arrow_left" onClick={() => scroll(-300)} />
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery_container_image_container">
            <BsInstagram className="gallery_container_image_instagram" />
            <img src={image} alt={`gallery${index}`} />
          </div>
        ))}
        <BsArrowRightShort className="gallery_container_images_arrow_right" onClick={() => scroll(+300)} />
      </div>
    </div>
  );
};

export default Gallery;
