import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import styles from "../../styles/homeModules/Gallery.module.css";

export default function Gallery({ images, description, title }) {
  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        <Carousel infiniteLoop={true} showThumbs={false}>
          {images.map((image) => {
            return (
              <div
                className={styles.galleryCard}
                key={image}
                style={{
                  width: "100%",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img src={image.url} />
              </div>
            );
          })}
        </Carousel>
        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <p className={styles.title}>
              <b>{title}</b>
            </p>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
