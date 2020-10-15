import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Shopping List',
};

const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: 'lightblue',
  },
  text: {
    padding: 40,
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Header;
