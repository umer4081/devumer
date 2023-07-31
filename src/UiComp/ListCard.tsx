import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
import {width} from '../styles/responsiveSize';

const ListCard = ({item, index}: any) => {
  return (
    <View style={{marginTop: 16, marginHorizontal: 24}}>
      <Card mode="elevated">
        <View style={{flexDirection: 'row', width: width - 48}}>
          <Image
            source={{uri: item.image}}
            style={{
              marginVertical: 16,
              marginHorizontal: 8,
              height: '75%',
              width: '20%',
            }}
          />
          <View style={{width: '70%', marginBottom: 16}}>
            <Card.Title title={item.title} />
            <Card.Content>
              <Text numberOfLines={3}>{item.subtitle}</Text>
            </Card.Content>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default ListCard;

const styles = StyleSheet.create({});
