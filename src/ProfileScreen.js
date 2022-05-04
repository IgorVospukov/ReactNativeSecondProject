import React from 'react';
import { View,Text,StyleSheet, Button, Alert, Pressable} from 'react-native';


const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.forButtons}>
      <Pressable  style={styles.forPressable} onPress={()=>navigation.navigate('Page1')}>
      <Text>Page1</Text>
      </Pressable>
      <Pressable  style={styles.forPressable} onPress={()=>navigation.navigate('Page2')}>
      <Text>Page2</Text>
      </Pressable>     
    </View>
  );
};

const styles = StyleSheet.create({
  forButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center"
  },
  forPressable: {
    borderColor:"grey",
    borderRadius:5,
    backgroundColor:'pink',
    borderWidth: 2,
    width: 105,
    height: 45,
    justifyContent:'center',
    alignItems:'center',      
  }

});
export default ProfileScreen;