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


export default function INA() {
  const colorScheme = 'dark'; // Detecta el esquema de color dinámicamente
  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
      {/* Header */}
      <View style={styles.header(colorScheme)}>
        <Text style={styles.title(colorScheme)}>Immune Network Algorithm</Text>
        <Text style={styles.subtitle(colorScheme)}>
        A dynamic and adaptive optimization algorithm inspired by the immune network theory
        </Text>
      </View>

      {/* Video Section */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/4zPGT8mn1Qw?si=Yerp0BG3iE9Kt7kF' }}
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
        The Immune Network Algorithm is a bio-inspired algorithm based on the immune network theory. It mimics the interactions among antibodies in the immune system to maintain diversity, explore the search space, and converge to optimal solutions.
        </Text>
      </View>
      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Key Features</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Antibody Interaction: Models the interactions between solutions to maintain diversity.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Clonal Expansion and Mutation: Explores promising regions of the search space.

        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Network Suppression: Removes redundant solutions to maintain efficiency.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Dynamic Learning: Adapts to changes and retains effective solutions.

        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Advantages</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Diversity Preservation: Prevents premature convergence by maintaining diverse solutions.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Robust Search: Handles complex, noisy, and multimodal optimization problems effectively.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Adaptive Behavior: Learns and evolves dynamically to adapt to changing environments.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Multi-modal Optimization: Capable of finding multiple optimal solutions.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Python Code Example</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Below is an example of the Immune Network Algorithm for optimization:
        </Text>
        <View style={styles.codeBlockContainer(colorScheme)}>
          <Text style={styles.codeBlock(colorScheme)}>
            {`import random
import math

# Objective function: Minimize f(x) = x1^2 + x2^2
def objective_function(vector):
    return sum(x**2 for x in vector)

# Generate a random solution within the bounds
def generate_solution(bounds):
    return [random.uniform(min_val, max_val) for min_val, max_val in bounds]

# Calculate affinity (inverse of distance to the global optimum)
def calculate_affinity(solution):
    return 1 / (1 + objective_function(solution))

# Clone and mutate a solution
def clone_and_mutate(solution, mutation_rate):
    return [x + random.uniform(-mutation_rate, mutation_rate) for x in solution]

# Suppress similar solutions based on a distance threshold
def suppress_network(network, suppression_threshold):
    filtered_network = []
    for candidate in network:
        if not any(math.sqrt(sum((x1 - x2)**2 for x1, x2 in zip(candidate, existing))) < suppression_threshold for existing in filtered_network):
            filtered_network.append(candidate)
    return filtered_network

# Immune Network Algorithm
def immune_network_algorithm(bounds, population_size, mutation_rate, suppression_threshold, max_iter):
    # Initialize population (antibodies)
    population = [generate_solution(bounds) for _ in range(population_size)]

    for iteration in range(max_iter):
        # Calculate affinities for each solution
        affinities = [calculate_affinity(solution) for solution in population]
        ranked_population = [solution for _, solution in sorted(zip(affinities, population), reverse=True)]

        # Select top candidates for cloning
        top_candidates = ranked_population[:population_size // 2]

        # Clone and mutate top candidates
        clones = []
        for candidate in top_candidates:
            clones += [clone_and_mutate(candidate, mutation_rate) for _ in range(3)]

        # Combine original population with clones
        population = ranked_population + clones

        # Suppress network to maintain diversity
        population = suppress_network(population, suppression_threshold)

        # Replenish population if it becomes too small
        while len(population) < population_size:
            population.append(generate_solution(bounds))

    # Return the best solution found
    best_solution = min(population, key=objective_function)
    best_cost = objective_function(best_solution)
    return best_solution, best_cost

# Configuration
bounds = [[-5, 5], [-5, 5]]  # Search space
population_size = 50         # Number of antibodies
mutation_rate = 0.1          # Mutation rate
suppression_threshold = 0.5  # Suppression distance threshold
max_iter = 100               # Maximum number of iterations

# Execute the Immune Network Algorithm
best_solution, best_cost = immune_network_algorithm(bounds, population_size, mutation_rate, suppression_threshold, max_iter)

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
