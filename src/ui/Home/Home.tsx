import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import commonSpacing from '../../styles/commonSpacing';
import {IconButton, MD3Colors} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {data} from './Data';
import HomeListing from './HomeListing';
import Buttoncomp from '../../UiComp/Buttoncomp';

const Home = ({route}: any) => {
  const type = route.params.type;
  const numColumns = route?.params.nofcol;
  const gridtype = route?.params.gridtype;

  let typecheck = type == 'LIST' ? type : gridtype == 'VERT' ? type : 'HORGRID';
  const renderItem = ({item, index}: any) => {
    return (
      <HomeListing
        item={item}
        index={index}
        type={typecheck}
        numColumns={numColumns}
      />
    );
  };
  const randonumber = () => {
    return Math.floor(Math.random() * 999 + 1);
  };
  return (
    <WrapperContainer>
      <View style={commonSpacing.flex1}>
        {/* <View style={styles.header}>
          <IconButton
            icon={'format-list-bulleted'}
            iconColor={MD3Colors.error50}
            size={30}
            mode="contained-tonal"
            onPress={onpressList}
          />
          <IconButton
            icon={'view-grid'}
            iconColor={MD3Colors.error50}
            size={30}
            mode="contained-tonal"
            onPress={onpressGrid}
          />
          <IconButton
            icon={'grid'}
            iconColor={MD3Colors.error50}
            size={30}
            mode="contained-tonal"
            onPress={onpressGridHorizontal}
          />
        </View> */}
        <ScrollView>
          <FlatList
            data={data(randonumber)}
            renderItem={renderItem}
            key={numColumns}
            numColumns={
              type == 'GRID' ? (gridtype == 'VERT' ? numColumns : null) : null
            }
            horizontal={
              type == 'GRID' ? (gridtype == 'HOR' ? true : false) : false
            }
          />
          <Buttoncomp
            type="RoundedRectangle"
            textcolor="white"
            btnText="next"
            buttoncolor="pink"
          />
        </ScrollView>
      </View>
    </WrapperContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
