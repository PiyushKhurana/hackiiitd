import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight,Image,Animated, } from 'react-native';

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      borderWidth:1,
      borderColor:'#a0522d',
      backgroundColor: '#ffefd5',
    //   alignItems: 'center',
      justifyContent: 'center',
      marginVertical:30,
    },
    title:{
        borderBottomColor:'#d3d3d3',
        borderBottomWidth:1,
        padding:5,
        fontSize:15,
        flexDirection:"row",
    },
    photoCont:{
        borderRadius:50,
        borderWidth: 1,
        borderColor:'transparent',
        overflow: 'hidden',
    },
    likeButton:{
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:25,
        textAlign:'center',
    }
  });

class CardFeed extends React.Component {
    animatedValue = new Animated.Value(0);
    constructor(props)
    {
        super(props);
        this.state=
        {
            count:0,
            text:'Like',
        };
    }
    
    iLike=()=>
    {
        if(this.state.count===0)
        {   this.setState({count:this.state.count+1});
            this.setState({text:'Liked'}); 
        Animated.timing(
            this.animatedValue,
            {
                toValue:1,
                duration:250
            }
        ).start()}
        else if(this.state.count===1)
        {   this.setState({count:this.state.count-1});
        this.setState({text:'Like'}); 
    Animated.timing(
        this.animatedValue,
        {
            toValue:0,
            duration:250
        }
    ).start()}
    }
    render()
    {
    const bgColor=this.animatedValue.interpolate({
        inputRange:[0,1],
        outputRange:['#000000','#ff1493']
    })
  return (
    <View style={styles.container}>
        <View style={styles.title}>
        <Text style={{fontWeight:'bold'}}>{this.props.name}</Text>
        <Text> posted in </Text>
        <Text style={{color:'#e9967a'}}>{this.props.category}</Text>
        </View>
        <Text style={styles.title}>{this.props.caption}</Text>
        <View style={styles.photoCont}>
        <Image style={[{width: 300, height: 300}]} source={{ uri:this.props.src}} />
        </View>
        <TouchableHighlight onPress={this.iLike}>
        <Animated.Text style={[{color:bgColor},styles.likeButton]}>{this.state.text}</Animated.Text>
        </TouchableHighlight>
    </View>
  );
}
}

export default CardFeed;
