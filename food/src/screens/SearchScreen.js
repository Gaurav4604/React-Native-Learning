import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import SearchBar from '../components/SearchBar';

const SearchScreen = props => {
  return (
    <View>
      <SearchBar />
      <Text>{props.searchTerm}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
    searchTerm: state.term,
  };
};

export default connect(mapStateToProps)(SearchScreen);
