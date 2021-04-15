import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PersonItem = ({ navigateToDetails, person }) => {
  const { login, name, picture } = person;

  return (
    <TouchableOpacity onPress={() => navigateToDetails({ person })}>
      <View style={styles.container} key={login.uuid}>
        <Image style={styles.avatar} source={{ uri: picture.thumbnail }} />
        <Text style={styles.title}>{`${name.first} ${name.last}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatar: {
    aspectRatio: 1,
    flex: 1,
    borderRadius: 50,
    marginLeft: 15,
  },
  title: {
    fontSize: 20,
    flex: 7,
    paddingLeft: 15,
  },
});

export default PersonItem;
