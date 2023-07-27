import * as React from 'react';
import {ScrollView, Dimensions, Text, TextInput, View,StyleSheet,FlatList, ImageBackground,Image, Pressable } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import { BlurView } from 'expo-blur';
import ItemList from './Itemlist';
const Catogory=({navigation})=> {
   
    const CrousalData=[
        require('../assets/image0.jpg'),
        require('../assets/image1.jpg'),
        require('../assets/image2.jpeg'),
    ] 
    const [items, setItems] = React.useState([
        { id:0,name: 'Fruits', image: require('../assets/Media(1).png')},
        { id:1,name: 'Bread', image:require('../assets/Media(2).png') },
        { id:2,name: 'Sweets', image:require('../assets/Media(3).png') },
        { id:3, name: 'items', image: require('../assets/Media(4).png')},
        { id:4,name: 'Drinks', image:require('../assets/Media(5).png') },
        { id:5,name: 'Vegetables', image:require('../assets/Media(6).png') },
      ]);
      
   return (
        <ScrollView>
        <View style={{ marginTop:50}}>
         <TextInput style={{padding:10,paddingStart:30,borderRadius:20,marginLeft:16,marginBottom:10,height:40,width:'90%',borderColor:'#2D0C57',borderWidth:2}} placeholder='Search'/>   
        <SliderBox   
        images={CrousalData}
        dotColor="green"
        inactiveDotColor="black"
        ImageComponentStyle={{borderRadius: 15, width: '90%', marginTop: 5}}
        autoplay
        circleLoop
        autoplayInterval={3000}
        dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 15,
            marginHorizontal: 5,
            padding: 0,
            margin:5
          }}
        />
        <Text style={{margin:20,marginBottom:10,color:'#2D0C57',fontWeight:'900'}}>Shop By Category</Text>
        <View style={{flexDirection:'row',margin:20,marginTop:0 ,justifyContent:'space-between'}}>
            <Text style={{color:'#2D0C57',fontWeight:'500'}} >Our handpicked finest</Text>
            <Text style={{color:'#2D0C57',textDecorationLine:'underline',fontWeight:'500'}}>View All</Text>
        </View>
        
        </View>
        <View style={styles.container}>
        <FlatList
        style={{width:'100%'}}
        data={items}
        
        renderItem={({ item }) => (
            <View style={{ flex:1, flexDirection: 'column', margin: 10,borderRadius:5 }}>
              <Pressable onPress={()=>navigation.navigate('ItemList',{id:item.id,name:item.name,image:item.image})}>
              <ImageBackground  style={styles.imageThumbnail} source={item.image} >
              <BlurView intensity={80} tint='light' style={{width:150}} >
                <View style={{width:'100%',height:40,alignItems:'center',justifyContent:'center'}} >               
                <Text style={{color:'#2D0C57',fontWeight:'900',marginBottom:5}} >
                    {item.name}
                </Text>
                </View>
                </BlurView>
                </ImageBackground>
                </Pressable>
            </View>
          )}
        numColumns={2}
        keyExtractor={({item,index})=>index}
        />
        </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
       flex:1, 
      justifyContent: 'center',
      backgroundColor: 'white',
      margin:12,
      borderRadius:5,
    },
    imageThumbnail: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: 200,
      borderRadius:5,
    },
  });
  
export default Catogory;