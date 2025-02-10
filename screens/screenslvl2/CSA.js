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


export default function CSA() {
  const colorScheme = 'dark'; // Detecta el esquema de color dinámicamente
  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
      {/* Header */}
      <View style={styles.header(colorScheme)}>
        <Text style={styles.title(colorScheme)}>Clonal Selection Algorithm</Text>
        <Text style={styles.subtitle(colorScheme)}>
        An immune-inspired optimization algorithm for solving complex problems
        </Text>
      </View>

      {/* Video Section */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/rH-2b8NS2eU?si=mN94HV2mJ14FsuEO' }}
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
        The Clonal Selection Algorithm (CSA) is inspired by the natural immune system's process of recognizing and improving antibodies to counter antigens. It operates by selecting the most promising solutions (antibodies), cloning them, and introducing variations to create improved candidates. The algorithm is particularly effective for solving optimization problems in various domains.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Key Features</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Cloning and Mutation: Promising solutions are cloned and diversified to explore the search space.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Affinity-Based Selection: Higher-quality solutions are prioritized for cloning and mutation.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Immune Memory: The algorithm maintains a population of the best solutions over iterations.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Versatility: Applicable to continuous and combinatorial optimization problems.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Advantages</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Focused Exploration: By mutating clones of high-quality solutions, the algorithm emphasizes promising regions of the search space.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Diversity Preservation: Mutation introduces variation, avoiding premature convergence.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Adaptable: CSA parameters can be adjusted for different problem types
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Efficient for Multi-Modal Problems: Capable of finding multiple good solutions in complex landscapes.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Python Code Example</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Here’s a Python implementation of the Clonal Selection Algorithm for optimizing a mathematical function:
        </Text>
        <View style={styles.codeBlockContainer(colorScheme)}>
          <Text style={styles.codeBlock(colorScheme)}>
            {`import random

# Objective function: Minimize f(x) = x1^2 + x2^2
def objective_function(vector):
    return sum(x**2 for x in vector)

# Generate a random solution within the given bounds
def generate_solution(bounds):
    return [random.uniform(min_val, max_val) for min_val, max_val in bounds]

# Mutate a solution by adding random noise
def mutate_solution(solution, bounds, mutation_rate):
    return [
        max(min(x + random.uniform(-mutation_rate, mutation_rate), bounds[i][1]), bounds[i][0])
        for i, x in enumerate(solution)
    ]

# Clone a solution multiple times
def clone_solution(solution, num_clones):
    return [solution[:] for _ in range(num_clones)]

# Clonal Selection Algorithm
def clonal_selection(bounds, population_size, num_clones, mutation_rate, max_iter):
    # Initialize the population with random solutions
    population = [generate_solution(bounds) for _ in range(population_size)]
    best_solution = None
    best_cost = float('inf')

    for iteration in range(max_iter):
        # Evaluate the cost of each solution
        costs = [objective_function(candidate) for candidate in population]
        sorted_indices = sorted(range(len(costs)), key=lambda i: costs[i])
        sorted_population = [population[i] for i in sorted_indices]
        sorted_costs = [costs[i] for i in sorted_indices]

        # Update the best solution
        if sorted_costs[0] < best_cost:
            best_solution = sorted_population[0]
            best_cost = sorted_costs[0]

        # Clone and mutate the top solutions
        new_population = []
        for i in range(population_size // 2):
            clones = clone_solution(sorted_population[i], num_clones)
            mutated_clones = [mutate_solution(clone, bounds, mutation_rate) for clone in clones]
            new_population.extend(mutated_clones)

        # Fill the rest of the population with random solutions
        new_population += [generate_solution(bounds) for _ in range(population_size - len(new_population))]
        population = new_population

    return best_solution, best_cost

# Configuration
bounds = [[-5, 5], [-5, 5]]  # Search space
population_size = 20  # Number of antibodies (solutions)
num_clones = 5        # Number of clones per antibody
mutation_rate = 0.1   # Mutation rate
max_iter = 100        # Maximum number of iterations

# Execute the Clonal Selection Algorithm
best_solution, best_cost = clonal_selection(bounds, population_size, num_clones, mutation_rate, max_iter)

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
