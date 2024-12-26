import "./EmotionItem.css";
import { getEmotionImage } from "../util/get-emotion-img"

const EmotionItem = ({emotionName, emotionId, isSelected, onClick}) => {
  return (
    <div
      onClick={onClick}
      className={`emotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : ''
      }`}
    >
      <div className="emotion_img">
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="emotion_name">{emotionName}</div>
    </div>
  )
}

export default EmotionItem;