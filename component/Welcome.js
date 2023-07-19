import { View,Text,StyleSheet,Image,Pressable } from "react-native";
const Welcome=()=>{
return(
    <View style={{backgroundColor:'#e2efe4'}} > 
        <View style={styles.bgimg} ><Image style={styles.img} source={require('../assets/background.jpg')} /></View>
        <View style={styles.btmView} >
         <Image style={styles.logo} source={require('../assets/icon.png')} /> 
         <Text style={[styles.text,{fontSize:36,marginTop:20,fontWeight:'800'}]} >Non-Contact</Text>
         <Text style={[styles.text,{fontSize:36,fontWeight:'800'}]}>Deliveries</Text>
         <Text style={[styles.text,{fontSize:13,marginTop:15}]} >When placing an order, select the option </Text>
         <Text style={[styles.text,{fontSize:13}]}>“Contactless delivery”and the courier will leave</Text>
         <Text style={[styles.text,{fontSize:13}]} >your order at the door.</Text>
        <Pressable style={[styles.btn,{backgroundColor:'#0BCE83'}]} >
            <Text style={{color:'#fff',fontWeight:'bold'}} >ORDER NOW</Text>
        </Pressable>
        <Pressable style={[styles.btn,{marginTop:10}]} >
            <Text style={{color:'#9586A8',fontWeight:'bold',textDecorationLine:'underline'}} >Dismiss</Text>
        </Pressable>
        </View>
    </View>
)
}
const styles=StyleSheet.create({
   
    bgimg:{
    height:'35%',
    width:'100%',
    },
   btmView:{
    backgroundColor:'#f6f5f5',
    height:'65%',
    width:'100%',
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
   },
   img:{
    height:'100%',
    width:'100%',  
   },
   logo:{
    width:100,
    height:100
   },
   text:{
    color:'#2D0C57',

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
export default Welcome;
