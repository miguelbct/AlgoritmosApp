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


export default function HS() {
  const colorScheme = 'dark'; // Detecta el esquema de color dinámicamente
  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
      {/* Header */}
      <View style={styles.header(colorScheme)}>
        <Text style={styles.title(colorScheme)}>Harmony Search</Text>
        <Text style={styles.subtitle(colorScheme)}>
        A metaheuristic optimization algorithm inspired by music composition
        </Text>
      </View>

      {/* Video Section */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/icYRI5X2M_Q?si=9L6jJpt7PywCU7Tf' }}
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
        Harmony Search (HS) is a metaheuristic optimization algorithm based on the process of searching for a "perfect harmony" in music. The algorithm is inspired by the way musicians improvise by considering the harmony of different musical notes. It uses a population of solutions (called a harmony memory) and iteratively improves them to find an optimal solution.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Key Features</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Inspired by music: The algorithm is inspired by the process of musicians improvising to find harmony in music, and it applies this concept to optimization.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Harmony memory: The algorithm maintains a "memory" of solutions, called harmony memory (HM), and searches for better solutions by updating the harmony of the population.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> No gradient information required: HS is a derivative-free method and works well with non-differentiable, discontinuous, or noisy objective functions.

        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Easy to implement: Harmony Search is relatively simple to implement and can be applied to a wide variety of optimization problems.

        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Global optimization: The algorithm tends to explore the solution space efficiently, helping to find global optima.

        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Advantages</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Effective for continuous and discrete optimization: HS can be applied to both continuous and discrete optimization problems.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> No gradient required: Since it does not require gradient information, it is suitable for non-differentiable or noisy objective functions.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Global search capability: The algorithm is capable of performing both global exploration and local exploitation, helping it avoid local minima.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Simple to implement: HS is easy to implement, making it accessible to practitioners and researchers alike.

        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Python Code Example</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Here is a simple implementation of Harmony Search (HS) in Python to minimize the function f(x) = x 2/1 + x 2/2 
        </Text>
        <View style={styles.codeBlockContainer(colorScheme)}>
          <Text style={styles.codeBlock(colorScheme)}>
            {`import numpy as np

# Objective function to minimize (simple quadratic function)
def objective_function(x):
    return np.sum(x**2)

# Harmony Search algorithm
def harmony_search(search_space, max_iter, harmony_size, hmcr, par, bandwidth):
    # Initialize Harmony Memory (HM)
    harmony_memory = np.random.uniform(low=search_space[0][0], high=search_space[0][1], size=(harmony_size, len(search_space)))
    costs = np.array([objective_function(ind) for ind in harmony_memory])
    
    best_solution = harmony_memory[np.argmin(costs)]
    best_cost = np.min(costs)
    
    for iteration in range(max_iter):
        # Generate a new harmony
        new_harmony = []
        
        for i in range(len(search_space)):
            if np.random.rand() < hmcr:  # Select from harmony memory (improvise)
                index = np.random.choice(harmony_size)
                new_harmony.append(harmony_memory[index, i] + np.random.uniform(-bandwidth, bandwidth))
            else:  # Select randomly (exploration)
                new_harmony.append(np.random.uniform(search_space[i][0], search_space[i][1]))
        
        # Calculate the cost for the new harmony
        new_cost = objective_function(new_harmony)
        
        # If the new harmony is better, replace the worst solution in harmony memory
        if new_cost < np.max(costs):
            worst_index = np.argmax(costs)
            harmony_memory[worst_index] = new_harmony
            costs[worst_index] = new_cost
        
        # Update the best solution found so far
        current_best = harmony_memory[np.argmin(costs)]
        current_best_cost = np.min(costs)
        
        if current_best_cost < best_cost:
            best_solution, best_cost = current_best, current_best_cost
    
    return {'vector': best_solution, 'cost': best_cost}

# Configuration
search_space = [[-5, 5], [-5, 5]]  # Define the search space
max_iter = 1000                     # Number of iterations
harmony_size = 50                   # Size of the harmony memory
hmcr = 0.9                          # Harmony Memory Considering Rate (HMCR)
par = 0.3                           # Pitch Adjusting Rate (PAR)
bandwidth = 0.1                     # Bandwidth for pitch adjustment

# Execute Harmony Search
best_solution = harmony_search(search_space, max_iter, harmony_size, hmcr, par, bandwidth)
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
