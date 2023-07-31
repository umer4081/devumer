import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Checkbox, RadioButton} from 'react-native-paper';
import {moderateScale} from '../../styles/responsiveSize';

const Radiobuttons = ({item, index}: any) => {
  const [checked, setChecked] = useState();
  // let data = item?.options;

  let data = {};
  if (item?.options) {
    data = item?.options;
  } else {
    data = item;
  }

  return (
    <View
      style={{
        marginHorizontal: moderateScale(24),
        marginTop: moderateScale(16),
      }}>
      <Text>{item?.question}</Text>

      <RadioButton.Group
        onValueChange={value => setChecked(value == checked ? null : value)}
        value={checked}>
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

      {/* {data.map((item: any, index: any) => {
        return (
          <>
            <RadioButton.Item
              label={item.option.answer}
              value={index == checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(index == checked ? null : index);
              }}
            />
          </>
        );
      })} */}
    </View>
  );
};

export default Radiobuttons;
