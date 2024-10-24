import React from "react";
import {
    
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
   
  } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <ScrollView style={styles.ScrollView}>
        {tasks.map((task, index) => (
          <Pressable key={index}>
            <View style={[styles.task]}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
  );

  
}  

const styles = StyleSheet.create({
    ScrollView: {
      marginTop: 10,
    },
    task: {
      marginHorizontal: 20,
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },

    taskText: {
        fontSize: 16,
      },

    completed: {
        backgroundColor: '#e0e0e0',
      },
      
}
);

export default ToDoList;