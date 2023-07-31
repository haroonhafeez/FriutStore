import React from 'react'
import { SliderBox } from "react-native-image-slider-box";
import { useEffect } from 'react'
import {Image,Text,TextInput, View, StyleSheet, ListRenderItem,Pressable } from 'react-native'
import { Tabs,MaterialTabBar,useFocusedTab } from 'react-native-collapsible-tab-view'
import { useState } from "react";
import { collection, doc, getDocs,query,where,deleteDoc} from "firebase/firestore";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { initializeApp } from 'firebase/app';
import {firebaseConfig } from "../Config";
import NumericInput from 'react-native-numeric-input'
import Item from './Item';
import { log } from 'react-native-reanimated';
const HEADER_HEIGHT = 200
const app=initializeApp(firebaseConfig)
 const ItemList = ({route,navigation}) => {
    const {name,image}=route.params
     const [tablename,settablename]=useState(name)
     const CrousalData=[
        require('../assets/image0.jpg'),
        require('../assets/image1.jpg'),
        require('../assets/image2.jpeg'),
    ] 
const[friutData,setFriutData]=useState()
const[vegetableData,setvegetableData]=useState()
const[SweetsData,setSweetsData]=useState()
const[BreadData,setBreadData]=useState()
const[orderData,setOrderData]=useState(null)

useEffect(()=>{
    const dbRef = ref(getDatabase(app));
    get(child(dbRef, 'Fruits')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setFriutData(snapshot.val())
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
},[])
useEffect(()=>{
    const dbRef = ref(getDatabase(app));
    get(child(dbRef, 'Vegetables')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setvegetableData(snapshot.val())
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
},[])      
useEffect(()=>{
    const dbRef = ref(getDatabase(app));
    get(child(dbRef, 'Bread')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setBreadData(snapshot.val())
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
},[])
function writeUserData() {
  const db = getDatabase(app);
  set(ref(db, 'orderDetail'), {
    orderData
  }).then(()=>{
    setcountCart(true)
    navigation.navigate('Cart')
  });
}
useEffect(()=>{
    const dbRef = ref(getDatabase(app));
    get(child(dbRef, 'Sweets')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setSweetsData(snapshot.val())
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
},[])   
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
  const CartData=(name,price,quantity)=>{
    console.log(orderData)
    console.log(name)
    console.log(price)
    console.log(quantity)
    let initialize=[{
      itemName:name,
      itemPrice:price,
      itemQuantity:quantity
     }]
    if(orderData===null)
    {
      setOrderData(initialize)
    }
    else 
     { setOrderData(current=>[...current, {itemName:name,itemPrice:price,itemQuantity:quantity}])
      console.log("moreData",orderData)
     }
     
  } 
console.log(orderData)



  const renderItem =(({item, index }) => {
    return (
        <Pressable onPress={()=>navigation.navigate('Item',{name:item.name,disc:item.Description,image:item.image,origen:item.origen,price:item.price,type:item.type})} style={{ height:150,width:'100%',justifyContent:'center',flexDirection:'row',alignItems:'center'}}>      
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
        <View style={{alignItems:'center',flexDirection:'row'}}>
        <NumericInput 
         totalWidth={80} 
         totalHeight={35} 
         onChange={value => setCount(value)} />
          <Pressable onPress={()=>CartData (item.name, item.price,count)} style={{backgroundColor:'#0BCE83',marginStart:10,height:32,width:'30%',justifyContent:'center',alignItems:'center',borderRadius:3}} >
             <Image style={{height:12,width:12}} source={require('../assets/shopping-cart.png')} />
         </Pressable>
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
        {
          countCart===false&&<Pressable onPress={writeUserData}  style={{flexDirection:'row', backgroundColor:'#0BCE83',margin:5,marginStart:30,height:42,width:'85%',justifyContent:'center',alignItems:'center',borderRadius:3}} >
             <Text style={{color:'#fff',fontSize:15}}>Submit Order</Text>
             <Image style={{height:15,width:15}} source={require('../assets/shopping-cart.png')} />   
         </Pressable>
        }
      </Tabs.Tab>
      <Tabs.Tab name="Vegetables">
      <Tabs.FlatList
          data={vegetableData}
          renderItem={renderItem}
        />
        {
          countCart===false&&<Pressable onPress={writeUserData}  style={{flexDirection:'row', backgroundColor:'#0BCE83',margin:5,marginStart:30,height:42,width:'85%',justifyContent:'center',alignItems:'center',borderRadius:3}} >
             <Text style={{color:'#fff',fontSize:15}}>Submit Order</Text>
             <Image style={{height:15,width:15}} source={require('../assets/shopping-cart.png')} />   
         </Pressable>
        }
      </Tabs.Tab>
      <Tabs.Tab name="Sweets">
      <Tabs.FlatList
          data={SweetsData}
          renderItem={renderItem}
        />
        {
          countCart===false&&<Pressable onPress={writeUserData}  style={{flexDirection:'row', backgroundColor:'#0BCE83',margin:5,marginStart:30,height:42,width:'85%',justifyContent:'center',alignItems:'center',borderRadius:3}} >
             <Text style={{color:'#fff',fontSize:15}}>Submit Order</Text>
             <Image style={{height:15,width:15}} source={require('../assets/shopping-cart.png')} />   
         </Pressable>
        }
      </Tabs.Tab>
      <Tabs.Tab name="items">
        <Tabs.FlatList
          data={friutData}
          renderItem={renderItem}
        />
        {
          countCart===false&&<Pressable onPress={writeUserData}  style={{flexDirection:'row', backgroundColor:'#0BCE83',margin:5,marginStart:30,height:42,width:'85%',justifyContent:'center',alignItems:'center',borderRadius:3}} >
             <Text style={{color:'#fff',fontSize:15}}>Submit Order</Text>
             <Image style={{height:15,width:15}} source={require('../assets/shopping-cart.png')} />   
         </Pressable>
        }
      </Tabs.Tab>
      <Tabs.Tab name="Drinks">
      <Tabs.FlatList
          data={friutData}
          renderItem={renderItem}
        />
        {
          countCart===false&&<Pressable onPress={writeUserData}  style={{flexDirection:'row', backgroundColor:'#0BCE83',margin:5,marginStart:30,height:42,width:'85%',justifyContent:'center',alignItems:'center',borderRadius:3}} >
             <Text style={{color:'#fff',fontSize:15}}>Submit Order</Text>
             <Image style={{height:15,width:15}} source={require('../assets/shopping-cart.png')} />   
         </Pressable>
        }
      </Tabs.Tab>
      <Tabs.Tab name="Bread">
      <Tabs.FlatList
          data={BreadData}
          renderItem={renderItem}
        />
        {
          countCart===false&&<Pressable onPress={writeUserData}  style={{flexDirection:'row', backgroundColor:'#0BCE83',margin:5,marginStart:30,height:42,width:'85%',justifyContent:'center',alignItems:'center',borderRadius:3}} >
             <Text style={{color:'#fff',fontSize:15}}>Submit Order</Text>
             <Image style={{height:15,width:15}} source={require('../assets/shopping-cart.png')} />   
         </Pressable>
        }
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
