import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, useColorScheme } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Screen1({ navigation }) {
  const colorScheme = 'dark';
  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
     <Text style={styles.title(colorScheme)}>Evolutionary Algorithms</Text>
       <View style={styles.videoContainer}>
              <WebView
                source={{ uri: 'https://www.youtube.com/embed/L--IxUH4fac?si=Sp7GQ0XC_1yYnW09' }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                mediaPlaybackRequiresUserAction={false}
                allowsInlineMediaPlayback={true}
                style={styles.webView}
              />
            </View>
      <Text style={styles.description(colorScheme)}>
      Evolutionary algorithms (EAs) are a class of optimization algorithms inspired by the process of natural selection. They use mechanisms such as mutation, crossover, and selection to evolve a population of candidate solutions towards better ones. These algorithms are commonly used for solving complex optimization problems where traditional methods may be less effective. EAs are versatile and can be applied to various fields, including machine learning, engineering, and artificial intelligence. Some well-known types of evolutionary algorithms include genetic algorithms (GAs), genetic programming (GP), and evolutionary strategies (ES).
      </Text>

      <View style={styles.buttonGrid}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Generic Algorithm')}>
          <Text style={styles.buttonText}>Generic Algorithm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Generic Programming')}>
          <Text style={styles.buttonText}>Generic Programming</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Evolution Strategies')}>
          <Text style={styles.buttonText}>Evolution Strategies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Diﬀerential Evolution')}>
          <Text style={styles.buttonText}>Diﬀerential Evolution</Text>
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
