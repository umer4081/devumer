import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ListCard from '../../UiComp/ListCard';
import Gridcard from '../../UiComp/Gridcard';
import {width} from '../../styles/responsiveSize';

const HomeListing = ({item, index, type, numColumns}: any) => {
  return (
    <View style={{alignItems: 'flex-start'}}>
      {type == 'LIST' && <ListCard item={item} index={index} />}
      {type == 'GRID' && (
        <Gridcard item={item} index={index} numColumns={numColumns} />
      )}
      {type == 'HORGRID' && (
        <Gridcard item={item} index={index} numColumns={numColumns} />
      )}
    </View>
  );
};

export default HomeListing;

const styles = StyleSheet.create({});
