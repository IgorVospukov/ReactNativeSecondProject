import React,{useEffect, useState} from 'react';
import { View, StyleSheet, FlatList, Button,Text,Image} from 'react-native';
import axios from 'axios';


const Home = () => {
  const [data, setmyData] = useState([]);
  const [page, setmyPage] = useState(1);
  const getMovies = async () => {
     await axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10&_page=${page}`).then((response)=>{
     setmyData(data.concat(response.data));
    }).catch((e)=>console.log(e)); 
     
  }

  useEffect(()=>{
    getMovies();  
  },[page])

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Image style={styles.forImage}source={{uri: item.url}}  />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.title}>{item.id}</Text>     
    </View>
  );
const heandleMore = () => {
  setmyPage(page+1);  
}
  return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item,index)=>index.toString()}
        onEndReachedThreshold={0}
        onEndReached={heandleMore}
      />
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forImage :{
    width: 600,
    height: 600,
    borderWidth: 5,
    borderColor: 'red'
  }
});

export default Home;
