import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, FlatList, Alert } from 'react-native';

const questions = [
  {
    question: "What does the Particle Swarm Optimization algorithm simulate?",
    options: ["Genetic crossover", "Natural immune response", "Social behavior of birds and fish", "Ant colony foraging"],
    answer: "Social behavior of birds and fish",
    hint: "It mimics how groups like flocks or schools move and search for optimal solutions.",
  },
  {
    question: "Which algorithm uses the concept of 'temperature' to escape local optima?",
    options: ["Simulated Annealing", "Differential Evolution", "Harmony Search", "Clonal Selection"],
    answer: "Simulated Annealing",
    hint: "Inspired by the annealing process in metallurgy.",
  },
  {
    question: "Which algorithm mimics the behavior of ants searching for food?",
    options: ["Ant System", "Bees Algorithm", "Immune Network Algorithm", "Cultural Algorithm"],
    answer: "Ant System",
    hint: "It models how ants lay down pheromones to mark paths.",
  },
  {
    question: "What is the primary inspiration for Genetic Algorithms?",
    options: ["Physics", "Natural Selection", "Swarm Behavior", "Mathematics"],
    answer: "Natural Selection",
    hint: "It uses concepts like mutation, crossover, and survival of the fittest.",
  },
  {
    question: "Which algorithm uses a 'leader bee' to explore solutions?",
    options: ["Harmony Search", "Bees Algorithm", "Ant Colony System", "Clonal Selection"],
    answer: "Bees Algorithm",
    hint: "Inspired by how bees find food and share information.",
  },
  {
    question: "What does Differential Evolution primarily rely on?",
    options: ["Gradient Descent", "Vector Differences", "Ant Behavior", "Cultural Knowledge"],
    answer: "Vector Differences",
    hint: "It uses the differences between solution vectors to guide the search.",
  },
  {
    question: "Which algorithm maintains a 'belief space' for problem-solving?",
    options: ["Cultural Algorithm", "Ant System", "Particle Swarm Optimization", "Simulated Annealing"],
    answer: "Cultural Algorithm",
    hint: "It involves social knowledge passed across generations.",
  },
  {
    question: "What is the main process used in Clonal Selection algorithms?",
    options: ["Pheromone Updates", "Mutation and Selection", "Temperature Reduction", "Swarm Movement"],
    answer: "Mutation and Selection",
    hint: "Inspired by the immune system's adaptation to antigens.",
  },
  {
    question: "What is the foundation of the Harmony Search algorithm?",
    options: ["Ant Colony Behavior", "Musical Harmony", "Differential Operators", "Bayesian Probabilities"],
    answer: "Musical Harmony",
    hint: "It draws inspiration from musicians improvising harmony.",
  },
  {
    question: "Which algorithm uses mutation and crossover as its main operators?",
    options: ["Genetic Algorithm", "Particle Swarm Optimization", "Ant System", "Harmony Search"],
    answer: "Genetic Algorithm",
    hint: "It models natural evolution processes like inheritance and variation.",
  },
  {
    question: "What is the main goal of Population-Based Incremental Learning?",
    options: ["Generate new ant trails", "Update a probability vector", "Minimize temperature", "Maximize swarm cohesion"],
    answer: "Update a probability vector",
    hint: "It combines genetic algorithms and probabilistic modeling.",
  },
  {
    question: "Which algorithm models how humans solve problems in teams?",
    options: ["Harmony Search", "Cultural Algorithm", "Particle Swarm Optimization", "Simulated Annealing"],
    answer: "Particle Swarm Optimization",
    hint: "It mimics group problem-solving by adjusting based on neighbors.",
  },
  {
    question: "What is a key feature of Extremal Optimization?",
    options: ["Elimination of worst solutions", "Crossover and mutation", "Pheromone updates", "Temperature adjustments"],
    answer: "Elimination of worst solutions",
    hint: "It focuses on improving the weakest part of a solution.",
  },
  {
    question: "Which algorithm is based on Bayesian probabilities?",
    options: ["Bayesian Optimization Algorithm", "Harmony Search", "Differential Evolution", "Clonal Selection"],
    answer: "Bayesian Optimization Algorithm",
    hint: "It uses probabilistic models to guide the search.",
  },
  {
    question: "What mechanism does the Immune Network Algorithm rely on?",
    options: ["Antibody and antigen interaction", "Flocking behavior", "Crossover operations", "Temperature annealing"],
    answer: "Antibody and antigen interaction",
    hint: "Inspired by how the immune system interacts with pathogens.",
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [pressedOption, setPressedOption] = useState(null); // Track the pressed option

  const handleOptionPress = (option) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = option === currentQuestion.answer;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setPressedOption(option); // Set the pressed option

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleHintPress = () => {
    const currentQuestion = questions[currentQuestionIndex];
    Alert.alert("Hint", currentQuestion.hint);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    setPressedOption(null); // Reset pressed option
  };

  const calculateResultMessage = () => {
    const percentage = (score / questions.length) * 100;
    return percentage >= 70 ? "Approved" : "Failed";
  };

  return (
    <View style={styles.container}>
      {showResults ? (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsText}>
            Quiz Completed! Score: {score} out of {questions.length}
          </Text>
          <Text style={styles.resultMessage}>
            {calculateResultMessage()}
          </Text>
          <Pressable style={styles.button} onPress={resetQuiz}>
            <Text style={styles.buttonText}>Retry</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.quizContainer}>
          <Text style={styles.question}>
            {questions[currentQuestionIndex].question}
          </Text>
          <FlatList
            data={questions[currentQuestionIndex].options}
            renderItem={({ item }) => {
              const isSelected = item === pressedOption;
              const isCorrect = item === questions[currentQuestionIndex].answer;

              return (
                <Pressable
                  style={[
                    styles.optionButton,
                    isSelected && {
                      backgroundColor: isCorrect ? '#4CAF50' : '#F44336',
                    },
                    isSelected && { transform: [{ scale: 0.98 }] }, // Shrink effect
                  ]}
                  onPress={() => handleOptionPress(item)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      isSelected && { fontWeight: 'bold' },
                    ]}
                  >
                    {item}
                  </Text>
                </Pressable>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
          <Pressable style={styles.hintButton} onPress={handleHintPress}>
            <Text style={styles.hintText}>Hint</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#0d1117', // Dark theme background
  },
  quizContainer: {
    alignItems: 'center',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#c9d1d9', // Light text for dark theme
  },
  optionButton: {
    backgroundColor: '#21262d',
    padding: 12,
    borderRadius: 5,
    marginVertical: 8,
    width: '100%',
    borderWidth: 1,
    borderColor: '#30363d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    color: '#c9d1d9',
    textAlign: 'center',
    fontSize: 16,
  },
  hintButton: {
    marginTop: 15,
    backgroundColor: '#58a6ff',
    padding: 12,
    borderRadius: 5,
    width: '50%',
  },
  hintText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
  },
  resultsContainer: {
    alignItems: 'center',
  },
  resultsText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#58a6ff',
  },
  resultMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#58a6ff',
  },
  button: {
    backgroundColor: '#238636',
    padding: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Quiz;
