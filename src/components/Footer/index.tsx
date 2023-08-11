import styles from './footer.module.css';
import OxyLogo from '../../assets/img/oxy_logo.png';
import TelegramIcon from '../../assets/icons/telegram_icon.png';
import InstagramIcon from '../../assets/icons/instagram_icon.png';
import WhatsappIcon from '../../assets/icons/whatsapp_icon.png';
import VKIcon from '../../assets/icons/vk_icon.png';
import { PHONE_NUMBER } from '../../models/constants';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top} />
      <div className={styles.footer__bottom}>
        <div className={styles.bottom__container}>
          <div>
            <a href="https://oxy-group.ru/" target="_blank" rel="noopener noreferrer">
              <img src={OxyLogo} />
            </a>
          </div>

          <div className={styles.bottom__right}>
            <span className={styles.right__top}>г. Москва</span>
            <a href={`tel:${PHONE_NUMBER}`} className={styles.right__middle}>
              {PHONE_NUMBER}
            </a>
            <p className={styles.text}>
              ИНН: 480703405080 <br />
              ИП Оноприенко Валерий Валериевич{' '}
            </p>

            {/* <div className={styles.right__social}>
              <a href="/" target="_blank">
                <img src={TelegramIcon} alt="Ссылка на нашу группу в Telegram" />
              </a>
              <a href="/" target="_blank">
                <img src={InstagramIcon} alt="Ссылка на нашу группу в Instagram" />
              </a>
              <a href="/" target="_blank">
                <img src={WhatsappIcon} alt="Ссылка на нашу группу в Whatsapp" />
              </a>
              <a href="/" target="_blank">
                <img src={VKIcon} alt="Ссылка на нашу группу ВКонтакте" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
