import { FC } from "react";
import CartoonImage from "../../assets/cartoon.jpg";
import MovieImage from "../../assets/movie.png";
import LifeImage from "../../assets/life.jpg";
import FoodImage from "../../assets/food.jpg";
import LogoImage from "../../assets/logo.png";
import styles from "./styles.module.scss";

const SecondSection: FC = () => {
  return (
    <div className={styles.secondSection}>
      {/* tabs */}
      <ul>
        <li>动画</li>
        <li>美食</li>
        <li>电影</li>
        <li>生活</li>
      </ul>

      {/* tab content */}
      <div>
        <section>
          <h2>动画</h2>
          <img src={CartoonImage} alt="Cartoon" />
        </section>
      </div>
      <div>
        <section>
          <h2>美食</h2>
          <img src={FoodImage} alt="Food" />
        </section>
      </div>
      <div>
        <section>
          <h2>电影</h2>
          <img src={MovieImage} alt="Movie" />
        </section>
      </div>
      <div>
        <section>
          <h2>生活</h2>
          <img src={LifeImage} alt="Life" />
        </section>
      </div>
    </div>
  );
};

export default SecondSection;