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


export default function ILS() {
  const colorScheme = 'dark'; // Detecta el esquema de color dinámicamente
  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
      {/* Header */}
      <View style={styles.header(colorScheme)}>
        <Text style={styles.title(colorScheme)}>Iterated Local Search</Text>
        <Text style={styles.subtitle(colorScheme)}>
        A robust and efficient optimization algorithm
        </Text>
      </View>

      {/* Video Section */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/Vye39FMb5vo?si=PHhLnuYZVmXB3Iip' }}
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
        Iterated Local Search (ILS) is an extension of local search algorithms designed to escape local optima by repeatedly applying local search to a modified version of the current solution. ILS is often used for combinatorial optimization problems and can improve the quality of the solution by iteratively perturbing the solution and then performing a local search.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Key Features</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Repeatedly applies local search on perturbed solutions.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Aims to escape local optima by diversifying the search.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Does not require gradient or derivative information.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Effective for combinatorial optimization problems.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Combines exploration and exploitation effectively.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Advantages</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Escapes local optima: By iterating with perturbed solutions, ILS avoids getting stuck in local optima.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Good for large problem spaces: ILS is scalable and can handle complex combinatorial problems that may be difficult for simple local search algorithms.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Flexibility: The perturbation function can be adapted to the problem at hand, making ILS versatile.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Improved solution quality: Repeated perturbation and local search often lead to better overall solutions.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Python Code Example</Text>
        <View style={styles.codeBlockContainer(colorScheme)}>
          <Text style={styles.codeBlock(colorScheme)}>
            {`# Example: Minimize f(x) = x1^2 + x2^2 where -5.0 ≤ x ≤ 5.0
# Optimal solution: x1 = 0, x2 = 0

import random

# Objective function to minimize
def objective_function(vector):
    return sum(x**2 for x in vector)

# Generate a random vector within a defined range
def random_vector(minmax):
    return [random.uniform(min_val, max_val) for min_val, max_val in minmax]

# Generate a random neighbor by perturbing the current solution
def random_neighbor(current, step_size, minmax):
    return [
        max(min_val, min(max_val, current[i] + random.uniform(-step_size, step_size)))
        for i, (min_val, max_val) in enumerate(minmax)
    ]

# Local Search Algorithm
def local_search(search_space, current, step_size):
    current_cost = objective_function(current)
    best = current
    best_cost = current_cost
    
    # Explore the neighborhood of the current solution
    for _ in range(100):  # Number of local search iterations
        candidate = random_neighbor(best, step_size, search_space)
        candidate_cost = objective_function(candidate)
        
        if candidate_cost < best_cost:
            best, best_cost = candidate, candidate_cost
    
    return best

# Iterated Local Search Algorithm
def iterated_local_search(search_space, max_iter, step_size):
    current = random_vector(search_space)  # Start with a random solution
    current = local_search(search_space, current, step_size)  # Perform local search

    best_solution = {'vector': current, 'cost': objective_function(current)}
    
    for _ in range(max_iter):
        # Perturb the current solution to escape local optima
        perturbed_solution = random_neighbor(current, step_size, search_space)
        
        # Perform local search on the perturbed solution
        candidate_solution = local_search(search_space, perturbed_solution, step_size)
        
        candidate_cost = objective_function(candidate_solution)
        if candidate_cost < best_solution['cost']:
            best_solution = {'vector': candidate_solution, 'cost': candidate_cost}
        
        # Update current solution for next iteration
        current = candidate_solution
    
    return best_solution

# Configuration
search_space = [[-5, 5], [-5, 5]]  # Define the search space
max_iter = 100                     # Number of iterations
step_size = 0.1                    # Step size for generating neighbors

# Execute Iterated Local Search
best_solution = iterated_local_search(search_space, max_iter, step_size)
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
