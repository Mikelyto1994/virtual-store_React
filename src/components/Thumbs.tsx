import PropTypes from 'prop-types';
import styles from "../views/Details.module.css";

export default function Thumbs({ images, title }) {
  return (
    <section className={styles["product-images-block"]}>
      <div className={styles["product-images"]}>
        {images.map((image, index) => (
          <img
            key={index}
            className={styles["mini-img"]}
            src={image}
            alt={`${title} thumbnail ${index + 1}`}
          />
        ))}
      </div>
      <img
        className={styles["big-img"]}
        id="big-img"
        src={images[0]}
        alt={`${title} main image`}
      />
    </section>
  );
}

Thumbs.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};
