import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from '../../styles/responsiveSize';

const NormalQuestion = ({item, index}: any) => {
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
        }}
        onChangeText={setvalue}
        value={value}
        placeholder="answer"
      />
    </View>
  );
};

export default NormalQuestion;

const styles = StyleSheet.create({});
