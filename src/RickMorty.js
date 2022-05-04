// import React,{useEffect, useState} from 'react';
// import { View, StyleSheet, FlatList } from 'react-native';
// import axios from 'axios';



// const RickMorty = () => {
//  const [mydata, setmyData] = useState();
//   const getMovies = async () => {
//     return data = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos').then(console.log(data)).catch((e)=>console.log(e));
//   }
//   useEffect(()=>{
//     setmyData([...mydata,...data]);
//   },[data])
//   const renderItem = ({item}) => (
//     <View style={styles.item}>
//       <Text style={styles.title}>{item.title}</Text>
//     </View>
//   );

//   return (
//     <View>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });

// export default RickMorty;