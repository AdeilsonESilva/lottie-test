import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <LottieView source={require('./animation.json')} autoPlay loop />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
