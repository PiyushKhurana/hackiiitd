import React ,{Component} from 'react';
import {StyleSheet,View,Image,Text} from 'react-native';
import LoginForm from './loginForm';
export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/food.jpeg')} />
                </View>
                <Text style={styles.title}>HealthyUs</Text>
                <View style={styles.formContainer}>
                <LoginForm />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#00BFFF'
        
    },
    logoContainer:{
        alignItems:'center',
        flexGrow:1,
        justifyContent:'center'
    },
    logo:{
        width:100,
        height:100
    },
    title:{
        color:'#FFF',
        marginTop:10,
        width:160,
        textAlign:'center',
        opacity:0.9
    }
})