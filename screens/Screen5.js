import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, useColorScheme } from 'react-native';
import { WebView } from 'react-native-webview';
export default function Screen1({ navigation }) {
  const colorScheme = 'dark';
  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
      <Text style={styles.title(colorScheme)}>Swarm Algorithms</Text>
                  <View style={styles.videoContainer}>
                         <WebView
                           source={{ uri: 'https://www.youtube.com/embed/jfoAYg-gk98?si=RJUZu0fL1gsmTRU9' }}
                           javaScriptEnabled={true}
                           domStorageEnabled={true}
                           mediaPlaybackRequiresUserAction={false}
                           allowsInlineMediaPlayback={true}
                           style={styles.webView}
                         />
                       </View>
                 <Text style={styles.description(colorScheme)}>
                 Swarm algorithms are optimization techniques inspired by the collective behavior of groups of animals or organisms, such as flocks of birds, schools of fish, or colonies of ants. These algorithms model the interactions between individual agents (representing possible solutions) that collaborate or follow simple rules to achieve a global objective. Examples include Particle Swarm Optimization (PSO), Ant Colony Optimization (ACO), and Artificial Bee Colony (ABC). Swarm algorithms are particularly effective for solving complex optimization problems in dynamic and multi-dimensional environments, as they naturally explore the solution space in a decentralized and parallel manner, often leading to high-quality solutions.
                 </Text>
      <View style={styles.buttonGrid}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Particle Swarm Optimization')}>
          <Text style={styles.buttonText}>Particle Swarm Optimization</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Ant System')}>
          <Text style={styles.buttonText}>Ant System</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Ant Colony System')}>
          <Text style={styles.buttonText}>Ant Colony System</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Bees Algorithm')}>
          <Text style={styles.buttonText}>Bees Algorithm</Text>
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
