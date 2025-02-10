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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Requiere instalar react-native-vector-icons


export default function NSA() {
  const colorScheme = 'dark'; // Detecta el esquema de color dinámicamente
  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
      {/* Header */}
      <View style={styles.header(colorScheme)}>
        <Text style={styles.title(colorScheme)}>Negative Selection Algorithm</Text>
        <Text style={styles.subtitle(colorScheme)}>
        An immune-inspired algorithm for anomaly detection and optimization
        </Text>
      </View>

      {/* Video Section */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/h3qLg4nhPDg?si=IK6v6hqr0--33MSB' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          mediaPlaybackRequiresUserAction={false}
          allowsInlineMediaPlayback={true}
          style={styles.webView}
        />
      </View>

      {/* Sections */}
      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.description(colorScheme)}>
        The Negative Selection Algorithm (NSA) is based on the immune system's mechanism for distinguishing between self and non-self cells. It generates detectors to identify anomalies or optimize specific objectives by evaluating solutions against a predefined criterion.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Key Features</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Anomaly Detection: Ideal for distinguishing between normal and abnormal patterns.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Diversity: Generates a variety of detectors for comprehensive search coverage.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Adaptable: Effective in both optimization and anomaly detection contexts.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Immune Inspiration: Mimics biological immune system processes.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Advantages</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Efficient for Anomaly Detection: NSA is widely used for detecting intrusions or irregularities in systems.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Comprehensive Search: Generates detectors that explore the search space thoroughly.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Flexible Applications: Can be applied to optimization, classification, or pattern recognition.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Robustness: Handles noise and uncertainty effectively in complex datasets
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Python Code Example</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Below is an example of the Negative Selection Algorithm used for optimization:
        </Text>
        <View style={styles.codeBlockContainer(colorScheme)}>
          <Text style={styles.codeBlock(colorScheme)}>
            {`import random
import math

# Objective function: Minimize f(x) = x1^2 + x2^2
def objective_function(vector):
    return sum(x**2 for x in vector)

# Generate a random candidate within the search space
def generate_candidate(bounds):
    return [random.uniform(min_val, max_val) for min_val, max_val in bounds]

# Check if a candidate is a valid "detector"
def is_detector(candidate, population, threshold):
    for individual in population:
        distance = math.sqrt(sum((x1 - x2)**2 for x1, x2 in zip(candidate, individual)))
        if distance < threshold:
            return False
    return True

# Generate a population of detectors
def generate_detectors(bounds, num_detectors, threshold):
    detectors = []
    while len(detectors) < num_detectors:
        candidate = generate_candidate(bounds)
        if is_detector(candidate, detectors, threshold):
            detectors.append(candidate)
    return detectors

# Negative Selection Algorithm
def negative_selection(bounds, num_detectors, threshold, max_iter):
    # Generate detectors
    detectors = generate_detectors(bounds, num_detectors, threshold)
    best_solution = None
    best_cost = float('inf')

    for iteration in range(max_iter):
        # Randomly sample the search space
        candidate = generate_candidate(bounds)
        if is_detector(candidate, detectors, threshold):
            # Evaluate candidate's cost
            cost = objective_function(candidate)
            if cost < best_cost:
                best_solution = candidate
                best_cost = cost

    return best_solution, best_cost

# Configuration
bounds = [[-5, 5], [-5, 5]]  # Search space
num_detectors = 50           # Number of detectors
threshold = 1.0              # Distance threshold for detectors
max_iter = 100               # Maximum number of iterations

# Execute the Negative Selection Algorithm
best_solution, best_cost = negative_selection(bounds, num_detectors, threshold, max_iter)

# Print the result
print(f"Best Solution: {best_solution}")
print(f"Best Cost: {best_cost}")
`}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

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
    textAlign:'center'
  }),
  subtitle: (colorScheme) => ({
    fontSize: 16,
    color: colorScheme === 'dark' ? '#c9d1d9' : '#24292f',
    marginTop: 5,
    textAlign: 'justify'
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
