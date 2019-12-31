import React, {Component} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';

class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldName: '',
      value: '',
      title: '',
    };
  }

  componentDidMount() {
    this.setState({
      value: 'Value',
      title: 'Title',
    });
  }

  handleOnChange = text => {
    this.setState({
      value: text,
    });
  };

  render() {
    const {value, title} = this.state;

    return (
      <View style={styles.container}>
        {/*<Text>Title ===> {title}</Text>*/}
        {/*<Text>Value ===> {value}</Text>*/}
        {/*<Button*/}
        {/*  title="Test thu xem sao"*/}
        {/*  onPress={this.handleOnChange('Helloooo')}*/}
        {/*/>*/}
      </View>
    );
  }
}

export default TestComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
});
