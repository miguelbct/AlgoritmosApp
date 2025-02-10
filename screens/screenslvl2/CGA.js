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


export default function CGA() {
  const colorScheme = 'dark'; // Detecta el esquema de color dinámicamente
  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
      {/* Header */}
      <View style={styles.header(colorScheme)}>
        <Text style={styles.title(colorScheme)}>Compact Generic Algorithm (CGA)</Text>
        <Text style={styles.subtitle(colorScheme)}>
        A memory-efficient and compact evolutionary algorithm
        </Text>
      </View>

      {/* Video Section */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/fI8wE82WsB4?si=cRcCyaTI0bvUFPhg' }}
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
        Compact Generic Algorithm (CGA) is a variant of the genetic algorithm designed to handle optimization problems efficiently by maintaining a compact population representation. Unlike traditional genetic algorithms that maintain a population of full solutions, CGA works with a reduced, compact representation where each individual solution is encoded in a compact form, typically focusing on significant portions of the solution space.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Key Features</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Compact Population: CGA uses a compact population representation, reducing the storage and computational cost compared to traditional genetic algorithms.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Generational Evolution: It follows the generational model of genetic algorithms, evolving the population over successive iterations.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Simplified Representation: Instead of representing full solutions, CGA encodes solutions using a compact structure, focusing on the most relevant features.


        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> No need for crossover: CGA often replaces crossover operations with efficient recombination strategies tailored to compact representations.

        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Efficient Selection: Selection mechanisms in CGA are optimized for compact representations, ensuring high-quality solutions are chosen for reproduction.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Advantages</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Memory efficiency: Since the population is compact, the algorithm consumes less memory, making it suitable for large-scale optimization problems.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Faster execution: With a reduced representation, CGA can achieve faster computation and convergence compared to traditional genetic algorithms.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Simpler implementation: CGA’s simplified structure makes it easier to implement compared to more complex evolutionary algorithms.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Adaptable: It can be adapted to both continuous and combinatorial problems.


        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Python Code Example</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Here is an example implementation of Univariate Marginal Distribution Algorithm (UMDA) for a simple problem: minimizing the function f(x) = x 2/1 + x 2/2 
        </Text>
        <View style={styles.codeBlockContainer(colorScheme)}>
          <Text style={styles.codeBlock(colorScheme)}>
            {`import numpy as np

# Objective function to minimize (simple quadratic function)
def objective_function(x):
    return np.sum(x**2)

# Compact Generic Algorithm (CGA)
def cga(search_space, max_iter, population_size, num_variables, elite_fraction):
    # Initialize population with compact representation
    population = np.random.uniform(low=search_space[0][0], high=search_space[0][1], size=(population_size, num_variables))
    
    elite_size = int(population_size * elite_fraction)
    best_solution = population[0]
    best_cost = objective_function(best_solution)
    
    for iteration in range(max_iter):
        # Evaluate the population
        population_costs = np.array([objective_function(ind) for ind in population])
        
        # Select the elite individuals based on their fitness
        elite_indices = np.argsort(population_costs)[:elite_size]
        elite_population = population[elite_indices]
        
        # Recombine the elite individuals to create new population
        new_population = np.zeros_like(population)
        for i in range(population_size):
            # Recombination step (using random elite individuals)
            parent = elite_population[np.random.randint(elite_size)]
            new_population[i] = parent
        
        # Evaluate best solution
        current_best = elite_population[0]
        current_best_cost = objective_function(current_best)
        
        # Update best solution
        if current_best_cost < best_cost:
            best_solution, best_cost = current_best, current_best_cost
        
        # Update population for next iteration
        population = new_population
    
    return {'vector': best_solution, 'cost': best_cost}

# Configuration
search_space = [[-5, 5], [-5, 5]]  # Define the search space
max_iter = 1000                     # Number of iterations
population_size = 50                 # Population size
num_variables = 2                    # Number of variables in the solution
elite_fraction = 0.2                 # Fraction of elite individuals used for the compact population

# Execute Compact Generic Algorithm
best_solution = cga(search_space, max_iter, population_size, num_variables, elite_fraction)
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
