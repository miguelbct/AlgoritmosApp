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


export default function PBIL() {
  const colorScheme = 'dark'; // Detecta el esquema de color dinámicamente
  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
      {/* Header */}
      <View style={styles.header(colorScheme)}>
        <Text style={styles.title(colorScheme)}>Population-Based Incremental Learning</Text>
        <Text style={styles.subtitle(colorScheme)}>
        A probabilistic optimization algorithm based on population and incremental learning
        </Text>
      </View>

      {/* Video Section */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/pEANQ8uau88?si=18IpRRjVFB6le_1e' }}
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
        Population-Based Incremental Learning (PBIL) is an optimization technique that combines the ideas of genetic algorithms with probabilistic models to evolve solutions. PBIL works by maintaining a population of candidate solutions and updating a probabilistic model based on the success of individuals within the population. It iteratively improves the solution by focusing on regions of the search space where high-quality solutions have been found.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Key Features</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Probabilistic model: PBIL uses a probabilistic model to represent the distribution of good solutions, which guides the search process.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Population-based: The algorithm maintains a population of solutions, from which the probabilistic model is updated.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Incremental learning: The probabilistic model is updated incrementally based on the success of individuals, which refines the search distribution over time.


        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> No crossover or mutation: Unlike traditional genetic algorithms, PBIL does not rely on crossover or mutation operators but instead focuses on adjusting the probabilities of different solutions based on their performance.

        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Gradient-free optimization: PBIL does not require gradients, making it suitable for optimization problems where derivatives are unavailable.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Advantages</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Simple and efficient: PBIL is conceptually simple and computationally efficient, especially for problems where traditional evolutionary algorithms may be too slow.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Probabilistic learning: It focuses on learning the distribution of good solutions, which enables better exploration and exploitation of the search space.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> No crossover or mutation: By using a probabilistic model, PBIL eliminates the need for complex genetic operators like crossover or mutation.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Adaptive: PBIL adapts to the problem over time by updating the distribution of solutions based on performance.

        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Python Code Example</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Here is a simple implementation of Population-Based Incremental Learning (PBIL) to minimize the function f(x) = x 2/1 + x 2/2 
        </Text>
        <View style={styles.codeBlockContainer(colorScheme)}>
          <Text style={styles.codeBlock(colorScheme)}>
            {`import numpy as np

# Objective function to minimize (simple quadratic function)
def objective_function(x):
    return np.sum(x**2)

# Population-Based Incremental Learning (PBIL)
def pbil(search_space, max_iter, population_size, num_bits, learning_rate, p_initial):
    # Initialize population and probability vector
    population = np.random.rand(population_size, num_bits) < p_initial
    probability_vector = np.full(num_bits, p_initial)  # Initial probability for each bit
    
    best_solution = population[0]
    best_cost = objective_function(best_solution)
    
    for iteration in range(max_iter):
        # Evaluate population
        population_costs = np.array([objective_function(ind) for ind in population])
        
        # Select best individual from population
        best_index = np.argmin(population_costs)
        current_best = population[best_index]
        current_best_cost = population_costs[best_index]
        
        # Update best solution
        if current_best_cost < best_cost:
            best_solution, best_cost = current_best, current_best_cost
        
        # Update probability vector based on the best solutions
        for i in range(num_bits):
            p_bit = np.mean(population[:, i] == 1)  # Probability of 1 in the ith position
            probability_vector[i] = (1 - learning_rate) * probability_vector[i] + learning_rate * p_bit
        
        # Generate new population based on updated probability vector
        population = np.random.rand(population_size, num_bits) < probability_vector
        
    return {'vector': best_solution, 'cost': best_cost}

# Configuration
search_space = [[-5, 5], [-5, 5]]  # Define the search space
max_iter = 1000                     # Number of iterations
population_size = 50                 # Population size
num_bits = 20                        # Number of bits for each solution (encoding precision)
learning_rate = 0.1                  # Learning rate for probability update
p_initial = 0.5                      # Initial probability of each bit being 1

# Execute Population-Based Incremental Learning
best_solution = pbil(search_space, max_iter, population_size, num_bits, learning_rate, p_initial)
print(f"Best Solution: Cost = {best_solution['cost']}, Vector = {best_solution['vector']}")
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
