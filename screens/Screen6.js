import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, useColorScheme } from 'react-native';
import { WebView } from 'react-native-webview';
export default function Screen1({ navigation }) {
  const colorScheme = 'dark';
  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
     <Text style={styles.title(colorScheme)}>Immune Algorithms</Text>
                       <View style={styles.videoContainer}>
                              <WebView
                                source={{ uri: 'https://www.youtube.com/embed/D-Zk27FWmVg?si=RH1ccvUn9pu8Cu1t' }}
                                javaScriptEnabled={true}
                                domStorageEnabled={true}
                                mediaPlaybackRequiresUserAction={false}
                                allowsInlineMediaPlayback={true}
                                style={styles.webView}
                              />
                            </View>
                      <Text style={styles.description(colorScheme)}>
                      Immune algorithms are optimization techniques inspired by the functioning of the human immune system. These algorithms mimic processes such as immune recognition, antibody generation, and selection to solve optimization problems. The key idea is to use a population of candidate solutions (analogous to antibodies) that are evaluated based on their fitness (similar to the immune response to pathogens). Through mechanisms like clonal selection and immune memory, the algorithm evolves towards better solutions over time. Immune algorithms, such as Artificial Immune Systems (AIS), are particularly useful in fields like pattern recognition, machine learning, and adaptive control, especially for complex or dynamic optimization problems.
                      </Text>
      <View style={styles.buttonGrid}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Clonal Selection Algorithm')}>
          <Text style={styles.buttonText}>Clonal Selection Algorithm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Negative Selection Algorithm')}>
          <Text style={styles.buttonText}>Negative Selection Algorithm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Artificial Immune Recognition System')}>
          <Text style={styles.buttonText}>Artificial Immune Recognition System</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Immune Network Algorithm')}>
          <Text style={styles.buttonText}>Immune Network Algorithm</Text>
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
