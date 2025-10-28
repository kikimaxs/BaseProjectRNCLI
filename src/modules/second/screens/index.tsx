import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackNavigationTypes } from '@/src/routes';

export default function SecondScreens() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigationTypes>>();

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.title}>Second Screen</Text>
        <Text style={styles.subtitle}>
          Tampilan berbeda dari Home untuk menegaskan konteks layar.
        </Text>

        <TouchableHighlight
          accessibilityRole="button"
          accessibilityLabel="Kembali ke Home Screen"
          underlayColor={'#1E40AF'}
          style={styles.secondaryButton}
          onPress={onBack}
        >
          <Text style={styles.secondaryButtonText}>Kembali ke Home</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#C7D2FE',
    textAlign: 'center',
    marginBottom: 24,
  },
  secondaryButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 10,
    minWidth: 220,
  },
  secondaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});