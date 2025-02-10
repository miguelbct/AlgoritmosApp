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


export default function AS() {
  const colorScheme = 'dark'; // Detecta el esquema de color dinámicamente
  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
      {/* Header */}
      <View style={styles.header(colorScheme)}>
        <Text style={styles.title(colorScheme)}>Ant System (AS)</Text>
        <Text style={styles.subtitle(colorScheme)}>
        An optimization algorithm inspired by the foraging behavior of ants
        </Text>
      </View>

      {/* Video Section */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/Ou9BlZUeQXM?si=ABBhy3jS0XBuMY6y' }}
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
        Ant System (AS) is an optimization algorithm based on the behavior of ants, particularly their ability to find the shortest path between their colony and a food source. The algorithm mimics this behavior by using a population of artificial ants that move through a search space and deposit a form of "pheromone" to guide other ants toward the best solutions. Over time, the pheromone trails evolve, helping the system converge toward the optimal solution.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Key Features</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Pheromone Update: Ants deposit pheromones on paths they take, and these pheromones influence other ants’ movements. Paths with higher pheromone concentrations are more likely to be chosen by subsequent ants.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Stochastic Search: Ants move randomly at first, but as they deposit pheromones, the search becomes biased toward areas with better solutions.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Exploration vs. Exploitation: The algorithm strikes a balance between exploring the solution space (via random moves) and exploiting known good solutions (via pheromone-based attraction).


        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Iterative Process: The algorithm runs for a number of iterations, gradually improving the solution by refining the pheromone trails.

        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Versatility: Can be applied to a wide variety of optimization problems, including combinatorial optimization, traveling salesman problems, and vehicle routing problems.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Advantages</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Robust to Changes in the Search Space: The pheromone-based approach adapts dynamically to changes in the problem, allowing the algorithm to react to different problem landscapes.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Global Optimization: Ant System effectively finds the global optimum by considering the entire search space and converging toward the best solutions over time.

        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Parallel Search: Multiple ants explore different paths simultaneously, allowing for efficient search of large and complex solution spaces.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Adaptive: The algorithm self-adjusts based on the quality of the solutions found during the search process, making it suitable for dynamic or uncertain environments.


        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Python Code Example</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Here’s a simple implementation of the Ant System (AS) to solve the Traveling Salesman Problem (TSP) using pheromone updating and path selection:
        </Text>
        <View style={styles.codeBlockContainer(colorScheme)}>
          <Text style={styles.codeBlock(colorScheme)}>
            {`import numpy as np
import random

# Objective function: Calculate the total distance of the path
def calculate_total_distance(path, distance_matrix):
    return sum(distance_matrix[path[i], path[i + 1]] for i in range(len(path) - 1)) + distance_matrix[path[-1], path[0]]

# Ant System algorithm to solve TSP
def ant_system(distance_matrix, num_ants, num_iterations, alpha, beta, rho, Q):
    num_cities = len(distance_matrix)
    pheromone_matrix = np.ones((num_cities, num_cities))  # Initial pheromone values

    best_path = None
    best_distance = float('inf')

    # Main loop
    for iteration in range(num_iterations):
        all_paths = []
        all_distances = []

        # Each ant constructs a solution
        for ant in range(num_ants):
            path = [random.randint(0, num_cities - 1)]  # Start from a random city
            visited = set(path)

            # Construct the path
            for _ in range(num_cities - 1):
                current_city = path[-1]
                probabilities = []

                # Calculate the transition probabilities based on pheromone and distance
                for next_city in range(num_cities):
                    if next_city not in visited:
                        pheromone = pheromone_matrix[current_city, next_city] ** alpha
                        distance = (1.0 / distance_matrix[current_city, next_city]) ** beta
                        probabilities.append(pheromone * distance)
                    else:
                        probabilities.append(0)

                # Normalize the probabilities and pick the next city
                total_prob = sum(probabilities)
                probabilities = [p / total_prob for p in probabilities]
                next_city = np.random.choice(range(num_cities), p=probabilities)
                path.append(next_city)
                visited.add(next_city)

            # Calculate the total distance of the path
            total_distance = calculate_total_distance(path, distance_matrix)
            all_paths.append(path)
            all_distances.append(total_distance)

            # Update the best solution
            if total_distance < best_distance:
                best_path = path
                best_distance = total_distance

        # Update pheromones based on the paths constructed by the ants
        pheromone_matrix *= (1 - rho)  # Evaporate pheromones
        for i, path in enumerate(all_paths):
            for j in range(num_cities - 1):
                pheromone_matrix[path[j], path[j + 1]] += Q / all_distances[i]
            pheromone_matrix[path[-1], path[0]] += Q / all_distances[i]

    return best_path, best_distance

# Configuration
num_cities = 5
distance_matrix = np.array([
    [0, 2, 2, 5, 7],
    [2, 0, 3, 4, 6],
    [2, 3, 0, 4, 6],
    [5, 4, 4, 0, 3],
    [7, 6, 6, 3, 0]
])

# Ant System parameters
num_ants = 10
num_iterations = 100
alpha = 1.0  # Influence of pheromone
beta = 2.0   # Influence of distance
rho = 0.1    # Pheromone evaporation rate
Q = 1.0      # Pheromone intensity

# Run the Ant System algorithm
best_path, best_distance = ant_system(distance_matrix, num_ants, num_iterations, alpha, beta, rho, Q)

# Print the result
print(f"Best Path: {best_path}")
print(f"Best Distance: {best_distance}")

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
