import { FC } from "react";
import BannerImage from '../../assets/banner.jpg';
import styles from './styles.module.scss' // css module引入形式
// import './styles.module.scss' 全局引入

const FirstSection: FC = () => {
  return <div className={styles.firstSection}>
    <img src={BannerImage} alt="Banner" />
  </div>;
};

export default FirstSection;
