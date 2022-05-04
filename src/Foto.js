import React, { useEffect ,useState} from 'react';
import { View, TextAntDesign, StyleSheet,Button, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {launchCameraAsync} from 'expo-image-picker';


const Foto = () => {
  const [myFoto, setFoto]=useState();

  const takeFotoHandler = async () => {
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16,9],
      quality: 0.5,
    });
    setFoto(image.uri);
  }
  let imagePrewiev = <AntDesign style={styles.forIcon} name="mobile1" size={84} color="pink" />;
  if (myFoto)  {
    imagePrewiev = <Image style={styles.forMyFoto} source={{uri:myFoto}} />;
  }

  return (
    <View style={styles.forCommon}>
        <View style={styles.forWrapIcon}>
          <View style={styles.forBorder1}>{imagePrewiev}</View>
        </View>
        <View style={styles.forWrapButton}>
          <Button style={styles.forButton1} title="Take a photo" color="pink" onPress={takeFotoHandler} ></Button>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  forCommon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forWrapButton:{
    height:"30%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  forWrapIcon:{
    width:"100%",
    height:"70%",
    alignItems: 'center',
    justifyContent: 'center',  
  },
  forIcon: {
    
    // alignSelf: 'center',
    // justifySelf: 'center',
  },
  forButton1: {

    color:"pink"

  },
  forBorder1: {
    // flex: 1,
    width: 200,
    height: 200,
    borderRadius:100,
    borderColor:"pink",
    borderWidth:5,
    // alignSelf: 'center',
    // justifySelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forMyFoto: {
    width:100,
    height: 100,
  },

});

export default Foto;