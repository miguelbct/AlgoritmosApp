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


export default function GP() {
  const colorScheme = 'dark'; // Detecta el esquema de color dinámicamente
  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
      {/* Header */}
      <View style={styles.header(colorScheme)}>
        <Text style={styles.title(colorScheme)}>Genetic Programming</Text>
        <Text style={styles.subtitle(colorScheme)}>
        A flexible and reusable approach to algorithm and data structure design
        </Text>
      </View>

      {/* Video Section */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/K1iu1kXkVoA?si=6SrcJylnpU5SxogL' }}
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
        Genetic Programming (GP) is an extension of Genetic Algorithm, where the objective is to evolve computer programs rather than numerical solutions. GP represents solutions as tree structures, where nodes are operators (e.g., +, -, *, /) and leaves are operands (e.g., variables, constants). It optimizes by evolving these program trees through selection, crossover, and mutation.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Key Features</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Represents solutions as tree structures (programs).
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Optimizes symbolic expressions, functions, or algorithms.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Uses genetic operations like crossover and mutation on tree structures.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Can solve regression, classification, and symbolic optimization problems.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="check-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Does not require an explicit gradient.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Advantages</Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Flexible representation: Can evolve programs of any structure.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Automatic feature selection: Handles feature discovery during evolution.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Symbolic solution generation: Outputs interpretable models, not just numerical values.
        </Text>
        <Text style={styles.listItem(colorScheme)}>
          <Icon name="arrow-right-circle-outline" size={16} color={colorScheme === 'dark' ? '#27cdfe' : '#0056b3'} /> Broad applicability: Useful in symbolic regression, rule induction, and automated program synthesis.
        </Text>
      </View>

      <View style={styles.sectionCard(colorScheme)}>
        <Text style={styles.sectionTitle(colorScheme)}>Python Code Example</Text>
        <View style={styles.codeBlockContainer(colorScheme)}>
          <Text style={styles.codeBlock(colorScheme)}>
            {`import random
import operator
import math

# Define operators and terminals for the GP
operators = [operator.add, operator.sub, operator.mul, operator.truediv]
terminals = [random.uniform(-10, 10) for _ in range(10)]

# Create a random tree (program)
def create_random_tree(depth=3):
    if depth == 0 or (random.random() < 0.5):
        return random.choice(terminals)  # Terminal node
    else:
        op = random.choice(operators)
        return [op, create_random_tree(depth - 1), create_random_tree(depth - 1)]

# Evaluate a tree (program)
def evaluate_tree(tree, x=None):
    if not isinstance(tree, list):
        return tree
    op, left, right = tree
    try:
        return op(evaluate_tree(left, x), evaluate_tree(right, x))
    except ZeroDivisionError:
        return float('inf')

# Fitness function (Mean Squared Error)
def fitness_function(tree, data):
    return sum((evaluate_tree(tree, x) - y)**2 for x, y in data) / len(data)

# Mutation: Replace a subtree
def mutate_tree(tree, max_depth=3):
    if random.random() < 0.1:
        return create_random_tree(max_depth)
    if isinstance(tree, list):
        tree[1] = mutate_tree(tree[1], max_depth - 1)
        tree[2] = mutate_tree(tree[2], max_depth - 1)
    return tree

# Genetic Programming main loop
def genetic_programming(data, population_size=50, generations=10):
    population = [create_random_tree() for _ in range(population_size)]

    for _ in range(generations):
        population = sorted(population, key=lambda tree: fitness_function(tree, data))
        next_population = population[:population_size // 2]

        while len(next_population) < population_size:
            parent1, parent2 = random.sample(next_population[:population_size // 4], 2)
            crossover_point = random.randint(1, 2)
            child = parent1[:crossover_point] + parent2[crossover_point:]
            next_population.append(mutate_tree(child))

        population = next_population

    best_tree = min(population, key=lambda tree: fitness_function(tree, data))
    return best_tree

# Example Dataset (Symbolic Regression: y = x^2)
data = [(x, x**2) for x in range(-10, 10)]
best_program = genetic_programming(data)
print(f"Best Program: {best_program}")
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
