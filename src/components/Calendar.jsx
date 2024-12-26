import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

const MyCalendar = ({ date, monthlyData }) => {
  // 날짜별 일기 데이터 정리
  const diaryMap = monthlyData.reduce((acc, diary) => {
    const diaryDate = new Date(diary.createdDate);
    const dateKey = `${diaryDate.getFullYear()}-${diaryDate.getMonth()}-${diaryDate.getDate()}`;
    
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(diary);
    
    return acc;
  }, {});

  // 현재 선택된 월이 아닌 날짜 비활성화
  const tileDisabled = ({ date: tileDate, view }) => {
    if (view === 'month') {
      return tileDate.getMonth() !== date.getMonth();
    }
    return false;
  };

  // 날짜 아래에 체크 표시 추가
  const tileContent = ({ date: tileDate, view }) => {
    if (view === 'month') {
      const dateKey = `${tileDate.getFullYear()}-${tileDate.getMonth()}-${tileDate.getDate()}`;
      const diaries = diaryMap[dateKey];

      if (diaries && diaries.length > 0) {
        return (
          <div className="dot">
            {diaries.map((diary, index) => (
              <span 
                key={index} 
                className={`dot-mark emotion-${diary.emotionId}`}
              >●</span>
            ))}
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className="calendar-container">
      <Calendar 
        value={date}
        onChange={() => {}}
        formatMonthYear={(locale, date) => ''}
        navigationLabel={null}
        showNavigation={false}
        tileDisabled={tileDisabled}
        tileContent={tileContent}
        calendarType="gregory"
      />
    </div>
  );
};

export default MyCalendar;