import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Spinner} from 'native-base';

// will used to render a blank page with the spinner moving
const EmptyContainer = () => {
  return (
    <Container style={styles.emptyContainer}>
      <Spinner />
    </Container>
  );
};

export default EmptyContainer;

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    backgroundColor: '#1b262c',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
