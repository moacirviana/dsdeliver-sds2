import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../Header/Index';
import OrderCard from '../OrderCard/Index';


function Orders() {
  const handleOnPress = () => {

  }

  return (
    <>
     <Header />
      <ScrollView style={styles.container}>
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
      </ScrollView>
      
    </>
  );
}

const styles = StyleSheet.create({
  container : {
    paddingRight: '5%',
    paddingLeft: '5%'
  }
});

export default Orders;