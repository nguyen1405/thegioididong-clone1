import { useState, useEffect } from 'react';

const timelineData = [
  {
    id: 'happening',
    label: 'Đang diễn ra',
    time: '21:30',
    isHappening: true,
    endTime: new Date('2026-03-10T21:30:00')
  },
  {
    id: 'soon',
    label: 'Sắp diễn ra',
    time: '00:00',
    isHappening: false
  },
  {
    id: 'tomorrow1',
    label: 'Ngày mai',
    time: '09:00',
    isHappening: false
  },
  {
    id: 'tomorrow2',
    label: 'Ngày mai',
    time: '12:00',
    isHappening: false
  },
  {
    id: 'tomorrow3',
    label: 'Ngày mai',
    time: '15:00',
    isHappening: false
  }
];

function FlashsaleTimeline({ activeTimeline = 'happening', onTimelineChange }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 30, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <div className="flashsale-timeline">
      <div className="timeline-wrapper">
        <div className="listing-timeline">
          {timelineData.map((item) => (
            <a
              key={item.id}
              href="javascript:;"
              className={`timeline-item ${activeTimeline === item.id ? 'active' : ''} ${item.isHappening ? 'happening' : ''}`}
              onClick={() => onTimelineChange && onTimelineChange(item.id)}
            >
              {item.isHappening && activeTimeline === item.id ? (
                <>
                  <span className="timeline-label">Kết thúc trong</span>
                  <span className="countdown-timer">
                    <span className="time-block">
                      <label>{formatNumber(timeLeft.hours)}</label>
                      <small>Giờ</small>
                    </span>
                    <span className="time-separator">:</span>
                    <span className="time-block">
                      <label>{formatNumber(timeLeft.minutes)}</label>
                      <small>Phút</small>
                    </span>
                    <span className="time-separator">:</span>
                    <span className="time-block">
                      <label>{formatNumber(timeLeft.seconds)}</label>
                      <small>Giây</small>
                    </span>
                  </span>
                </>
              ) : (
                <>
                  <span className="timeline-label">{item.label}</span>
                  <span className="timeline-time">{item.time}</span>
                </>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlashsaleTimeline;
