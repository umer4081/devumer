import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Checkbox, RadioButton} from 'react-native-paper';
import {moderateScale} from '../../styles/responsiveSize';

const Radiobuttons = ({item, index}: any) => {
  // const [checked, setChecked] = useState();
  const [checked, setChecked] = useState<number | null>(null);

  // let data = item?.options;

  let data = {};
  if (item?.options) {
    data = item?.options;
  } else {
    data = item;
  }

  console.log(data, 'radiooooooo');
  return (
    <View
      style={{
        marginHorizontal: moderateScale(24),
        marginTop: moderateScale(16),
      }}>
      <Text>{item.question}</Text>

      <RadioButton.Group
        onValueChange={value => setChecked(value === checked ? null : value)}
        value={checked?.toString() || ''}>
        {data.map((item: any, index: any) => {
          return (
            <>
              <RadioButton.Item
                label={item.option.answer}
                value={item.option.answer}
                onPress={() => {
                  setChecked(index == checked ? null : index);
                }}
              />
            </>
          );
        })}
      </RadioButton.Group>
    </View>
  );
};

export default Radiobuttons;

const styles = StyleSheet.create({});
