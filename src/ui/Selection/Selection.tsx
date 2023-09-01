import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Buttoncomp from '../../UiComp/Buttoncomp';
import colors from '../../styles/colors';
import {Button, SegmentedButtons, Text, TextInput} from 'react-native-paper';
import {moderateScale} from '../../styles/responsiveSize';
import styles from './styles';
import navigationString from '../../constants/navigationString';
import MultiCheckBox from '../Question/MultiCheckBox';

const Selection = ({navigation}: any) => {
  const [value, setvalue] = useState('LIST');
  const [type, settype] = useState('VERT');

  const [numbercolumn, setnumbercolumn] = useState();

  console.log(numbercolumn, 'l99');

  const onpressNext = () => {
    navigation.navigate(navigationString.HOME, {
      type: value,
      nofcol: type == 'VERT' ? Number(numbercolumn) : 1,
      gridtype: type,
    });
  };

  const onpressQuestion = () => {
    navigation.navigate(navigationString.QUESTION);
  };

  const SelectQuestions = () => {
    navigation.navigate(navigationString.NUMBEROFQUES);
  };

  return (
    <View
      style={{
        backgroundColor: colors.white,
        flex: 1,
        padding: moderateScale(24),
      }}>
      <Text variant="titleLarge">Sort By</Text>

      <SegmentedButtons
        value={value}
        onValueChange={setvalue}
        style={styles.segment}
        buttons={[
          {
            value: 'LIST',
            label: 'List',
            // icon: 'format-list-bulleted',
          },
          {
            value: 'GRID',
            label: 'Grid',
            // icon: 'grid',
          },
        ]}
      />
      {value == 'GRID' && <Text variant="titleLarge">Grid type</Text>}
      {value == 'GRID' && (
        <SegmentedButtons
          value={type}
          onValueChange={settype}
          style={styles.segment}
          buttons={[
            {
              value: 'VERT',
              label: 'Vertical',
            },
            {
              value: 'HOR',
              label: 'Horizontal',
            },
          ]}
        />
      )}

      {value == 'GRID' && type == 'VERT' && (
        <TextInput
          label={'number of column'}
          keyboardType="numeric"
          maxLength={1}
          value={numbercolumn}
          style={styles.numinput}
          textColor="black"
          mode="outlined"
          activeOutlineColor="black"
          onChangeText={setnumbercolumn}
        />
      )}

      <Button mode="elevated" onPress={onpressQuestion} style={styles.btnStyle}>
        questions
      </Button>
      <Button mode="elevated" onPress={onpressNext} style={styles.btnStyle}>
        Next
      </Button>
      <Button mode="elevated" onPress={SelectQuestions} style={styles.btnStyle}>
        Select Questions
      </Button>
    </View>
  );
};

export default Selection;
