import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { KeyboardAvoidingView, } from 'react-native';
import { GrAdd } from 'react-icons/gr';
import Task from './components/Task';

const App = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>

      {/* List Scroll */}

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}

        keyboardShouldPersistTaps='handled'
      >

      {/* Title goes Here */}

      <View style={styles.tasksWrapper}>

            <Text style={styles.sectionTitle}
                  >My task list
            </Text>
        <View style={styles.items}>
          

          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  
                                  onPress={() => 
                                  completeTask(index)}
                >

                          <Task text={item} /> 

                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      {/* Write  a task section */}
     
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
            <TextInput style={styles.input} 
                       placeholder={'Write your task'} 
                       value={task} 
                       onChangeText={text => 
                       setTask(text)} 
            />

            <TouchableOpacity onPress={() => handleAddTask()}
            >

                      <View style={styles.addWrapper}>
                            <Text style={styles.addText}
                                 > +
                            </Text>
                      </View>

            </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001a33',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderColor: '#000d1a',
    borderWidth: 3,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000d1a',
    borderWidth: 3,
  },
  addText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
});

export default App;
