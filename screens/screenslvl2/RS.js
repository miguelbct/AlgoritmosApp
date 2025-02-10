import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  useColorScheme,
  StatusBar,
} from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Requires installing react-native-vector-icons

// Main component
export default function UMDA() {
  // Detect system color scheme (dark or light mode)
  const colorScheme = 'dark';

  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
      {/* Header Section */}
      <View style={styles.header(colorScheme)}>
        <Text style={styles.title(colorScheme)}>Random Search</Text>
        <Text style={styles.subtitle(colorScheme)}>
          A simple and effective stochastic optimization algorithm
        </Text>
      </View>

      {/* Video Section */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/hxq0HbGDniM?si=9FfHrPMCFLH7Ibf-' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          mediaPlaybackRequiresUserAction={false}
          allowsInlineMediaPlayback={true}
          style={styles.webView}
        />
      </View>

      {/* Description Section */}
      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.description(colorScheme)}>
          Random Search is a stochastic optimization algorithm designed to explore solutions randomly across a given search space. It operates without requiring derivatives or gradients, making it a straightforward and effective method for solving low-dimensional optimization problems.
        </Text>
      </View>

      {/* Key Features Section */}
      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Key Features</Text>
        {[
          'Stochastic and direct search method.',
          'Does not rely on gradients or derivatives.',
          'Independent sampling of solutions.',
        ].map((feature, index) => (
          <Text key={index} style={styles.listItem(colorScheme)}>
            <Icon
              name="check-circle-outline"
              size={16}
              color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'}
            />{' '}
            {feature}
          </Text>
        ))}
      </View>

      {/* Advantages Section */}
      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Advantages</Text>
        {[
          'Simple to implement.',
          'Effective for low-dimensional problems.',
        ].map((advantage, index) => (
          <Text key={index} style={styles.listItem(colorScheme)}>
            <Icon
              name="arrow-right-circle-outline"
              size={16}
              color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'}
            />{' '}
            {advantage}
          </Text>
        ))}
      </View>

      {/* Python Code Example Section */}
      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Python Code Example</Text>
        <View style={styles.codeBlockContainer(colorScheme)}>
          <Text style={styles.codeBlock(colorScheme)}>
            {`# Example: Minimize f(x) = x1^2 + x2^2 where -5.0 ≤ x ≤ 5.0
# Optimal solution: x1 = 0, x2 = 0

import random

# Objective function to minimize
def objective_function(vector):
    return sum(x**2 for x in vector)

# Generate a random vector within a defined range
def random_vector(minmax):
    return [random.uniform(min_val, max_val) for min_val, max_val in minmax]

# Random Search Algorithm
def random_search(search_space, max_iter):
    best = None
    for _ in range(max_iter):
        candidate = random_vector(search_space)
        cost = objective_function(candidate)
        if best is None or cost < best['cost']:
            best = {'vector': candidate, 'cost': cost}
    return best

# Configuration
search_space = [[-5, 5], [-5, 5]]  # Define the search space
max_iter = 100  # Number of iterations

# Execute Random Search
best_solution = random_search(search_space, max_iter)
print(f"Best Solution: Cost = {best_solution['cost']}, Vector = {best_solution['vector']}")`}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  container: (colorScheme) => ({
    flexGrow: 1,
    backgroundColor: colorScheme === 'dark' ? '#0d1117' : '#f9f9f9',
    padding: 20,
  }),
  header: (colorScheme) => ({
    marginBottom: 30,
    alignItems: 'center',
  }),
  title: (colorScheme) => ({
    fontSize: 28,
    fontWeight: 'bold',
    color: colorScheme === 'dark' ? '#27cdfe' : '#0056b3',
  }),
  subtitle: (colorScheme) => ({
    fontSize: 16,
    color: colorScheme === 'dark' ? '#c9d1d9' : '#24292f',
    marginTop: 5,
  }),
  videoContainer: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  webView: {
    flex: 1,
  },
  sectionCard: (colorScheme) => ({
    backgroundColor: colorScheme === 'dark' ? '#161b22' : '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  }),
  sectionTitle: (colorScheme) => ({
    fontSize: 20,
    fontWeight: 'bold',
    color: colorScheme === 'dark' ? '#27cdfe' : '#0056b3',
    marginBottom: 10,
  }),
  description: (colorScheme) => ({
    fontSize: 16,
    color: colorScheme === 'dark' ? '#c9d1d9' : '#24292f',
    textAlign: 'justify',
    marginBottom: 10,
  }),
  listItem: (colorScheme) => ({
    fontSize: 16,
    color: colorScheme === 'dark' ? '#c9d1d9' : '#24292f',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  }),
  codeBlockContainer: (colorScheme) => ({
    backgroundColor: colorScheme === 'dark' ? '#1e252e' : '#f5f5f5',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  }),
  codeBlock: (colorScheme) => ({
    fontSize: 14,
    color: colorScheme === 'dark' ? '#c9d1d9' : '#24292f',
    fontFamily: 'monospace',
  }),
});
