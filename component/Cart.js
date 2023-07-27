import { useState } from "react";
import { FlatList } from "react-native";
import { ScrollView, StyleSheet, TextInput } from "react-native";
import { Image, Text, View,Pressable } from "react-native";

const Cart=()=>{
    let count=0
    const Data=[
        {
            name:"Boston Lettuce",
            qty:5,
            price:1.10
        },
        {
            
            name:"Purple Cauliflower",
            qty:2,
            price:1.85
        },
    ]
return(
    <ScrollView>
    <View style={{margin:10,flex:1,justifyContent:'center',alignItems:'center'}} >
      <View>
       <View style={{marginTop:30,flexDirection:'row',height:40,justifyContent:'space-between',alignItems:'center'}} >
        <Text style={{fontSize:18,color:'#2D0C57',fontWeight:'800'}} >Consignee Name</Text>
        <Text style={{fontSize:15,color:'#7203FF',fontWeight:'bold',margin:5}} >CHANGE</Text>
       </View>
       <TextInput
       style={{height:32,width:330,borderColor:'#2D0C57',borderWidth:1,borderRadius:2,padding:10}}
       />       
       <View style={{marginTop:10,flexDirection:'row',height:40,justifyContent:'space-between',alignItems:'center'}} >
        <Text style={{fontSize:18,color:'#2D0C57',fontWeight:'800'}} >Contact Number</Text>
        <Text style={{fontSize:15,color:'#7203FF',fontWeight:'bold',margin:5}} >CHANGE</Text>
       </View>
       <Text style={{fontSize:16,color:'#9586A8',fontWeight:'bold'}} >03135443970</Text>
       <View style={{marginTop:20,flexDirection:'row',height:40,justifyContent:'space-between',alignItems:'center'}} >
        <Text style={{fontSize:18,color:'#2D0C57',fontWeight:'800'}} >Delivery address</Text>
        <Text style={{fontSize:15,color:'#7203FF',fontWeight:'bold'}} >CHANGE</Text>
       </View>
       <View style={{marginTop:20,flexDirection:'row'}} >
            <View style={{width:80,height:100,justifyContent:'center',alignItems:'center'}}>
            <Image style={{height:35,width:35}} source={require('../assets/home.png')}/>
            </View>
            <TextInput
             multiline={true}
             numberOfLines={4}
             style={{height:100,width:260,borderColor:'#2D0C57',borderWidth:1,borderRadius:5,padding:10}}
            />
        </View>
        <View style={{marginTop:30,flexDirection:'row',height:40,justifyContent:'space-between',alignItems:'center'}} >
        <Text style={{fontSize:18,color:'#2D0C57',fontWeight:'800'}} >Delivery options</Text>
        <Text style={{fontSize:15,color:'#7203FF',fontWeight:'bold'}} >CHANGE</Text>
       </View>
       <Pressable style={{margin:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:30}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',height:30,alignItems:'center'}}>
            <Image style={{height:20,width:20}} source={require('../assets/walking.png')}/>
            <Text style={{color:'#9586A8',marginLeft:15}}>I’ll pick it up myself</Text>
        </View>
        <Image style={{height:20,width:20,marginTop:5,marginRight:10}} source={require('../assets/check.png')}/>
       </Pressable>
       <Pressable style={{margin:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:30}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',height:30,alignItems:'center'}}>
            <Image style={{height:20,width:20}} source={require('../assets/bike.png')}/>
            <Text style={{color:'#9586A8',marginLeft:15}}>By courier</Text>
        </View>
        <Image style={{height:20,width:20,marginTop:5,marginRight:10}} source={require('../assets/check.png')}/>
       </Pressable>
       <Pressable style={{margin:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:30}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',height:30,alignItems:'center'}}>
            <Image style={{height:20,width:20}} source={require('../assets/drone.png')}/>
            <Text style={{color:'#9586A8',marginLeft:15}}>By Drone</Text>
        </View>
        <Image style={{height:20,width:20,marginTop:5,marginRight:10}} source={require('../assets/check.png')}/>
       </Pressable>
       <View style={{borderColor:'#2D0C57',borderWidth:1,margin:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-around',borderBottomColor:'#2D0C57',borderBottomWidth:1}}>
            <Text style={styles.textHead}>Item Name</Text>
            <Text style={styles.textHead}>Qunatity</Text>
            <Text style={styles.textHead}>Unit price</Text>
        </View>
        <View>
         {Data.map((item)=>{
            count=count+item.price 
            return(             
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <Text style={[styles.textHead,{fontWeight:'normal'}]}>{item.name}</Text>
                <Text style={[styles.textHead,{fontWeight:'normal'}]}>{item.qty}</Text>
                <Text style={[styles.textHead,{fontWeight:'normal'}]}>{item.price}</Text>
            </View> 
            )
         })}
         </View>
        <View style={{flexDirection:'row',justifyContent:'space-around',borderTopColor:'#2D0C57',borderTopWidth:1}} >
            <Text style={styles.textHead}>Total</Text>
            <Text style={styles.textHead}>{count}</Text>
        </View>
       </View>
       </View>
       <Pressable onPress={()=>alert("Your Order has been placed seccesfully")} style={[styles.btn,{backgroundColor:'#0BCE83'}]} >
            <Text style={{color:'#fff',fontWeight:'bold'}} >ORDER NOW</Text>
        </Pressable>
    </View>
    </ScrollView>
)
}
const styles=StyleSheet.create({
   textHead:{
    fontSize:18,
    color:'#2D0C57',
    fontWeight:'800'    
   },
   btn:{
    width:'85%',
    height:45,
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
    borderRadius:5,
   },
})
export default Cart;
