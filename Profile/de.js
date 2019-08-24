import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight,Image,Animated, } from 'react-native';

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    //   borderWidth:1,
      backgroundColor: '#f08080',
      borderRadius:20,
      alignItems: 'center',
      margin:5,
      padding:10,
    //   justifyContent: 'center',
    //   flexDirection:"row",
    },
    title:{
        padding:2,
        fontSize:15,
        color:'#fffaf0'
    },
  });

class De extends React.Component {
    constructor(props)
    {
        super(props);
        this.state=
        {
    
        };
    }
    
    render()
    {
  return (
    <View>
    <View style={styles.container}>
        <Text style={styles.title}>{this.props.name}</Text>
    </View>
    </View>
  );
}
}

export default De;
