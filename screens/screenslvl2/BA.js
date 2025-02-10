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


export default function BA() {
  const colorScheme = 'dark'; // Detecta el esquema de color dinámicamente
  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
      {/* Header */}
      <View style={styles.header(colorScheme)}>
        <Text style={styles.title(colorScheme)}>Bees Algorithm</Text>
        <Text style={styles.subtitle(colorScheme)}>
        A nature-inspired optimization algorithm for complex problems
        </Text>
      </View>

      {/* Video Section */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/DgIdz6bZtTs?si=sMdPCAXdgbQs-DrR' }}
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
        The Bees Algorithm mimics the natural foraging behavior of honeybee colonies to find the optimal solution to optimization problems. It divides the search process into two phases: exploration of new areas and exploitation of the best regions. This balance allows the algorithm to efficiently search both globally and locally.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Key Features</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Exploration and Exploitation: Scouts explore new areas of the solution space, while bees intensify the search in the most promising regions.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Adaptive Neighborhood Search: The algorithm focuses the search on smaller regions as solutions improve.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Dynamic Colony Behavior: The number of bees allocated to regions depends on their quality, encouraging resource concentration on the most fruitful areas.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Versatile Application: Suitable for continuous and combinatorial optimization problems.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Advantages</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Efficient Balance of Exploration and Exploitation: The division between scouts and neighborhood search ensures global and local search efficiency.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Scalability: Can be easily scaled for high-dimensional or complex problems.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Adaptable to Different Problems: The algorithm parameters can be tuned to suit various optimization challenges.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Natural Parallelism: The algorithm's structure naturally allows for parallel implementation.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Python Code Example</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Here’s a Python implementation of the Bees Algorithm for optimizing a mathematical function:
        </Text>
        <View style={styles.codeBlockContainer(colorScheme)}>
          <Text style={styles.codeBlock(colorScheme)}>
            {`import random

# Objective function: Minimize f(x) = x1^2 + x2^2
def objective_function(vector):
    return sum(x**2 for x in vector)

# Generate a random solution within the given bounds
def generate_solution(bounds):
    return [random.uniform(min_val, max_val) for min_val, max_val in bounds]

# Perform a neighborhood search around the given solution
def neighborhood_search(solution, bounds, neighborhood_size):
    return [
        max(min(solution[i] + random.uniform(-neighborhood_size, neighborhood_size), bounds[i][1]), bounds[i][0])
        for i in range(len(bounds))
    ]

# Bees Algorithm
def bees_algorithm(bounds, n_scouts, n_best, n_elite, neighborhood_size, max_iter):
    # Initialize the scout solutions
    scouts = [generate_solution(bounds) for _ in range(n_scouts)]
    best_solution = None
    best_cost = float('inf')

    for iteration in range(max_iter):
        # Evaluate the cost of each scout
        costs = [objective_function(scout) for scout in scouts]
        sorted_indices = sorted(range(len(costs)), key=lambda i: costs[i])
        sorted_scouts = [scouts[i] for i in sorted_indices]
        sorted_costs = [costs[i] for i in sorted_indices]

        # Update the best solution
        if sorted_costs[0] < best_cost:
            best_solution = sorted_scouts[0]
            best_cost = sorted_costs[0]

        # Perform neighborhood search for the best and elite solutions
        new_scouts = []
        for i in range(n_best):
            num_bees = n_elite if i == 0 else n_best
            for _ in range(num_bees):
                new_solution = neighborhood_search(sorted_scouts[i], bounds, neighborhood_size)
                new_scouts.append(new_solution)

        # Add remaining scouts as random solutions
        new_scouts += [generate_solution(bounds) for _ in range(n_scouts - len(new_scouts))]
        scouts = new_scouts

    return best_solution, best_cost

# Configuration
bounds = [[-5, 5], [-5, 5]]  # Search space
n_scouts = 20  # Total number of scout bees
n_best = 5     # Number of best sites to explore
n_elite = 3    # Number of bees in the elite site
neighborhood_size = 0.1  # Size of the neighborhood search
max_iter = 100  # Maximum number of iterations

# Execute the Bees Algorithm
best_solution, best_cost = bees_algorithm(bounds, n_scouts, n_best, n_elite, neighborhood_size, max_iter)

# Print the result
print(f"Best Solution: {best_solution}")
print(f"Best Cost: {best_cost}")
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
