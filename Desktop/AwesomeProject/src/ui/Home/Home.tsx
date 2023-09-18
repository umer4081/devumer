import React, {useState} from 'react';
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import imagePath from '../../constants/imagePath';
import styles from '../Home/styles';
import {useSelector} from 'react-redux';

interface Message {
  id: string;
  text: string;
}

const Home = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>('');

  const saveMessage = useSelector((state: any) => state);
  console.log(saveMessage, 'is message save redux000000000-----');

  const Send = () => {
    if (inputText.trim() !== '') {
      setMessages(prevMessages => [
        ...prevMessages,
        {id: Date.now().toString(), text: inputText},
      ]);
      setInputText('');
    }
  };

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.messageContainer}>
        <View style={styles.messageBubble}>
          <Text style={styles.messageText}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'lightyellow',
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Image style={styles.image} source={imagePath.user} />
        <Text style={styles.text_name}>Umer</Text>
      </View>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        inverted
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type a message"
          value={inputText}
          onChangeText={inputText => setInputText(inputText)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={Send}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
