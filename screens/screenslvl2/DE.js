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


export default function DE() {
  const colorScheme = 'dark'; // Detecta el esquema de color dinámicamente
  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
      {/* Header */}
      <View style={styles.header(colorScheme)}>
        <Text style={styles.title(colorScheme)}>Differential Evolution</Text>
        <Text style={styles.subtitle(colorScheme)}>
        A powerful optimization algorithm for continuous spaces
        </Text>
      </View>

      {/* Video Section */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/klmkHsHJLoM?si=GDNLz2AgUfRcFzYI' }}
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
        Differential Evolution (DE) is an evolutionary algorithm used to solve optimization problems, particularly in continuous domains. It is known for its simplicity, efficiency, and ability to perform well in a wide range of optimization problems. The algorithm uses differential vectors to drive the search for better solutions. DE works by iteratively evolving a population of candidate solutions using mutation, crossover, and selection.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Key Features</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Population-based approach: Like other evolutionary algorithms, DE works with a population of candidate solutions.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Mutation and Crossover: DE uses mutation (based on the differences between random population members) and crossover to generate new candidate solutions.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Selection: In each generation, the best solutions are selected based on their fitness, guiding the search towards optimal solutions.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Global optimization: DE has a strong ability to explore the search space and avoid getting trapped in local optima.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> No need for gradient information: DE does not require derivatives or gradients of the objective function, making it suitable for non-differentiable problems.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Advantages</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Global search ability: DE is a global optimizer, capable of avoiding local optima and finding the global minimum.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Simple and easy to implement: The algorithm is easy to understand and implement with minimal computational resources.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Versatility: DE can be applied to a wide variety of optimization problems, including those with complex, multimodal objective functions.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Robustness: DE can handle noisy functions and is effective even when the objective function is discontinuous or contains multiple local minima.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Python Code Example</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Here’s an example of Evolution Strategies in Python for a simple continuous optimization problem, where we aim to minimize 𝑓(x)=x 2/1 + x 3/2.
        </Text>
        <View style={styles.codeBlockContainer(colorScheme)}>
          <Text style={styles.codeBlock(colorScheme)}>
            {`import numpy as np

# Objective function to minimize (simple quadratic function)
def objective_function(x):
    return np.sum(x**2)

# Differential Evolution algorithm
def differential_evolution(search_space, pop_size, max_iter, mutation_factor=0.8, crossover_rate=0.7):
    # Initialize population randomly within the bounds of the search space
    population = np.random.uniform(low=search_space[0][0], high=search_space[0][1], size=(pop_size, len(search_space)))
    best_solution = None
    best_cost = float('inf')
    
    for generation in range(max_iter):
        # Evaluate the fitness (objective function value)
        fitness = np.apply_along_axis(objective_function, 1, population)
        
        # Track the best solution
        best_index = np.argmin(fitness)
        best_solution, best_cost = population[best_index], fitness[best_index]
        
        # Create new population through mutation and crossover
        new_population = np.copy(population)
        
        for i in range(pop_size):
            # Mutation: create a mutant vector by adding the weighted difference of two random vectors
            indices = list(range(pop_size))
            indices.remove(i)  # exclude the current individual
            a, b, c = population[np.random.choice(indices, size=3, replace=False)]
            mutant = a + mutation_factor * (b - c)
            
            # Crossover: combine the mutant vector with the current individual
            crossover_mask = np.random.rand(len(mutant)) < crossover_rate
            offspring = np.where(crossover_mask, mutant, population[i])
            
            # Selection: choose the better of the current individual or the offspring
            if objective_function(offspring) < fitness[i]:
                new_population[i] = offspring
        
        # Update population for the next generation
        population = new_population
    
    return {'vector': best_solution, 'cost': best_cost}

# Configuration
search_space = [[-5, 5], [-5, 5]]  # Define the search space
pop_size = 50                      # Population size
max_iter = 100                     # Number of generations
mutation_factor = 0.8              # Mutation factor (typically between 0.5 and 1)
crossover_rate = 0.7               # Crossover rate (typically between 0.5 and 1)

# Execute Differential Evolution
best_solution = differential_evolution(search_space, pop_size, max_iter, mutation_factor, crossover_rate)
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
