import React, {useEffect, useRef} from 'react';
import AnimatedLottieView from 'lottie-react-native';

export default function LoadingAnimation() {
  const animationRef = React.useRef(null);

  React.useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <AnimatedLottieView
      ref={animationRef}
      source={require('../loadingAnimation.json')}
    />
  );
}
