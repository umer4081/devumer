import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Data} from './Data';
import QuestionRender from './QuestionRender';

const Question = () => {
  const renderItem = ({item, index}: any) => {
    return <QuestionRender item={item} inde={index} />;
  };
  return (
    <View>
      <FlatList data={Data} renderItem={renderItem} />
    </View>
  );
};

export default Question;
