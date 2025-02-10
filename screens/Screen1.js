import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, useColorScheme } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Screen1({ navigation }) {
  const colorScheme = 'dark';
  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
      <Text style={styles.title(colorScheme)}>Stochastic Algorithms</Text>
       <View style={styles.videoContainer}>
              <WebView
                source={{ uri: 'https://www.youtube.com/embed/B24A14NR_8w?si=19xhuLcpcjztHW0b' }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                mediaPlaybackRequiresUserAction={false}
                allowsInlineMediaPlayback={true}
                style={styles.webView}
              />
            </View>
      <Text style={styles.description(colorScheme)}>
        These described algorithms are predominately global optimization algorithms and metaheuristics that manage the application of an embedded
        neighborhood exploring (local) search procedure. As such, with the exception of ‘Stochastic Hill Climbing’ and ‘Random Search’ the algorithms may
        be considered extensions of the multi-start search (also known as multi-restart search). This set of algorithms provide various different strategies
        by which ‘better’ and varied starting points can be generated and issued to a neighborhood searching technique for refinement, a process that is repeated
        with potentially improving or unexplored areas to search.
      </Text>

      <View style={styles.buttonGrid}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Random Search')}>
          <Text style={styles.buttonText}>Random Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Adaptative Random Search')}>
          <Text style={styles.buttonText}>Adaptative Random Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Hill Climbing')}>
          <Text style={styles.buttonText}>Hill Climbing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Iterated Local Search')}>
          <Text style={styles.buttonText}>Iterated Local Search</Text>
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
    backgroundColor: '#21262d',
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
