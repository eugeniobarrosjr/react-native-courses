import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PeopleList from '../components/PeopleList';

const PeopleScreen = ({ navigation }) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function getPeople() {
      try {
        const { data } = await axios.get(
          'https://randomuser.me/api/?nat=br&results=5',
        );
        setPeople(data.results);
      } catch (error) {
        console.error(error);
      }
    }

    getPeople();
  }, []);

  return (
    <PeopleList
      onPressItem={pageParams =>
        navigation.navigate('PersonDetails', pageParams)
      }
      people={people}
    />
  );
};

export default PeopleScreen;
