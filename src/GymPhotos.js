import React from 'react';
import './GymPhotos.css';

const GymPhotos = () => {
  const photos = [
    { src: process.env.PUBLIC_URL + "/images/gym1.jpg", alt: "Gym Photo 1" },
    { src: process.env.PUBLIC_URL +  "/images/gym2.jpg", alt: "Gym Photo 2" },
    { src: process.env.PUBLIC_URL + "/images/gym3.jpg", alt: "Gym Photo 3" },
    { src: process.env.PUBLIC_URL + "/images/gym4.jpg", alt: "Gym Photo 4" },
    { src: process.env.PUBLIC_URL + "/images/gym5.jpg", alt: "Gym Photo 5" },
    { src: process.env.PUBLIC_URL + "/images/gym6.jpg", alt: "Gym Photo 6" },
    { src: process.env.PUBLIC_URL + "/images/gym7.jpg", alt: "Gym Photo 7" },
    { src: process.env.PUBLIC_URL + "/images/gym8.jpg", alt: "Gym Photo 8" },
    { src: process.env.PUBLIC_URL + "/images/gym9.jpg", alt: "Gym Photo 9" },
    { src: process.env.PUBLIC_URL + "/images/gym10.jpg", alt: "Gym Photo 10" },
    { src: process.env.PUBLIC_URL + "/images/gym11.jpg", alt: "Gym Photo 11" },
    { src: process.env.PUBLIC_URL + "/images/gym12.jpg", alt: "Gym Photo 12" },
    { src: process.env.PUBLIC_URL + "/images/gym13.jpg", alt: "Gym Photo 13"},
    { src: process.env.PUBLIC_URL + "/images/gym14.jpg", alt: "Gym Photo 14"},
    { src: process.env.PUBLIC_URL + "/images/gym15.jpg", alt: "Gym Photo 15"},
    { src: process.env.PUBLIC_URL + "/images/gym16.jpg", alt: "Gym Photo 16"},
    { src: process.env.PUBLIC_URL + "/images/gym17.jpg", alt: "Gym Photo 17" },
    { src: process.env.PUBLIC_URL + "/images/gym18.jpg", alt: "Gym Photo 18" },
    { src: process.env.PUBLIC_URL + "/images/gym19.jpg", alt: "Gym Photo 19" },
    { src: process.env.PUBLIC_URL + "/images/gym20.jpg", alt: "Gym Photo 20"},
  ];


  return (
    <div className="gym-photos-container">
      {photos.map((photo, index) => (
        <div className="photo-card" key={index}>
          <img src={photo.src} alt={photo.alt} />
          <div className="card-content">
            <h3>{photo.title}</h3>
            <p>{photo.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GymPhotos;
