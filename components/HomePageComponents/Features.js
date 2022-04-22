import React from "react";
import Gallery from "./Gallery";
import styles from "../../styles/homeModules/Features.module.css";

export default function Features() {
  return (
    <div className={styles.features}>
      <h2 style={{ margin: "0 10% 60px 10%" }}>Especificaciones</h2>
      <div className={styles.featuresContainer}>
        <Gallery
          images={[
            { url: "/cargador1.webp", blur: "/cargador1_blur.webp" },
            { url: "/cargador2.webp", blur: "/cargador2_blur.webp" },
            { url: "/cargador3.webp", blur: "/cargador3_blur.webp" },
          ]}
          title="Super cargador integrado"
          description="Tiempo de recarga rápido y siempre contigo."
        />
        <Gallery
          images={[
            {
              url: "/alarma_inalambrica.webp",
              blur: "/alarma_inalambrica_blur.webp",
            },
            {
              url: "/alarma_inalambrica2.webp",
              blur: "/alarma_inalambrica2_blur.webp",
            },
          ]}
          title="Alarma inhalámbrica"
          description="Encendido remoto, bloqueo de llanta y sensor de movimiento."
        />
        <Gallery
          images={[
            { url: "/doble_frenado.webp", blur: "/doble_frenado_blur.webp" },
            { url: "/doble_frenado2.webp", blur: "/doble_frenado2_blur.webp" },
            { url: "/doble_frenado3.webp", blur: "/doble_frenado3_blur.webp" },
          ]}
          title="Doble frenado"
          description="Freno electrónico e hodráulico con sistema ABS."
        />
        <Gallery
          images={[
            { url: "/torque.webp", blur: "/torque_blur.webp" },
            { url: "/torque2.webp", blur: "/torque2_blur.webp" },
          ]}
          title="Torque para subidas"
          description="Gran potencia para alcanzar pendientes pronunciadas"
        />
        <Gallery
          images={[
            {
              url: "/llantas_todo_terreno.webp",
              blur: "/llantas_todo_terreno_blur.webp",
            },
            {
              url: "/llantas_todo_terreno2.webp",
              blur: "/llantas_todo_terreno2_blur.webp",
            },
            {
              url: "/llantas_todo_terreno3.webp",
              blur: "/llantas_todo_terreno3_blur.webp",
            },
          ]}
          title="Llantas todo terreno"
          description="Grandes y versátiles, aptas para todas las circunstancias."
        />
        <Gallery
          images={[
            {
              url: "/gran_superficie.webp",
              blur: "/gran_superficie_blur.webp",
            },
            {
              url: "/gran_superficie2.webp",
              blur: "/gran_superficie2_blur.webp",
            },
            {
              url: "/gran_superficie3.webp",
              blur: "/gran_superficie3_blur.webp",
            },
          ]}
          title="Gran superficie"
          description="Estabilidad y apoyo incluso para dos personas."
        />
        <Gallery
          images={[
            {
              url: "/movilidad_ecologica.webp",
              blur: "/movilidad_ecologica_blur.webp",
            },
            {
              url: "/movilidad_ecologica2.webp",
              blur: "/movilidad_ecologica2_blur.webp",
            },
            {
              url: "/movilidad_ecologica3.webp",
              blur: "/movilidad_ecologica3_blur.webp",
            },
          ]}
          title="Movilidad sostenible"
          description="No genera ruido ni emisiones de C02."
        />
        <Gallery
          images={[
            {
              url: "/luces_direccionales.webp",
              blur: "/luces_direccionales_blur.webp",
            },
            {
              url: "/luces_direccionales2.webp",
              blur: "/luces_direccionales2_blur.webp",
            },
          ]}
          title="Iluminación LED"
          description="Luces frontales, de freno y direccionales para máxima seguridad"
        />
      </div>
    </div>
  );
}
