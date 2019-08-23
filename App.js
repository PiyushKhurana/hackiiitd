import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CardFeed  from './CardFeed/cardfeed';

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
    <Text>Open up App.js to start working on your app!</Text>
    <CardFeed 
      name='Ana Srivas' 
      category='Diet' 
      caption='Who said salads are not appetising??'
      src='https://www.tasteofhome.com/wp-content/uploads/2017/10/exps6498_MRR133247D07_30_5b_WEB-2.jpg'/>  
    <CardFeed 
      name='Anushka Sharma' 
      category='Exercise' 
      caption='Planking is just for me:Practical And Simple!!'
      src='https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20pakkawit%20anantaya,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1535469198/trhm9s3q58xgibwhfde3.jpg'/>  
    <CardFeed 
      name='Ana Srivas' 
      category='Diet' 
      caption='I never undermine the importance of cheat days!!'
      src='http://static.samacharjagatlive.com/newscdn/resources/uploads/ALL-NEWS/17012018/1516180131.jpg'/>  
    <CardFeed 
      name='Arnav Anand' 
      category='Exercice' 
      caption="Don't let the smile fool you! Took 30 minutes to click the right pic!"
      src='https://strongains.com/wp-content/uploads/2014/05/Copy-of-dumbbell-lunges.jpg'/>  
  </View>
    </ScrollView>
  );
  }
}


export default App;