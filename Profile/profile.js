import React from 'react';
import { StyleSheet, Text, View, Button,Image,ActivityIndicator, } from 'react-native';
import De from './de.js';
const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      borderWidth:1,
      borderColor:'#a0522d',
      backgroundColor: '#ffefd5',
    //   alignItems: 'center',
      justifyContent: 'center',
      marginVertical:30,
      flexDirection:"row",
    },
    title:{
        padding:2,
        fontSize:20,
        flexDirection:"row",
    },
    photoCont:{
        borderRadius:100,
        borderWidth: 1,
        borderColor:'transparent',
        overflow: 'hidden',
    },
    photo:{
        borderRadius:100,
    },
    forDe:{
      flexDirection:"row",
    },
    trainer:{
      borderStyle:"dashed",
      borderWidth:2,
    },
    button:{
      color:'#fffacd',
      // padding:10,
    },
    follow:{
      textDecorationStyle:"double",
      textDecorationLine:"underline",
      fontSize:17,
    },
  });

class Profile extends React.Component {
    constructor(props)
    {
        super(props);
        this.state=
        {
            Gender:'Male',
            Age:19,
            Height:165,
            Weight:60,
            Diet:'',
            ai:false,
        };
    }
    onPress=()=>{
    this.setState({ ai: true });
     setTimeout(() => this.setState({ ai: false }), 2000);
     this.setState({Diet:'Ketogenic!'});
    }
    render()
    {
  return (
    <View>
    <View style={styles.container}>
      <View style={styles.photoCont}>
        <Image style={[{width: 175, height: 175},styles.photo]} source={{ uri:'https://cdn.pixabay.com/photo/2013/07/12/16/27/man-150942_960_720.png'}} />
      </View>
      <View>
        <Text style={styles.title}>P K</Text>
        <Text style={styles.title}>I am born to run</Text>
        <Text style={styles.title}>{this.state.Age} years</Text>
        <Text style={styles.title}>{this.state.Gender}</Text>
        <Text style={styles.title}>{this.state.Height} cm</Text>
        <Text style={styles.title}>{this.state.Weight} kg</Text>
      </View>
    </View>
    <View>
      <Text style={styles.follow}>Diets Followed</Text>
      <View style={styles.forDe}>
        <De name='Keto'/>
        <De name='Paleo'/>
        <De name='Atkins'/>
      </View>
    </View>
    <View>
      <Text style={styles.follow}>Exercises Followed</Text>
      <View style={styles.forDe}>
        <De name='Running'/>
        <De name='Swimming'/>
        <De name='Cricket'/>
      </View>
    </View>
    <View style={styles.trainer}>
      <Text style={{textAlign:'center',fontWeight:'300' ,fontSize:20}}>Trainer H</Text>
      <Button 
        title='Recommend Diet To Me!!' 
        style={styles.button} 
        onPress={this.onPress}
        disabled={this.state.ai} />
      <ActivityIndicator size="small" color="#00ff00" animating={this.state.ai}/>
      <Text>{this.state.Diet}</Text>
    </View>
    </View>
  );
}
}

export default Profile;
