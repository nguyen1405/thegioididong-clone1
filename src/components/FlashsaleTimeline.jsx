import { useState, useEffect } from 'react';

const timelineData = [
  { id: 'happening', label: 'Đang diễn ra', time: '21:30', isHappening: true },
  { id: 'soon', label: 'Sắp diễn ra', time: '00:00', isHappening: false },
  { id: 'tomorrow1', label: 'Ngày mai', time: '09:00', isHappening: false },
  { id: 'tomorrow2', label: 'Ngày mai', time: '12:00', isHappening: false },
  { id: 'tomorrow3', label: 'Ngày mai', time: '15:00', isHappening: false }
];

function FlashsaleTimeline({ activeTimeline = 'happening', onTimelineChange }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [selectedId, setSelectedId] = useState(activeTimeline || 'happening');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const endHour = 22;
      const endMinute = 0;
      const endSecond = 0;

      const endTime = new Date(now);
      endTime.setHours(endHour, endMinute, endSecond, 0);

      if (now >= endTime) {
        endTime.setDate(endTime.getDate() + 1);
      }

      const diff = endTime - now;
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  const getNextEventTime = () => {
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour < 9) return '09:00';
    if (currentHour < 12) return '12:00';
    if (currentHour < 15) return '15:00';
    if (currentHour < 18) return '18:00';
    if (currentHour < 21) return '21:30';
    return '09:00';
  };

  const handleClick = (id) => {
    setSelectedId(id);
    onTimelineChange && onTimelineChange(id);
  };

  const isActive = selectedId === 'happening';

  return (
    <div className="flashsale-timeline">
      <div className="countdown-container">
        <div 
          className={`countdown-block ${isActive ? 'active' : ''}`}
          onClick={() => handleClick('happening')}
        >
          <span className="countdown-label">Chỉ còn:</span>
          <div className="countdown-timer">
            <span className="time-badge">{formatNumber(timeLeft.hours)}</span>
            <span className="time-separator">:</span>
            <span className="time-badge">{formatNumber(timeLeft.minutes)}</span>
            <span className="time-separator">:</span>
            <span className="time-badge">{formatNumber(timeLeft.seconds)}</span>
          </div>
        </div>
        
        <div 
          className={`countdown-block ${!isActive ? 'active' : ''}`}
          onClick={() => handleClick('soon')}
        >
          <span className="countdown-label">Sắp diễn ra</span>
          <span className="next-time">{getNextEventTime()}</span>
        </div>
      </div>
    </div>
  );
}

export default FlashsaleTimeline;