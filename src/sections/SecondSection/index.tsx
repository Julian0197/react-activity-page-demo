import { FC, useEffect, useRef, useState } from "react";
import CartoonImage from "../../assets/cartoon.jpg";
import MovieImage from "../../assets/movie.png";
import LifeImage from "../../assets/life.jpg";
import FoodImage from "../../assets/food.jpg";
import LogoImage from "../../assets/logo.png";
import styles from "./styles.module.scss";
import classNames from "classnames";

const tabs = [
  {
    key: "cartoon",
    title: "动画",
    img: CartoonImage,
  },
  {
    key: "food",
    title: "美食",
    img: FoodImage,
  },
  {
    key: "movie",
    title: "电影",
    img: MovieImage,
  },
  {
    key: "life",
    title: "生活",
    img: LifeImage,
  },
];

const TAB_HEIGHT = 65

const SecondSection: FC = () => {
  const [activeTab, setActiveTab] = useState<string>("cartoon");
  const [isFixed, setIsFixed] = useState<boolean>(false);

  const secondSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onScroll = () => {
    // tab滚动到屏幕最上方，添加吸顶效果
    if (secondSectionRef.current) {
      // getBoundingClientRect获取指定元素的客户端矩形大小和位置信息
      const { top } = secondSectionRef.current.getBoundingClientRect();
      setIsFixed(top <= 0);
    }

    // 滚动到哪个Section，就高亮对应的tab
    const sectionNodes = secondSectionRef.current!.querySelectorAll("section");
    // NodeList 类型转化为数组
    Array.from(sectionNodes).forEach((sectionEl) => {
      const { top } = sectionEl.getBoundingClientRect();
      const key = sectionEl.getAttribute("data-id") || "";

      if (top <= TAB_HEIGHT) {
        setActiveTab(key)
      }
    });
  };

  const activate = (key: string) => {
    setActiveTab(key);
    // `[data-id=${key}]` 表示选择具有 `data-id` 属性值等于 `key` 的元素
    const tabContentEl = document.querySelector(`[data-id=${key}]`);

    if (tabContentEl) {
      tabContentEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.secondSection} ref={secondSectionRef}>
      {/* tabs */}
      <ul className={classNames({ [styles.isFixed]: isFixed })}>
        {tabs.map((tab) => (
          <li key={tab.key} onClick={() => activate(tab.key)}>
            <span>{tab.title}</span>
            <span
              className={classNames(styles.line, {
                [styles.visible]: activeTab === tab.key,
              })}
            />
          </li>
        ))}
      </ul>

      {/* tab content */}
      <div>
        {tabs.map((tab) => (
          <section data-id={tab.key}>
            <h2>{tab.title}</h2>
            <img src={tab.img} alt={tab.key} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default SecondSection;
