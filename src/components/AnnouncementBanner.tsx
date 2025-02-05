import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const AnnouncementBanner = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  if (!isVisible) return null;

  return (
    <div className="bg-secondary px-4 py-3 text-center relative">
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1"
      >
        <X size={16} />
      </button>
      <p className="text-sm font-medium">
        Limited Time Offer! Ends in: {hours}h {minutes}m {seconds}s
      </p>
    </div>
  );
};

export default AnnouncementBanner;