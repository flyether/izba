import styles from './step-five.module.css';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const videoLinks = [
  'https://www.youtube.com/watch?v=rWAsc20PdSw',
  'https://www.youtube.com/watch?v=vhP4e0pAC1I',
  'https://www.youtube.com/watch?v=wsd_ZVRQ1RI',
  'https://www.youtube.com/watch?v=jHDFVunR760',
  'https://www.youtube.com/watch?v=rWAsc20PdSw',
  'https://www.youtube.com/watch?v=vhP4e0pAC1I',
];

const Step5 = () => {
  return (
    <section className={styles.step_five__wrapper}>
      <div className={styles.step_five__container}>
        <div className={styles.step_five__content}>
          <div className={styles.content__header}>
            <div className={styles.header__top}>
              <h3 className={styles.header__title}>О нас</h3>
              <h4 className={styles.header__subtitle}>Как мы работаем</h4>
            </div>
            <p className={styles.header__bottom}>
              Как принято считать, сделанные на базе интернет-аналитики выводы представляют собой не
              что иное, как квинтэссенцию победы маркетинга над разумом и должны быть преданы
              социально-демократической анафеме. Вот вам яркий пример современных тенденций —
              семантический разбор внешних противодействий напрямую зависит от укрепления моральных
              ценностей.
            </p>
          </div>
          <ul className={styles.content__grid}>
            {videoLinks.map((el, i) => (
              <li key={`${el}${i}`} className={styles.grid__item}>
                <Link to={`/video?link=${el}`}>
                  <ReactPlayer
                    light
                    url={el}
                    width="100%"
                    height="100%"
                    playIcon={<span className={styles.play_icon} />}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Step5;
