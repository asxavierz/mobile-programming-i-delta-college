
> Class 01 - February 07th, 2025
**Topic**: Introduction to React Native  

**Homework**:  
Based on the "Add task" app. 

Add a new functionality called `Add activity`. In order to accomplish this, do the following:
- Add a new `textInput`
- Add a new `Button`
- Add a new `FlatList`
- Implement the flow among them

The previous 3 components are related to the `Activity` functionality. 

Keep in mind that the `Task` functionality CANNOT BE DELETED.

------------------------------------------------------------
import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, Button, FlatList, View, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);  
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState('');

 
  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);  
      setTask('');  
    }
  };

  
  const handleAddActivity = () => {
    if (newActivity.trim()) {
      setActivities([...activities, newActivity]);
      setNewActivity('');  
    }
  };

  
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {}
        <Card style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Escreva a tarefa..."
            value={task}
            onChangeText={setTask}
          />
          <Button title="Adicionar tarefa" onPress={handleAddTask} />
          
          {}
          <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </Card>

        {}
        <Card style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Escreva a atividade..."
            value={newActivity}
            onChangeText={setNewActivity}
          />
          <Button title="Adcione a atividade" onPress={handleAddActivity} />
          
          {}
          <FlatList
            data={activities}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    marginBottom: 16,
    padding: 8,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  scrollViewContent: {
    paddingBottom: 20, 
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
});

