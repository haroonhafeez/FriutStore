import React from 'react'
import { SliderBox } from "react-native-image-slider-box";
import { useEffect } from 'react'
import {Image,Text,TextInput, View, StyleSheet, ListRenderItem,Pressable } from 'react-native'
import { Tabs,MaterialTabBar,useFocusedTab } from 'react-native-collapsible-tab-view'
import { useState } from "react";
import { collection, doc, getDocs,query,where,deleteDoc} from "firebase/firestore";
import { getDatabase, ref, child, get } from "firebase/database";
import { initializeApp } from 'firebase/app';
import {firebaseConfig } from "../Config";
const HEADER_HEIGHT = 200
const app=initializeApp(firebaseConfig)
 const ItemList = ({route,navigation}) => {
    const {id,name,image}=route.params
     const [tablename,settablename]=useState(name)
     const CrousalData=[
        require('../assets/image0.jpg'),
        require('../assets/image1.jpg'),
        require('../assets/image2.jpeg'),
    ] 
const[friutData,setFriutData]=useState()
    useEffect(()=>{
    const dbRef = ref(getDatabase(app));
    get(child(dbRef, tablename)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setFriutData(snapshot.val())
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
},[tablename])
      
    
    const [countCart,setcountCart]=useState(true)
    const [count,setCount]=useState(1)  
    const tabBar = props => (
        <MaterialTabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'white' }}
          style={{ height:40 }}
          activeColor = "#0BCE83"
          inactiveColor = "#333"
          labelStyle = {
            {
                fontSize: 7
            }
        }
        />
      );
    
    const Header = () => {
  
    return <View  >
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
    <Text style={{ margin: 20, marginBottom: 10, color: '#2D0C57', fontWeight: '900', fontSize: 30 }}>{tablename}</Text>             
    <TextInput style={{ padding: 10, paddingStart: 30, borderRadius: 20, marginLeft: 16, marginBottom: 10, height: 40, width: '90%', borderColor: '#2D0C57', borderWidth: 2 }} placeholder='Search' />
     </View>
    }





  const renderItem =(({item, index }) => {
    return (
        <Pressable onPress={()=>navigation.navigate('Item')} style={{ height:150,width:'100%',justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                
        <Image style={{width:'40%',height:'80%',borderRadius:7}} source={{uri:item.image}} />  
        <View style={{width:'40%',marginLeft:25}}>
         <Text style={{marginTop:10,fontSize:18,color:'#2D0C57',fontWeight:'800'}} >{item.name}</Text>
         <Text style={styles.text}>{item.price}<Text style={{fontSize:14,color:'#9586A8',fontWeight:'400'}} >{item.type}</Text></Text>
         { 
         countCart?
         <View style={{height:'50%',width:'100%',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}} >
          <Pressable style={{height:25,width:'30%',borderColor:'#333',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:3}} >
             <Image style={{height:12,width:12}} source={require('../assets/Vector.png')} />
         </Pressable>
         <Pressable onPress={()=>setcountCart(false)} style={{backgroundColor:'#0BCE83',height:25,width:'30%',justifyContent:'center',alignItems:'center',borderRadius:3}} >
             <Image style={{height:12,width:12}} source={require('../assets/shopping-cart.png')} />
         </Pressable>
         </View>
        :
        <View style={{alignItems:'center'}}>
         <View style={{height:'30%',width:'100%',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}} >
        <Pressable onPress={()=>setCount(count+1)}  style={{justifyContent:'center',alignItems:'center'}} >
            <Image style={{height:15,width:15}} source={require('../assets/plus.png')} />
        </Pressable>
        <Text style={{fontSize:15}} >{count}</Text>
        <Pressable onPress={()=>setCount(count-1)} style={{ paddingTop:13,justifyContent:'center',alignItems:'center'}} >
            <Image style={{height:15,width:15}} source={require('../assets/minus.png')} />
        </Pressable>
        </View>
        <View>
        <Pressable  style={{backgroundColor:'#0BCE83',height:25,width:50,justifyContent:'center',alignItems:'center',borderRadius:3}} >
             <Image style={{height:12,width:12}} source={require('../assets/shopping-cart.png')} />
        </Pressable>
        </View>
        </View>
          }                
        </View>
     </Pressable>
)
    })
const onTabChange=(props)=>{
    settablename(props.tabName)
    console.log('data:',tablename)
    console.log('haroon')
}
  return (
    <Tabs.Container
      renderHeader={Header}
      headerHeight={HEADER_HEIGHT}
      renderTabBar={tabBar}
      initialTabName={name}
      onTabChange={onTabChange}
      // optional
    >
      <Tabs.Tab name="Fruits"  >
        <Tabs.FlatList
          data={friutData}
          renderItem={renderItem}
        />
      </Tabs.Tab>
      <Tabs.Tab name="Vegetables">
      <Tabs.FlatList
          data={friutData}
          renderItem={renderItem}
        />
      </Tabs.Tab>
      <Tabs.Tab name="Sweets">
      <Tabs.FlatList
          data={friutData}
          renderItem={renderItem}
        />
      </Tabs.Tab>
      <Tabs.Tab name="items">
        <Tabs.FlatList
          data={friutData}
          renderItem={renderItem}
        />
      </Tabs.Tab>
      <Tabs.Tab name="Drinks">
      <Tabs.FlatList
          data={friutData}
          renderItem={renderItem}
        />
      </Tabs.Tab>
      <Tabs.Tab name="Bread">
      <Tabs.FlatList
          data={friutData}
          renderItem={renderItem}
        />
      </Tabs.Tab>
    </Tabs.Container>
  )
}

const styles = StyleSheet.create({
  box: {
    height: 250,
    width: '100%',
  },
  boxA: {
    backgroundColor: 'white',
  },
  boxB: {
    backgroundColor: '#D8D8D8',
  },
  header: {
    height: HEADER_HEIGHT,
    width: '100%',
    backgroundColor: '#2196f3',
  },
})

export default ItemList;

