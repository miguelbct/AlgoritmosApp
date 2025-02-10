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


export default function ES() {
  const colorScheme = 'dark'; // Detecta el esquema de color dinámicamente
  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
      {/* Header */}
      <View style={styles.header(colorScheme)}>
        <Text style={styles.title(colorScheme)}>Evolution Strategies</Text>
        <Text style={styles.subtitle(colorScheme)}>
        An optimization algorithm inspired by natural evolution
        </Text>
      </View>

      {/* Video Section */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/PGaXLNK0RRQ?si=Z_uPSP2qyEt30B9o' }}
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
        Evolution Strategies (ES) are a class of optimization algorithms that utilize mechanisms inspired by natural evolution to solve complex optimization problems. ES focuses on evolving a population of solutions through selection, mutation, and recombination processes. It is widely used for continuous optimization problems and is highly effective when dealing with noisy, high-dimensional, or multimodal objective functions.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Key Features</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Population-based approach: Uses a population of solutions and evolves them over multiple generations.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Self-adaptive: Can adapt parameters like mutation rates and search strategy through evolution.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Recombination and mutation: Relies on both recombination (crossover) and mutation to generate new solutions.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Effective for continuous optimization: Particularly useful in problems where the objective function is continuous and not easily solvable by traditional methods.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> No gradient information required: Does not rely on the gradient of the objective function, making it suitable for non-differentiable problems.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Advantages</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Global search capability: The population-based approach allows Evolution Strategies to explore the solution space more thoroughly and avoid local optima.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Self-adaptivity: The ability to adapt search strategies (like mutation rates) enables Evolution Strategies to fine-tune the exploration process as it evolves.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Works well for noisy functions: ES is resilient to noise and stochasticity in the objective function, making it a good choice for real-world applications.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Efficient in high-dimensional spaces: ES can handle optimization problems in high-dimensional spaces with greater efficiency compared to traditional methods.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Python Code Example</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Here’s an example of Evolution Strategies in Python for a simple continuous optimization problem, where we aim to minimize 
𝑓
(
𝑥
)
=
𝑥
1
2
+
𝑥
2
2
f(x)=x 
1
2
​
 +x 
2
2
​
  over the range of [-5, 5] for each dimension:
        </Text>
        <View style={styles.codeBlockContainer(colorScheme)}>
          <Text style={styles.codeBlock(colorScheme)}>
            {`import numpy as np

# Objective function to minimize (simple quadratic function)
def objective_function(x):
    return np.sum(x**2)

# Evolution Strategy algorithm
def evolution_strategy(search_space, pop_size, max_iter, mutation_rate=0.1, recombination_rate=0.5):
    # Initialize population
    population = np.random.uniform(low=search_space[0][0], high=search_space[0][1], size=(pop_size, len(search_space)))
    best_solution = None
    best_cost = float('inf')
    
    for generation in range(max_iter):
        # Evaluate the fitness (objective function value)
        fitness = np.apply_along_axis(objective_function, 1, population)
        
        # Track the best solution
        best_index = np.argmin(fitness)
        best_solution, best_cost = population[best_index], fitness[best_index]
        
        # Select individuals for recombination (elitism: select top half of the population)
        sorted_indices = np.argsort(fitness)
        parents = population[sorted_indices[:pop_size // 2]]
        
        # Generate the next generation using recombination and mutation
        next_generation = []
        while len(next_generation) < pop_size:
            # Recombination: blend two parents to generate offspring
            parent1, parent2 = parents[np.random.randint(len(parents))], parents[np.random.randint(len(parents))]
            offspring = recombination(parent1, parent2, recombination_rate)
            
            # Mutation: apply mutation to offspring
            offspring = mutation(offspring, search_space, mutation_rate)
            next_generation.append(offspring)
        
        # Update population for the next generation
        population = np.array(next_generation)
    
    return {'vector': best_solution, 'cost': best_cost}

# Recombination (Crossover)
def recombination(parent1, parent2, recombination_rate):
    # Uniform recombination
    offspring = np.where(np.random.rand(*parent1.shape) < recombination_rate, parent1, parent2)
    return offspring

# Mutation
def mutation(offspring, search_space, mutation_rate):
    # Gaussian mutation
    if np.random.rand() < mutation_rate:
        offspring += np.random.normal(0, 0.1, size=offspring.shape)
        offspring = np.clip(offspring, search_space[0][0], search_space[0][1])  # Ensure it stays within bounds
    return offspring

# Configuration
search_space = [[-5, 5], [-5, 5]]  # Define the search space
pop_size = 50                      # Population size
max_iter = 100                     # Number of generations
mutation_rate = 0.1                # Mutation rate

# Execute Evolution Strategy
best_solution = evolution_strategy(search_space, pop_size, max_iter, mutation_rate)
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
