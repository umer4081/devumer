import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from '../../styles/responsiveSize';

const MultilineQuestion = ({item, index}: any) => {
  const [value, setvalue] = useState();

  return (
    <View
      style={{
        marginHorizontal: moderateScale(24),
        marginTop: moderateScale(16),
      }}>
      <Text>{item.question}</Text>
      <TextInput
        style={{
          backgroundColor: '#e7e7e7',
          borderRadius: 8,
          paddingHorizontal: 16,
          paddingVertical: 8,
          marginTop: moderateScale(16),
          maxHeight: 120,
          minHeight: 120,
          textAlignVertical: 'top',
        }}
        onChangeText={setvalue}
        multiline
        value={value}
        placeholder="answer"
      />
    </View>
  );
};

export default MultilineQuestion;

const styles = StyleSheet.create({});
