import React ,{Component} from 'react';
import {StyleSheet,View,TextInput,Text,StatusBar} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class LoginForm extends Component {
    render(){
        return (
            <View style={styles.container}>
            <StatusBar barStyle="light-content" />
                <TextInput 
                    placeholder="username or email"
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    
                />
                <TextInput 
                    placeholder="password"
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.input}

                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container:{
        padding:20
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.2)',
        marginBottom:20,
        color:'#FFF',
        paddingHorizontal:10
    },
    buttonContainer:{
        backgroundColor:'#2980b9',
        paddingVertical:15
    },
    buttonText:{
        textAlign:'center',
        color:'#FFFFFF',
        fontWeight:'700'
    }

})
