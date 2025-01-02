import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ThriveLandingPage = () => {
  return (
    <View style={styles.container}>
      {/* Icon and Branding Section */}
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>🌿</Text> {/* Placeholder for the tree/leaf icon */}
        </View>
        <Text style={styles.appName}>Thrive</Text>
      </View>

      {/* BMI Form Section */}
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#999" />
        <TextInput style={styles.input} placeholder="Age" keyboardType="numeric" placeholderTextColor="#999" />
        <TextInput style={styles.input} placeholder="Sex" placeholderTextColor="#999" />
        <TextInput style={styles.input} placeholder="Weight (kg)" keyboardType="numeric" placeholderTextColor="#999" />
        <TextInput style={styles.input} placeholder="Circumference" keyboardType="numeric" placeholderTextColor="#999" />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Calculate BMI</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Your path to better health starts here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(to bottom, #3a8dff, #39d39f)',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  icon: {
    fontSize: 50,
    color: '#39d39f',
  },
  appName: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 5,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#39d39f',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#fff',
  },
});

export default ThriveLandingPage;
