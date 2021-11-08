import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import {submitText} from '../actions';

const filterByPrice = (price, results) => {
  return results.filter(result => {
    return result.price === price;
  });
};

const SearchScreen = props => {
  useEffect(() => {
    props.submitText('hello'); // for making the initial search
  }, []);

  console.log(props.results ? props.results[0] : 'hello');
  return (
    <SafeAreaView>
      <SearchBar />
      <Text>{props.results.length}</Text>
      <ResultsList
        title="Cost Effective"
        results={filterByPrice('$', props.results)}
      />
      <ResultsList
        title="Pricier"
        results={filterByPrice('$$', props.results)}
      />
      <ResultsList
        title="Big Spender"
        results={filterByPrice('$$$', props.results)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
    results: state.result,
  };
};

export default connect(mapStateToProps, {submitText})(SearchScreen);
