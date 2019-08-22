import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight,Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

class CardFeed extends React.Component {
    constructor(props)
    {
        super(props);
        this.state=
        {
            count:0
        };
    }
    render()
    {
  return (
    <View style={styles.container}>
        <Text>Ana Srivas posted in Diet</Text>
        <Text>Who said salads are not appetising??</Text>
        <Image style={{width: 300, height: 300}} source={{ uri: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps6498_MRR133247D07_30_5b_WEB-2.jpg'}} />
        <TouchableHighlight >
        <Text>Like</Text>
        </TouchableHighlight>
    </View>
  );
}
}

export default CardFeed;
