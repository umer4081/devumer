import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },

  image: {
    width: 64,
    height: 64,
    borderWidth: 1,
    borderRadius: 16,
    marginTop: 24,
    marginLeft: 16,
    // mar,
    // borderRadiusColor: 'red',
  },
  text_name: {
    // textAlign: 'center',
    fontSize: 24,
    marginTop: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
  },
  sendButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  messageContainer: {
    marginBottom: 10,
    alignItems: 'flex-end',
    paddingHorizontal: 16,
  },
  messageBubble: {
    backgroundColor: '#2979FF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  messageText: {
    color: '#FFFFFF',
  },
});
export default styles;
