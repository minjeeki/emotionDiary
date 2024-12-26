import EmotionItem from "./EmotionItem";
import Button from "./Button"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants"
import "./Editor.css";
import { getStringdDated } from "../util/get-stringd-date";

const Editor = ({initData, onSubmit}) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  })

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      })
    }
  }, [initData])
  
  const nav = useNavigate()

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value)
    }

    setInput({
      ...input,
      [name]: value,
    })
  }

  const onClickSubmitButton = () => {
    onSubmit(input)
  }
  return (
    <div className="Editor">
      <section className="date_section">
        <label htmlFor="createdDate">오늘의 날짜</label>
        <input
          type="date"
          name="createdDate"
          id="createdDate"
          onChange = {onChangeInput}
          value={getStringdDated(input.createdDate)}
        />
      </section>
      <section className="emotion_section">
        <label htmlFor="today_emotion">오늘의 감정</label>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick = {() => onChangeInput({
                target: {
                  name: "emotionId",
                  value: item.emotionId,
                }
              })}
              key={item.emotionId} {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <label htmlFor="content">오늘의 일기</label>
        <textarea
          name="content"
          id="content"
          value={input.content}
          placeholder="오늘은 어땠나요?"
          onChange={onChangeInput}
        />
      </section>
      <section className="button_section">
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button onClick={onClickSubmitButton} text={"작성 완료"} type={"POSITIVE"} />
      </section>
    </div>
  )
}

export default Editor;