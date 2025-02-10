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


export default function UMDA() {
  const colorScheme = 'dark'; // Detecta el esquema de color dinámicamente
  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
      {/* Header */}
      <View style={styles.header(colorScheme)}>
        <Text style={styles.title(colorScheme)}>Univariate Marginal Distribution Algorithm (UMDA)</Text>
        <Text style={styles.subtitle(colorScheme)}>
        A probabilistic optimization algorithm using univariate marginal distributions
        </Text>
      </View>

      {/* Video Section */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/bddckR734aM?si=ornB47iscd8DZ7e9' }}
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
        Univariate Marginal Distribution Algorithm (UMDA) is a population-based optimization algorithm that models the problem's solution space using univariate probability distributions. It iteratively updates the marginal distributions of the population's components and uses them to generate new candidate solutions. UMDA is effective for both continuous and discrete optimization problems and is a class of estimation of distribution algorithms (EDAs).
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Key Features</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Univariate probability distribution: UMDA maintains and updates univariate marginal distributions for each decision variable.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Population-based: It works with a population of candidate solutions, where the population is updated based on the marginal distributions of the variables.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> No crossover or mutation: Unlike genetic algorithms, UMDA does not use crossover or mutation operators. Instead, it generates new solutions by sampling from the learned marginal distributions.


        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Estimation of distribution: The algorithm is a type of Estimation of Distribution Algorithm (EDA), where the focus is on learning and exploiting the distribution of high-quality solutions.

        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Gradient-free: UMDA is suitable for optimization problems where gradients are not available or are difficult to compute.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Advantages</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> No genetic operators: UMDA doesn't require crossover or mutation, simplifying the algorithm and making it computationally efficient.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Easy to implement: The algorithm is simple to implement due to its reliance on basic probabilistic models and univariate distributions.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Good for multimodal problems: UMDA can effectively handle multimodal optimization problems, where the solution space contains multiple local optima.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Robust: It is robust and has been successfully applied to many optimization problems, including combinatorial and continuous domains.

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

# Univariate Marginal Distribution Algorithm (UMDA)
def umda(search_space, max_iter, population_size, num_variables, elite_fraction):
    # Initialize population: random binary strings within the search space
    population = np.random.uniform(low=search_space[0][0], high=search_space[0][1], size=(population_size, num_variables))
    best_solution = population[0]
    best_cost = objective_function(best_solution)
    
    elite_size = int(population_size * elite_fraction)
    
    for iteration in range(max_iter):
        # Evaluate the population
        population_costs = np.array([objective_function(ind) for ind in population])
        
        # Select the elite individuals based on their fitness
        elite_indices = np.argsort(population_costs)[:elite_size]
        elite_population = population[elite_indices]
        
        # Calculate the univariate marginal distribution for each variable
        new_population = np.zeros_like(population)
        for i in range(num_variables):
            # For each variable, select the value from the elite population distribution
            new_population[:, i] = np.random.choice(elite_population[:, i], size=population_size)
        
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
elite_fraction = 0.2                 # Fraction of elite individuals used for the marginal distributions

# Execute Univariate Marginal Distribution Algorithm
best_solution = umda(search_space, max_iter, population_size, num_variables, elite_fraction)
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
