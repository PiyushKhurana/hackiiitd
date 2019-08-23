
import React ,{Component} from 'react';
import {StyleSheet ,TextInput,Text,Alert,ImageBackground,Button} from 'react-native';


const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        height: 45,
        width: 250,
        borderColor: '#191970',
        borderRadius: 14,
        margin: 20,
        textAlign: 'center'
      }
})

export default class LoginScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: ''
      };
    }
    onPress = () => {
      if (this.state.email === 'test@demo.com' && this.state.password === '123') {
        this.props.navigation.navigate('Home');
      } else {
        Alert.alert(
          'Wrong Credentials!!',
          'User Not Found'
          // {cancelable:false}
        );
      }
    };
    onChangeEmail = val => {
      this.setState({ email: val });
    };
    onChangePassword = val => {
      this.setState({ password: val });
    };
    render() {
      return (
        <ImageBackground
          source={{
            uri:
              'https://previews.123rf.com/images/karandaev/karandaev1412/karandaev141200111/34366272-dumbells-tape-measure-and-healthy-food-over-wooden-background-fitness-and-health-view-from-above.jpg'
          }}
          style={{
            width: '100%',
            height: '100%',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text>Details Screen</Text>
          <TextInput
            style={styles.input}
            placeholder="EmailID"
            autoCapitalize="none"
            textContentType="emailAddress"
            onChangeText={this.onChangeEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            autoCapitalize="none"
            textContentType="password"
            secureTextEntry={true}
            onChangeText={this.onChangePassword}
          />
          <Button title="LOGIN" onPress={this.onPress} />
        </ImageBackground>
      );
    }
  }