import React from 'react';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PeopleScreen from './src/screens/PeopleScreen';
import PersonDetailScreen from './src/screens/PersonDetailScreen';

const StackNavigator = createStackNavigator(
  {
    Main: {
      screen: PeopleScreen,
    },
    PersonDetails: {
      screen: PersonDetailScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Person Details',
        headerTitleStyle: {
          color: '#fff',
          flexGrow: 1,
        },
      }),
    },
  },
  {
    defaultNavigationOptions: {
      title: 'People!',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#c5c5c5',
      },
      headerTitleStyle: {
        color: '#fff',
        flexGrow: 1,
        textAlign: 'center',
      },
    },
  },
);

const AppContainer = createAppContainer(StackNavigator);

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <AppContainer />
    </>
  );
};

export default App;
