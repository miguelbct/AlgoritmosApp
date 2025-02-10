import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WebView } from 'react-native-webview';

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';
import Screen6 from './screens/Screen6';
import Findes from './screens/Findes';
import RS from './screens/screenslvl2/RS';
import BOA from './screens/screenslvl2/BOA';
import CA from './screens/screenslvl2/CA';
import CGA from './screens/screenslvl2/CGA';
import CSA from './screens/screenslvl2/CSA';
import DE from './screens/screenslvl2/DE';
import EO from './screens/screenslvl2/EO';
import ES from './screens/screenslvl2/ES';
import GA from './screens/screenslvl2/GA';
import GP from './screens/screenslvl2/GP';
import HC from './screens/screenslvl2/HC';
import HS from './screens/screenslvl2/HS';
import ILS from './screens/screenslvl2/ILS';
import INA from './screens/screenslvl2/INA';
import NSA from './screens/screenslvl2/NSA';
import PBIL from './screens/screenslvl2/PBIL';
import PSO from './screens/screenslvl2/PSO';
import UMDA from './screens/screenslvl2/UMDA';
import SA from './screens/screenslvl2/SA';
import ACS from './screens/screenslvl2/ACS';
import AIRS from './screens/screenslvl2/AIRS';
import ARS from './screens/screenslvl2/ARS';
import AS from './screens/screenslvl2/AS';
import BA from './screens/screenslvl2/BA';
import Quiz from './screens/Quiz';

const imageSource = require('./assets/logo.webp'); 
const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const colorScheme = 'dark'; 
  return (
    <ScrollView contentContainerStyle={styles.container(colorScheme)}>
    <View style={styles.header(colorScheme)}>
            <Text style={styles.title(colorScheme)}>Optimization Algorithms</Text>
          </View>
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri:"https://www.youtube.com/embed/Q2dewZweAtU?si=ljBSjqz_wPKlCsiA" }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          mediaPlaybackRequiresUserAction={false}
          allowsInlineMediaPlayback={true}
          style={styles.webView}
        />
      </View>
      <Text style={styles.description(colorScheme)}>
        Optimization algorithms are mathematical and computational techniques used to find the best solution to a problem, maximizing or minimizing an objective function under certain constraints.
      </Text>

      {/* Botones de navegación */}
      <View style={styles.buttonGrid}>
        <TouchableOpacity style={styles.button(colorScheme)} onPress={() => navigation.navigate('Stochastic')}>
          <Text style={styles.buttonText(colorScheme)}>Stochastic</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button(colorScheme)} onPress={() => navigation.navigate('Evolutionary')}>
          <Text style={styles.buttonText(colorScheme)}>Evolutionary</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button(colorScheme)} onPress={() => navigation.navigate('Physical')}>
          <Text style={styles.buttonText(colorScheme)}>Physical</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button(colorScheme)} onPress={() => navigation.navigate('Probabilistic')}>
          <Text style={styles.buttonText(colorScheme)}>Probabilistic</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button(colorScheme)} onPress={() => navigation.navigate('Swarm')}>
          <Text style={styles.buttonText(colorScheme)}>Swarm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button(colorScheme)} onPress={() => navigation.navigate('Immune')}>
          <Text style={styles.buttonText(colorScheme)}>Immune</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialButtonCSV(colorScheme)} onPress={() => navigation.navigate('Findes')}>
    <Text style={styles.buttonText(colorScheme)}>CSV Reader</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.specialButtonQuiz(colorScheme)} onPress={() => navigation.navigate('Quiz')}>
    <Text style={styles.buttonText(colorScheme)}>Quiz</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </ScrollView>
  );
}

