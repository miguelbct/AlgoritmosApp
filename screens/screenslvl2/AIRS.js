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


export default function AIRS() {
  const colorScheme = 'dark'; // Detecta el esquema de color dinámicamente
  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
      {/* Header */}
      <View style={styles.header(colorScheme)}>
        <Text style={styles.title(colorScheme)}>Artificial Immune Recognition System</Text>
        <Text style={styles.subtitle(colorScheme)}>
        An immune-inspired classification and optimization algorithm
        </Text>
      </View>

      {/* Video Section */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/-OOwqlSgzz4?si=1yraO5XhGNBDVuuv' }}
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
        The Artificial Immune Recognition System (AIRS) is a machine learning algorithm inspired by the human immune system. It is used for classification and optimization tasks by creating a network of memory cells that represent patterns in the data.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Key Features</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Memory Cell Formation: Retains representative samples of patterns for classification.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Affinity Calculation: Measures similarity between patterns to guide learning.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Clonal Expansion: Enhances the diversity of solutions via mutation and replication.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Immune Inspiration: Mimics the immune system’s recognition and learning processes.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Advantages</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Effective Classification: Excels at pattern recognition and classification tasks.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Robustness: Handles noise and complex data effectively.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Adaptability: Can adapt to new data and retain learned knowledge.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Optimization: Suitable for solving optimization problems in multidimensional spaces.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Python Code Example</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Below is an example of the Artificial Immune Recognition System used for optimization:
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

# Calculate affinity (inverse of distance)
def calculate_affinity(candidate, population):
    return [1 / (1 + math.sqrt(sum((x1 - x2)**2 for x1, x2 in zip(candidate, individual)))) for individual in population]

# Clone and mutate candidates
def clone_and_mutate(candidate, mutation_rate):
    return [x + random.uniform(-mutation_rate, mutation_rate) for x in candidate]

# AIRS Algorithm
def airs(bounds, population_size, memory_cell_size, mutation_rate, max_iter):
    # Initialize population and memory cells
    population = [generate_candidate(bounds) for _ in range(population_size)]
    memory_cells = []

    for iteration in range(max_iter):
        for candidate in population:
            # Calculate affinities between candidate and memory cells
            if memory_cells:
                affinities = calculate_affinity(candidate, memory_cells)
                best_affinity = max(affinities)
            else:
                best_affinity = 0

            # Clone and mutate if affinity threshold is met
            if best_affinity < 1:  # Threshold for memory cell formation
                mutated_candidates = [clone_and_mutate(candidate, mutation_rate) for _ in range(3)]
                best_candidate = min(mutated_candidates, key=objective_function)

                # Add to memory cells if it improves the solution
                memory_cells.append(best_candidate)
                if len(memory_cells) > memory_cell_size:
                    memory_cells.pop(0)  # Keep memory cells within size limit

        # Replace population with new random candidates
        population = [generate_candidate(bounds) for _ in range(population_size)]

    # Find the best solution from memory cells
    best_solution = min(memory_cells, key=objective_function)
    best_cost = objective_function(best_solution)
    return best_solution, best_cost

# Configuration
bounds = [[-5, 5], [-5, 5]]  # Search space
population_size = 50          # Population size
memory_cell_size = 20         # Maximum number of memory cells
mutation_rate = 0.1           # Mutation rate
max_iter = 100                # Maximum number of iterations

# Execute the AIRS Algorithm
best_solution, best_cost = airs(bounds, population_size, memory_cell_size, mutation_rate, max_iter)

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
