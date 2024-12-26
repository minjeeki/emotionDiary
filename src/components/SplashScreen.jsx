import './SplashScreen.css';
import { getEmotionImage } from '../util/get-emotion-img.js'

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="splash-content">
        <span className="desc">나만의 작은</span>
        <div className="title">감정 일기장</div>
      </div>
      <div className="splash-imgs">
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>
    </div>
  );
};

export default SplashScreen;