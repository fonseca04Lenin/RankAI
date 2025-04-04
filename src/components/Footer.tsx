import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.tab} activeOpacity={0.7}>
        <Ionicons name="home" size={24} color={colors.text} />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: Platform.OS === 'ios' ? 83 : 60,
    paddingBottom: Platform.OS === 'ios' ? 23 : 0,
    backgroundColor: colors.theme,
    borderTopWidth: 0.5,
    borderTopColor: colors.border,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginTop: 3,
    fontSize: 10,
    color: colors.text,
  },
});

export default Footer; 