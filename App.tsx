import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import Animated from 'react-native-reanimated';

import { useWaveAnimation } from '~/hooks/useWaveAnimation';

export default function App() {
  const { animatedStyle, startAnimation, previousBackgroundColor } = useWaveAnimation();

  return (
    <TouchableOpacity onPress={startAnimation} style={styles.root} activeOpacity={1}>
      <Animated.View style={[styles.container, { backgroundColor: previousBackgroundColor }]}>
        <Animated.View style={[styles.wave, animatedStyle]} />
        <Text style={styles.text}>Hello there</Text>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  text: {
    fontSize: 57,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  wave: {
    position: 'absolute',
    borderRadius: 1000
  }
});
