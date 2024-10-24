import React from 'react';
import {
  
  StyleSheet,
 
  View,
 
  TextInput,
  Button
} from 'react-native';
import { useState } from 'react';
function ToDoForm({OnAddTask}){
  const [task, setTask] = useState('');
  const addTask = () => {
    setTask('');
    OnAddTask(task)
  }
    return(
      
        <View style={styles.form}>
        <TextInput
         value={task}
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={(text) => setTask(text)}
        />
        <Button title="Add" onPress={addTask} />
      </View>
    );
}

const styles = StyleSheet.create({
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
  });

  export default ToDoForm;