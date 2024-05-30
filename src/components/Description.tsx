import PropTypes from 'prop-types';
import styles from "../views/Details.module.css";

export default function Description({ title, description, colorOptions }) {
  return (
    <div className={styles["product-description-block"]}>
      <h1 className={styles["product-title"]}>{title}</h1>
      <form className={styles["product-selector"]}>
        <fieldset className={styles["product-fieldset"]}>
          <label className={styles["product-label"]} htmlFor="color">Color</label>
          <select className={styles["product-select"]} id="color">
            {colorOptions.map((color, index) => (
              <option key={index} value={color}>{color}</option>
            ))}
          </select>
        </fieldset>
      </form>
      <div className={styles["product-description"]}>
        <span className={styles["product-label"]}>Descripción</span>
        <p>{description}</p>
      </div>
    </div>
  );
}

Description.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  colorOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};
