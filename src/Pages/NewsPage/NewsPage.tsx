import { NewsItem } from "./Components/NewsItem/NewsItem";
import styles from "./styles.module.css";

export const NewsPage = () => {
  const mainData = {
    img: "/news1.png",
    heading: "🧹 Генеральная уборка подъезда — с музыкой!",
    text: "В эту пятницу в нашем доме пройдёт весенняя уборка. Приглашаем всех на весёлый субботник — будет музыка, швабры и хорошее настроение!",
  };

  const data = [
    {
      img: "/news2.png",
      heading: "💡 Лампочка на третьем этаже больше не моргает!",
      text: "В эту пятницу в нашем доме пройдёт весенняя уборка. Приглашаем всех на весёлый субботник — будет музыка, швабры и хорошее настроение!",
    },
    {
      img: "/news1.png",
      heading: "🐾 Найден кот — теперь он наш председатель?",
      text: "В подвале найден пушистый представитель местной фауны. Пока хозяин не объявился, кот участвует в заседаниях правления ТСЖ. Вроде доволен.",
    },
    {
      img: "/news1.png",
      heading: "🚪 Новый домофон говорит «Добро пожаловать»!",
      text: "Установили новый домофон — теперь он не только работает, но и приветствует вас голосом. Правда, иногда путает «Добро пожаловать» с «До свидания».",
    },
    {
      img: "/news1.png",
      heading: "🌷 Бонус за цветы у подъезда",
      text: "Самое зелёное крыльцо месяца получит почётную грамоту и шоколадку от ТСЖ. Пусть каждый цветок работает на репутацию дома!",
    },
    {
      img: "/news1.png",
      heading: "🛠 Плановое отключение воды… Но на 5 минут!",
      text: "Впервые за всю историю человечества — отключение воды продлилось ровно 5 минут! Наш сантехник заслужил премию и бурные аплодисменты.",
    },
    {
      img: "/news1.png",
      heading: "📦 Кто поставил коробки в лифт?",
      text: "Новая головоломка от ТСЖ: найти владельца бесконечных коробок в лифте. Подсказка — на одной коробке написано «Переезд 2022».",
    },
  ];

  return (
    <div className={styles.root}>
      <NewsItem
        img={mainData.img}
        heading={mainData.heading}
        text={mainData.text}
        className={styles.main}
      />
      <div>
        <div className={styles.other}>
          {data.map((item) => (
            <NewsItem
              img={item.img}
              heading={item.heading}
              text={item.text}
              className={styles.news}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

/*
  <img src="/news_2.png" alt="news" width={500} />
      <div className={styles["text-block"]}>
        <div className={styles.heading}>Новостей нет</div>
        <div className={styles.description}>
          И всё у всех хорошо и слава Богу.
        </div>
      </div>

*/
