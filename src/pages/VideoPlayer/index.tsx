import ReactPlayer from 'react-player';
import styles from './video-player.module.css';
import { useLocation } from 'react-router-dom';

const VideoPlayer = () => {
  const location = useLocation();
  const link = location.search.slice(6);

  return (
    <div className={styles.player__wrapper}>
      <ReactPlayer controls url={link} width="1024px" height="600px" playing />
    </div>
  );
};

export default VideoPlayer;
