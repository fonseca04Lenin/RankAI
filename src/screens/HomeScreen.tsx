import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../constants/colors';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RankAI Homescreenn</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.theme,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
});

export default HomeScreen; 