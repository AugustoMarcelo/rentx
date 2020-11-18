import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    shadowColor: '#E6E6EB',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 5,

    width: 32,
    height: 24,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bar: {
    width: 2,
    height: 8,
    backgroundColor: '#DEDEE3',
  },
});

export default function SliderThumb() {
  return (
    <View style={styles.container}>
      <View style={[styles.bar, { marginRight: 8 }]} />
      <View style={styles.bar} />
    </View>
  );
}
