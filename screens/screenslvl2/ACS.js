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


export default function ACS() {
  const colorScheme = 'dark'; // Detecta el esquema de color dinámicamente
  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
      {/* Header */}
      <View style={styles.header(colorScheme)}>
        <Text style={styles.title(colorScheme)}>Ant Colony System (ACS)</Text>
        <Text style={styles.subtitle(colorScheme)}>
        An advanced optimization algorithm inspired by ant foraging behavior
        </Text>
      </View>

      {/* Video Section */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/qfeymoF8pb4?si=WykhtaqH0jC3absT' }}
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
        Ant Colony System (ACS) is an enhanced version of the Ant System (AS) optimization algorithm. It builds upon the principles of artificial ant colonies but introduces improvements like local pheromone updating and selective exploitation of promising paths. ACS has been widely used for solving combinatorial optimization problems such as the Traveling Salesman Problem (TSP) and Vehicle Routing Problem (VRP).
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Key Features</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Local and Global Pheromone Update: Pheromones are updated locally during solution construction and globally based on the best solution found.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Exploitation vs. Exploration: ACS uses a pseudo-random proportional rule to balance exploration of new paths and exploitation of the best-known solutions.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Improved Convergence: The local pheromone update mechanism discourages ants from repeatedly taking the same path, helping avoid premature convergence.


        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Dynamic Control: The algorithm dynamically adjusts the pheromone trails, making it adaptable to the optimization problem's landscape.


        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Efficient Solution Refinement: By focusing on both local and global updates, ACS converges faster and provides more robust solutions than AS.

        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Advantages</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Faster Convergence: Due to the combined local and global pheromone updating mechanism, ACS achieves quicker convergence toward optimal or near-optimal solutions.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Balanced Exploration and Exploitation: The pseudo-random proportional rule ensures a trade-off between exploring new paths and intensifying the search around the best solutions.

        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Avoids Premature Convergence: Local pheromone updates reduce the risk of ants getting trapped in suboptimal solutions.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Versatile and Robust: ACS is highly adaptable to a wide range of combinatorial and dynamic optimization problems.


        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Python Code Example</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Here’s a Python implementation of Ant Colony System (ACS) for solving the Traveling Salesman Problem (TSP):
        </Text>
        <View style={styles.codeBlockContainer(colorScheme)}>
          <Text style={styles.codeBlock(colorScheme)}>
            {`import numpy as np
import random

# Objective function: Calculate the total distance of the path
def calculate_total_distance(path, distance_matrix):
    return sum(distance_matrix[path[i], path[i + 1]] for i in range(len(path) - 1)) + distance_matrix[path[-1], path[0]]

# Ant Colony System algorithm to solve TSP
def ant_colony_system(distance_matrix, num_ants, num_iterations, alpha, beta, rho, q0, tau0):
    num_cities = len(distance_matrix)
    pheromone_matrix = np.full((num_cities, num_cities), tau0)  # Initial pheromone values
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

                # Transition rule: Choose next city based on pheromone and distance
                for next_city in range(num_cities):
                    if next_city not in visited:
                        pheromone = pheromone_matrix[current_city, next_city] ** alpha
                        distance = (1.0 / distance_matrix[current_city, next_city]) ** beta
                        probabilities.append(pheromone * distance)
                    else:
                        probabilities.append(0)

                if random.random() < q0:  # Exploitation
                    next_city = np.argmax(probabilities)
                else:  # Exploration
                    total_prob = sum(probabilities)
                    probabilities = [p / total_prob for p in probabilities]
                    next_city = np.random.choice(range(num_cities), p=probabilities)

                path.append(next_city)
                visited.add(next_city)

                # Local pheromone update
                pheromone_matrix[current_city, next_city] = (1 - rho) * pheromone_matrix[current_city, next_city] + rho * tau0

            # Calculate the total distance of the path
            total_distance = calculate_total_distance(path, distance_matrix)
            all_paths.append(path)
            all_distances.append(total_distance)

            # Update the best solution
            if total_distance < best_distance:
                best_path = path
                best_distance = total_distance

        # Global pheromone update
        for i in range(len(best_path) - 1):
            pheromone_matrix[best_path[i], best_path[i + 1]] = (1 - rho) * pheromone_matrix[best_path[i], best_path[i + 1]] + rho / best_distance
        pheromone_matrix[best_path[-1], best_path[0]] = (1 - rho) * pheromone_matrix[best_path[-1], best_path[0]] + rho / best_distance

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

# ACS parameters
num_ants = 10
num_iterations = 100
alpha = 1.0  # Influence of pheromone
beta = 2.0   # Influence of distance
rho = 0.1    # Pheromone evaporation rate
q0 = 0.9     # Probability of exploitation
tau0 = 1.0   # Initial pheromone level

# Run the Ant Colony System algorithm
best_path, best_distance = ant_colony_system(distance_matrix, num_ants, num_iterations, alpha, beta, rho, q0, tau0)

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
