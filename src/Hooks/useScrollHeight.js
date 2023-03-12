import { useEffect, useState } from 'react';

const useScrollHeight = () => {
  const [scrollHeight, setScrollHeight] = useState(null);

  const handleScrollHeight = () => {
    const height = window.pageYOffset;
    setScrollHeight(height);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollHeight);
    return () => {
      window.removeEventListener('scroll', handleScrollHeight);
    };
  }, []);
  return { scrollHeight };
};

export default useScrollHeight;
