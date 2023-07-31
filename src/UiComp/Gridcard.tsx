import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
import {width} from '../styles/responsiveSize';

interface grid {
  item: any;
  index: number;
  numColumns: number;
}

const Gridcard = ({item, index, numColumns}: grid) => {
  console.log(index % numColumns == 0, '----l;llllll[---------');

  let spacing = (numColumns + 1) * 8;
  console.log(spacing, numColumns, '---l;lllllllll');

  return (
    <View
      style={{
        width: (width - spacing) / numColumns,
        marginVertical: 8,
        marginLeft: 8,
        // marginRight: index % numColumns == 0 ? 0 : 0,
      }}>
      <Card mode="elevated">
        <Card.Title title={item.title} />
        <Card.Content>
          <Text>{item.subtitle}</Text>
        </Card.Content>
        <Card.Cover
          source={{uri: item.image}}
          style={{marginVertical: 16, marginHorizontal: 8}}
        />
      </Card>
    </View>
  );
};

export default Gridcard;

const styles = StyleSheet.create({});