export default function App() {
  const colorScheme = 'dark'; 
  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Optimization Algorithms">
        <Stack.Screen name="Optimization Algorithms" component={HomeScreen} options={{headerTitle: ''}}/>
        <Stack.Screen name="Stochastic" component={Screen1} options={{headerTitle: ''}} />
        <Stack.Screen name="Evolutionary" component={Screen2} options={{headerTitle: ''}}/>
        <Stack.Screen name="Physical" component={Screen3} options={{headerTitle: ''}}/>
        <Stack.Screen name="Probabilistic" component={Screen4} options={{headerTitle: ''}}/>
        <Stack.Screen name="Swarm" component={Screen5} options={{headerTitle: ''}}/>
        <Stack.Screen name="Immune" component={Screen6} options={{headerTitle: ''}}/>
        <Stack.Screen name="Findes" component={Findes} options={{headerTitle: ''}}/>
        <Stack.Screen name="Quiz" component={Quiz} options={{headerTitle: ''}}/>
        <Stack.Screen name="Adaptative Random Search" component={ARS} options={{headerTitle: ''}}/>
        <Stack.Screen name="Hill Climbing" component={HC} options={{headerTitle: ''}}/>
        <Stack.Screen name="Iterated Local Search" component={ILS} options={{headerTitle: ''}}/>
        <Stack.Screen name="Random Search" component={RS} options={{headerTitle: ''}}/>
        <Stack.Screen name="Generic Algorithm" component={GA} options={{headerTitle: ''}}/>
        <Stack.Screen name="Generic Programming" component={GP} options={{headerTitle: ''}}/>
        <Stack.Screen name="Evolution Strategies" component={ES} options={{headerTitle: ''}}/>
        <Stack.Screen name="Diﬀerential Evolution" component={DE} options={{headerTitle: ''}}/>
        <Stack.Screen name="Simulated Annealing" component={SA} options={{headerTitle: ''}}/>
        <Stack.Screen name="Extremal Optimization" component={EO} options={{headerTitle: ''}}/>
        <Stack.Screen name="Harmony Search" component={HS} options={{headerTitle: ''}}/>
        <Stack.Screen name="Population-Based Incremental Learning" component={PBIL} options={{headerTitle: ''}}/>
        <Stack.Screen name="Univariate Marginal Distribution Algorithm" component={UMDA} options={{headerTitle: ''}}/>
        <Stack.Screen name="Compact Genetic Algorithm" component={CGA} options={{headerTitle: ''}}/>
        <Stack.Screen name="Bayesian Optimization Algorithm" component={BOA} options={{headerTitle: ''}}/>
        <Stack.Screen name="Particle Swarm Optimization" component={PSO} options={{headerTitle: ''}}/>
        <Stack.Screen name="Cultural Algorithm" component={CA} options={{headerTitle: ''}}/>
        <Stack.Screen name="Ant System" component={AS} options={{headerTitle: ''}}/>
        <Stack.Screen name="Ant Colony System" component={ACS} options={{headerTitle: ''}}/>
        <Stack.Screen name="Bees Algorithm" component={BA} options={{headerTitle: ''}}/>
        <Stack.Screen name="Clonal Selection Algorithm" component={CSA} options={{headerTitle: ''}}/>
        <Stack.Screen name="Negative Selection Algorithm" component={NSA} options={{headerTitle: ''}}/>
        <Stack.Screen name="Artificial Immune Recognition System" component={AIRS} options={{headerTitle: ''}}/>
        <Stack.Screen name="Immune Network Algorithm" component={INA} options={{headerTitle: ''}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: (colorScheme) => ({
    flexGrow: 1,
    backgroundColor: colorScheme === 'dark' ? '#0d1117' : '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  }),
  header: (colorScheme) => ({
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  }),
  title: (colorScheme) => ({
    fontSize: 28,
    fontWeight: 'bold',
    color: colorScheme === 'dark' ? '#27cdfe' : '#0056b3',
    marginLeft: 10,
  }),
  description: (colorScheme) => ({
    fontSize: 16,
    textAlign: 'center',
    color: colorScheme === 'dark' ? '#8b949e' : '#24292f',
    marginBottom: 20,
    lineHeight: 22,
  }),
  videoContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#161b22',
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  webView: {
    flex: 1,
    borderRadius: 8,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: (colorScheme) => ({
    backgroundColor: colorScheme === 'dark' ? '#21262d' : '#48c9b0',
    padding: 15,
    margin: 10,
    width: '44%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colorScheme === 'dark' ? '#30363d' : '#48c9b0',
  }),
  specialButtonCSV: (colorScheme) => ({
    backgroundColor: '#ff5733',
    padding: 15,
    margin: 10,
    width: '95%',
    aspectRatio: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#c70039',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  }),
  specialButtonQuiz: (colorScheme) => ({
    backgroundColor: '#3498db',
    padding: 15,
    margin: 10,
    width: '95%',
    aspectRatio: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2980b9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  }),
  buttonText: (colorScheme) => ({
    color: colorScheme === 'dark' ? '#c9d1d9' : '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  }),
});
