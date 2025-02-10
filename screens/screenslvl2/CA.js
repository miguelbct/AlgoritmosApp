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


export default function CA() {
  const colorScheme = 'dark'; // Detecta el esquema de color dinámicamente
  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
      {/* Header */}
      <View style={styles.header(colorScheme)}>
        <Text style={styles.title(colorScheme)}>Cultural Algorithm</Text>
        <Text style={styles.subtitle(colorScheme)}>
        A population-based optimization inspired by cultural evolution
        </Text>
      </View>

      {/* Video Section */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/0uWK93iNMRI?si=G9NPDtsJqBdB1T40' }}
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
        Cultural Algorithm (CA) is an optimization algorithm inspired by the cultural evolution of societies, focusing on the exchange of knowledge between individuals within a population. It combines individual search with social learning mechanisms that allow information sharing between individuals. The goal is to improve the overall solution by leveraging both individual experiences and collective knowledge.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Key Features</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Inspired by cultural evolution: The algorithm mimics the process of cultural evolution, where knowledge is passed between individuals to improve the collective performance of the group.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Population-based: The algorithm maintains a population of individuals (solutions) that evolve over time through interaction and knowledge exchange.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Cultural knowledge: A key feature of CA is the use of a "belief space" that stores shared cultural knowledge, guiding the search process.


        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Individual and social learning: Individuals in the population are influenced by both their own experiences and the collective knowledge shared within the population.

        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Gradient-free optimization: CA is a gradient-free optimization technique, making it suitable for problems where gradients are unavailable or noisy.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Advantages</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Balanced exploration and exploitation: The algorithm can effectively balance exploration (searching for new solutions) and exploitation (refining existing solutions) through individual and social learning.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Adaptability: CA adapts over time, allowing for the evolution of better solutions through shared knowledge.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> No gradient information required: It does not require gradient information, which makes it suitable for optimization problems where derivatives are unavailable or difficult to compute.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Robust and versatile: Cultural Algorithms have been successfully applied to a wide range of optimization problems, including combinatorial optimization, continuous optimization, and multi-objective problems.

        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Python Code Example</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Here is a simple implementation of the Cultural Algorithm (CA) to minimize the function f(x) = x 2/1 + x 2/2 
        </Text>
        <View style={styles.codeBlockContainer(colorScheme)}>
          <Text style={styles.codeBlock(colorScheme)}>
            {`import numpy as np

# Objective function to minimize (simple quadratic function)
def objective_function(x):
    return np.sum(x**2)

# Cultural Algorithm (CA)
def cultural_algorithm(search_space, max_iter, population_size, belief_space_size, learning_rate):
    # Initialize population
    population = np.random.uniform(low=search_space[0][0], high=search_space[0][1], size=(population_size, len(search_space)))
    belief_space = np.random.uniform(low=search_space[0][0], high=search_space[0][1], size=(belief_space_size, len(search_space)))
    
    # Evaluate initial population and belief space
    population_costs = np.array([objective_function(ind) for ind in population])
    belief_space_costs = np.array([objective_function(ind) for ind in belief_space])
    
    best_solution = population[np.argmin(population_costs)]
    best_cost = np.min(population_costs)
    
    for iteration in range(max_iter):
        # Update belief space based on the best solutions from the population
        best_population_indices = np.argsort(population_costs)[:belief_space_size]
        belief_space = population[best_population_indices]
        
        # Influence the population by belief space (cultural exchange)
        for i in range(population_size):
            # Randomly select an individual from belief space
            selected_belief = belief_space[np.random.choice(belief_space_size)]
            
            # Perform cultural learning (move towards belief space)
            population[i] = population[i] + learning_rate * (selected_belief - population[i])
        
        # Evaluate updated population
        population_costs = np.array([objective_function(ind) for ind in population])
        
        # Update best solution
        current_best = population[np.argmin(population_costs)]
        current_best_cost = np.min(population_costs)
        
        if current_best_cost < best_cost:
            best_solution, best_cost = current_best, current_best_cost
    
    return {'vector': best_solution, 'cost': best_cost}

# Configuration
search_space = [[-5, 5], [-5, 5]]  # Define the search space
max_iter = 1000                     # Number of iterations
population_size = 50                 # Population size
belief_space_size = 10               # Size of the belief space
learning_rate = 0.1                  # Learning rate for the cultural exchange

# Execute Cultural Algorithm
best_solution = cultural_algorithm(search_space, max_iter, population_size, belief_space_size, learning_rate)
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
