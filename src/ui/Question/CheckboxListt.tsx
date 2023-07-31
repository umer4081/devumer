import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {Checkbox} from 'react-native-paper';

const CheckboxListt = () => {
  const [checked, setChecked] = useState<number | null>(null);
  const data = item.options.map(option => option.option.answer);

  return (
    <View
      style={{
        marginHorizontal: moderateScale(24),
        marginTop: moderateScale(16),
      }}>
      <Text>{item?.question}</Text>

      {data?.map((answer, index) => (
        <View key={index}>
          <Checkbox
            label={answer}
            status={index === checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(index === checked ? null : index);
            }}
          />
        </View>
      ))}
    </View>
  );
};

export default CheckboxListt;

const styles = StyleSheet.create({});
