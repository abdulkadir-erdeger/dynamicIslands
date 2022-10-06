import { StyleSheet, Text, SafeAreaView,Platform } from 'react-native';
import DynamicIsland from './src/components/DynamicIsland';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <DynamicIsland/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40 : 0 
  },
});
