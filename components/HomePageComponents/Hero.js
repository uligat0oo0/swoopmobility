import React, { useEffect } from "react";
import { useState, useRef } from "react";
import styles from "../../styles/homeModules/Hero.module.css";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

export default function Hero({ isBreakpoint, offsetY }) {
  const [playing, setPlaying] = useState(false);
  const router = useRouter();
  const roosterHeight = isBreakpoint ? 1300 : 1300;
  const videoRef = useRef(null);

  const handleViewRooster = () => {
    window.scrollTo({ top: roosterHeight, behavior: "smooth" });
  };

  const startVideo = () => {
    videoRef.current.play();
    setPlaying(true);
  };

  const pauseVideo = () => {
    videoRef.current.pause();
    setPlaying(false);
  };
  const handleVideoPress = () => {
    if (!playing) {
      startVideo();
    } else {
      pauseVideo();
    }
  };

  useEffect(() => {
    pauseVideo();
  }, [offsetY]);

  return (
    <div className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.overlay}></div>
        <div
          className={styles.imgContainer}
          style={{ transform: `scale(${offsetY / 40 + 100}%)` }}
          n
        >
          <video
            playsInline
            playsInline={true}
            style={{ WebkitMediaControls: "display(none)" }}
            poster="/poster.webp"
            loop
            ref={videoRef}
          >
            <source
              src="/swoop2.mp4"
              style={{ transform: `scale(${offsetY})` }}
            />
          </video>
        </div>

        <div className={styles.textContainer}>
          <h2>El futuro del transporte personal</h2>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => handleViewRooster()}
              className="primaryButton"
            >
              Ordenar ahora
            </button>
            <button
              style={{ display: "flex" }}
              className="secondaryButton"
              onClick={(e) => {
                handleVideoPress(e);
              }}
            >
              <p style={{ margin: "auto" }}>
                {playing ? "Pausar Video" : "Reproducir video"}
              </p>
              <div style={{ margin: "auto 0 auto 10px" }}></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
