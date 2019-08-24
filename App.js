import React from 'react';
import { StyleSheet, Text, View, ScrollView ,ImageBackground,TextInput,Button,Alert} from 'react-native';
import CardFeed  from './CardFeed/cardfeed';
import Profile from './Profile/profile';
import { createAppContainer,createStackNavigator,createBottomTabNavigator} from 'react-navigation';

import LoginScreen from './Login/login';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
class App extends React.Component {
  render()
  {
  return (
    <ScrollView>
      <View style={styles.container}>
    <CardFeed 
      name='Ana Srivas' 
      category='Diet' 
      caption='Who said salads are not appetising??'
      src='https://www.tasteofhome.com/wp-content/uploads/2017/10/exps6498_MRR133247D07_30_5b_WEB-2.jpg'
      cal='152 calories'
      />  
    <CardFeed 
      name='Anushka Sharma' 
      category='Exercise' 
      caption='Planking is just for me:Practical And Simple!!'
      src='https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20pakkawit%20anantaya,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1535469198/trhm9s3q58xgibwhfde3.jpg'
      
      />  
    <CardFeed 
      name='Ana Srivas' 
      category='Diet' 
      caption='I never miss cheat days!!'
      src='https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2015/07/halloumi-burger.jpg'
      cal='295 calories'
      />  
    <CardFeed 
      name='Arnav Anand' 
      category='Exercice' 
      caption="Clap along if you are happy!"
      src='https://strongains.com/wp-content/uploads/2014/05/Copy-of-dumbbell-lunges.jpg'/>   
  </View>
    </ScrollView>
  );
  }
}


// class Login extends React.Component{
//   render()
//   {
//     return(
//       <LoginScreen />
//     );
//   }
// }
const TabNavigator = createBottomTabNavigator({
  Feed:App,
  Profile:Profile
})
const MainNavigator = createStackNavigator(
  {
    Home:  TabNavigator,
    // Feed: { screen: FeedScreen },
    Login:{screen:LoginScreen}
  },
  {
    initialRouteName: 'Login'
  }
);
TabNavigator.navigationOptions={
  title:'Home'
}
LoginScreen.navigationOptions={
  title:'Login'
}

export default  createAppContainer(MainNavigator);