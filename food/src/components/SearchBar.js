import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';

import {changeText, submitText} from '../actions';

const SearchBar = props => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={text => {
          props.changeText(text);
        }}
        value={props.input}
        onEndEditing={() => props.submitText(props.input)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: 50.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 15,
    backgroundColor: '#F0DDDD',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputStyle: {
    marginLeft: 5,
    height: 40,
    fontSize: 18,
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
  },
});

const mapStateToProps = state => {
  return {
    input: state.input,
  };
};

const mapDispatchToProps = {
  changeText,
  submitText,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
