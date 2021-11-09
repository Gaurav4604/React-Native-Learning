import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export class ResultsDetail extends Component {
  render() {
    const item = this.props.item;
    return (
      <View>
        <Image style={styles.image} source={{uri: item.image_url}} />
        <Text style={styles.name}>{item.name}</Text>
        <Text>
          {item.rating} Rating, {item.review_count} Reviews
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 200,
    borderRadius: 4,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default ResultsDetail;
