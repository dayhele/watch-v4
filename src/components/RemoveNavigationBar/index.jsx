import React, { useEffect } from 'react';

const RemoveNavigationBar = () => {
  useEffect(() => {
    if (document.fullscreenEnabled) {
      document.documentElement.requestFullscreen();
    }
  }, []);

  return (
    <></>
    
  );
};

export default RemoveNavigationBar;