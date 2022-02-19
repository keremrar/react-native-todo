import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  FlatList,
  Alert,
} from 'react-native';
import Header from './components/Header/Header';
import styles from './App_styles';

function App() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);
  const handleDo = () => {
    if (text === '') {
      return Alert.alert('Lütfen boş bırakmayın!');
    }
    setTasks([...tasks, text]);
    setText('');
  };
  const handleDelete = index => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };
  return (
    <View style={styles.container}>
      <Header tasks={tasks} />
      <TextInput
        onChangeText={setText}
        placeholder="Ekle..."
        style={styles.input}
        value={text}
      />
      <TouchableOpacity style={styles.button_container} onPress={handleDo}>
        <Text style={styles.button}>Ekle</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={({item, index}) => (
          <View style={styles.taskContainer}>
            <Text style={styles.task}>{item}</Text>
            <TouchableOpacity
              style={styles.delete}
              onPress={() => handleDelete(index)}>
              <Text style={styles.sign}>X</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item + Date.now() + Math.random()}
      />
    </View>
  );
}

export default App;
