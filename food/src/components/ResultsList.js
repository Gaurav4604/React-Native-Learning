import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import ResultsDetail from './ResultsDetail';

class ResultsList extends Component {
  render() {
    return (
      <View>
        <Text style={styles.titleStyle}>{this.props.title}</Text>
        <FlatList
          horizontal={true}
          data={this.props.results}
          keyExtractor={result => result.id}
          renderItem={({item}) => <ResultsDetail item={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList);
