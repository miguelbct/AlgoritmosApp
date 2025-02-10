import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, useColorScheme } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Screen1({ navigation }) {
  const colorScheme = 'dark';
  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
      <Text style={styles.title(colorScheme)}>Physical Algorithms</Text>
       <View style={styles.videoContainer}>
              <WebView
                source={{ uri: 'https://www.youtube.com/embed/oK7OJv-XJpA?si=ttClJQczecd3aRsE' }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                mediaPlaybackRequiresUserAction={false}
                allowsInlineMediaPlayback={true}
                style={styles.webView}
              />
            </View>
      <Text style={styles.description(colorScheme)}>
      Physical algorithms are optimization techniques inspired by physical processes and phenomena in nature. These algorithms mimic real-world physical systems, such as the laws of thermodynamics, mechanics, or electrical circuits, to search for optimal solutions. Examples include simulated annealing, which is based on the cooling process of metals, and particle swarm optimization, inspired by the movement of groups of animals like birds or fish. Physical algorithms are particularly useful for solving complex problems where the solution space is large or poorly understood, and they are applied in fields like engineering, physics, and machine learning.
      </Text>
      <View style={styles.buttonGrid}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Simulated Annealing')}>
          <Text style={styles.buttonText}>Simulated Annealing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Extremal Optimization')}>
          <Text style={styles.buttonText}>Extremal Optimization</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Harmony Search')}>
          <Text style={styles.buttonText}>Harmony Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cultural Algorithm')}>
          <Text style={styles.buttonText}>Cultural Algorithm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: (colorScheme) => ({
    flexGrow: 1,
    backgroundColor: colorScheme === 'dark' ? '#0d1117' : '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  }),
  title: (colorScheme) => ({
    fontSize: 24,
    fontWeight: 'bold',
    color: colorScheme === 'dark' ? '#c9d1d9' : '#24292f',
    marginBottom: 20,
  }),
 videoContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#161b22',
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  webView: {
    flex: 1,
    borderRadius: 8,
  },
  description: (colorScheme) => ({
    fontSize: 16,
    textAlign: 'justify',
    color: colorScheme === 'dark' ? '#c9d1d9' : '#24292f',
    marginBottom: 20,
  }),
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor:'#21262d',
    padding: 15,
    margin: 10,
    width: '44%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#c9d1d9',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center'
  },
});
