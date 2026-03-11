import { useState, useEffect } from 'react';

const timelineData = [
  {
    id: 'happening',
    label: 'Chỉ còn:',
    time: '21:30',
    isHappening: true,
    endTime: new Date('2026-03-10T21:30:00')
  },
  {
    id: 'soon',
    label: 'Sắp diễn ra',
    time: '21:30',
    isHappening: false
  },
  {
    id: 'tomorrow1',
    label: 'Ngày mai',
    time: '00:00',
    isHappening: false
  },
  {
    id: 'tomorrow2',
    label: 'Ngày mai',
    time: '09:00',
    isHappening: false
  },
  {
    id: 'tomorrow3',
    label: 'Ngày mai',
    time: '12:00',
    isHappening: false
  }
];

function FlashsaleTimeline({ activeTimeline = 'happening', onTimelineChange }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-03-10T21:30:00');

    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <div className="timeline-title">
      <div className="timeline-wrapper">
        <div className="listing-timeline col5 full">
        {timelineData.map((item) => (
          <a
            key={item.id}
            href="javascript:;"
            className={`${activeTimeline === item.id ? 'active endtime' : 'new'} ${item.isHappening && activeTimeline === item.id ? 'endtime' : ''}`}
            onClick={() => onTimelineChange && onTimelineChange(item.id)}
          >
            {item.isHappening && activeTimeline === item.id ? (
              <>
                <span className="title-end">Chỉ còn: <br /></span>
                <span className="countdown-timer">
                  <label id="hour">{formatNumber(timeLeft.hours)}</label>
                  <label id="minute">{formatNumber(timeLeft.minutes)}</label>
                  <label id="second">{formatNumber(timeLeft.seconds)}</label>
                </span>
              </>
            ) : (
              <>
                <span>{item.label}</span>
                <span>{item.time}</span>
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
