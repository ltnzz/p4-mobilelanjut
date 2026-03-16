import React from 'react'; 
import { StatusBar } from 'expo-status-bar'; 
import { ThemeProvider } from './src/context/ThemeContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TodoProvider } from './src/context/ToDoContext';
import HomeScreen from './src/screens/HomeScreen'; 
  
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <SafeAreaProvider>
          <TodoProvider>
            <StatusBar style="light" />
            <HomeScreen />
          </TodoProvider>
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}