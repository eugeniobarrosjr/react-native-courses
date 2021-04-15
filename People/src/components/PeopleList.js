import React from 'react';
import { StyleSheet, View } from 'react-native';
import PersonItem from './PersonItem';

const PeopleList = ({ onPressItem, people }) => {
  function renderItems() {
    return people.map(person => (
      <PersonItem navigateToDetails={onPressItem} person={person} />
    ));
  }

  return <View style={styles.container}>{renderItems()}</View>;
};

const styles = StyleSheet.create({
  container: {},
});

export default PeopleList;
