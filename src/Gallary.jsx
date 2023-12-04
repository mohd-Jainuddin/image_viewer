import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// Imageg 
const imageg = [
  { src: "/1.jpg", alt: "1" },
  { src: "/2.jpg", alt: "2" },
  { src: "/3.jpg", alt: "3" },
  { src: "/4.jpg", alt: "4" },
  { src: "/5.jpg", alt: "5" },
  { src: "/6.jpg", alt: "6" },
  { src: "/7.jpg", alt: "7" },
  { src: "/8.jpg", alt: "8" },
  { src: "/9.jpg", alt: "9" },
  { src: "/10.jpg", alt: "10" },
  { src: "/11.jpg", alt: "11" },
  { src: "/12.jpg", alt: "12" },
  { src: "/13.jpg", alt: "13" },
  { src: "/14.jpg", alt: "14" },
  { src: "/15.jpg", alt: "15" },
  { src: "/16.jpg", alt: "16" },
  { src: "/17.jpg", alt: "17" },
  { src: "/18.jpg", alt: "18" },
  { src: "/19.jpg", alt: "19" },
];

function Gallery() {
  return (
    <div className="App">
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
        {imageg.map((img) => {
          return (
            <a href={img.src}>
              <img alt={img.alt} src={img.src} />
            </a>
          );
        })}
      </LightGallery>
    </div>
  );
}

export default Gallery;
