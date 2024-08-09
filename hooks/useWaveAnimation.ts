import { GestureResponderEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { randomColorGenerator } from '~/utils';

const SIZE = 1000;

export const useWaveAnimation = () => {
  const scale = useSharedValue(0);
  const currentBackgroundColor = useSharedValue(randomColorGenerator());
  const previousBackgroundColor = useSharedValue(randomColorGenerator());
  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);

  const startAnimation = (e: GestureResponderEvent) => {
    scale.value = 0;
    const { pageX, pageY } = e.nativeEvent;

    positionX.value = pageX;
    positionY.value = pageY;

    scale.value = withTiming(100, { duration: 2000, easing: Easing.ease });
    previousBackgroundColor.value = currentBackgroundColor.value;
    currentBackgroundColor.value = randomColorGenerator();
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: scale.value * SIZE,
      height: scale.value * SIZE,
      borderRadius: scale.value * SIZE,
      left: positionX.value - (scale.value * SIZE) / 2,
      top: positionY.value - (scale.value * SIZE) / 2,
      backgroundColor: currentBackgroundColor.value
    };
  });

  return {
    startAnimation,
    animatedStyle,
    previousBackgroundColor
  };
};
