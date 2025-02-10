import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, useColorScheme } from 'react-native';
import { WebView } from 'react-native-webview';
export default function Screen1({ navigation }) {
  const colorScheme = 'dark';
  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
      <Text style={styles.title(colorScheme)}>Probabilistic Algorithms</Text>
             <View style={styles.videoContainer}>
                    <WebView
                      source={{ uri: 'https://www.youtube.com/embed/vXzWXl4aePA?si=AErVBYigXNnjZi4a' }}
                      javaScriptEnabled={true}
                      domStorageEnabled={true}
                      mediaPlaybackRequiresUserAction={false}
                      allowsInlineMediaPlayback={true}
                      style={styles.webView}
                    />
                  </View>
            <Text style={styles.description(colorScheme)}>
            Probabilistic algorithms are optimization techniques that incorporate randomness or probability in their decision-making process to explore and exploit solution spaces. These algorithms use probabilistic methods, such as random sampling, to guide the search for optimal solutions. Examples include Monte Carlo methods, genetic algorithms, and simulated annealing. Probabilistic algorithms are effective in dealing with uncertainty, complex or poorly defined problems, and large search spaces, making them useful in areas like machine learning, statistical modeling, and artificial intelligence. They balance exploration and exploitation, often providing good solutions even in cases where exact methods are impractical.
            </Text>
      <View style={styles.buttonGrid}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Population-Based Incremental Learning')}>
          <Text style={styles.buttonText}>Population-Based Incremental Learning</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Univariate Marginal Distribution Algorithm')}>
          <Text style={styles.buttonText}>Univariate Marginal Distribution Algorithm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Compact Genetic Algorithm')}>
          <Text style={styles.buttonText}>Compact Genetic Algorithm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Bayesian Optimization Algorithm')}>
          <Text style={styles.buttonText}>Bayesian Optimization Algorithm</Text>
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
