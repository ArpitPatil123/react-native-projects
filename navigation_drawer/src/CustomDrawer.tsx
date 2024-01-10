import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DrawerItemList} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <View style={{padding: 20}}>
      <View>
        <Text>Drawer</Text>
      </View>
      {/* <DrawerItemList {...props} /> */}
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
