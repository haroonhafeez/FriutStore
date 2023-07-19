import { useState } from "react";
import { Image, Pressable, TextInput } from "react-native";
import { Text, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

const Signup=()=>{
const [isRecieved,setIsRecieved]=useState(false)
    const CrousalData=[
        require('../assets/otp1.jpg'),
        require('../assets/otp2.jpg'),
        require('../assets/otp3.jpg'),
    ]
    return(
        
        
        <View>
        <Pressable style={{height:50,width:'100%',justifyContent:'center'}} ><Text  style={{position:'absolute',right:40,top:30,textDecorationLine:'underline'}}>Skip Login</Text></Pressable>        
        <SliderBox   
        images={CrousalData}
        dotColor="green"
        inactiveDotColor="black"
        ImageComponentStyle={{borderRadius: 15, width: '90%', marginTop: 5}}
        autoplay
        circleLoop
        sliderBoxHeight={500}
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
        {isRecieved===false?
        <View style={{height:300,width:'100%',alignItems:'center'}} >
        <Text style={{marginTop:15,fontWeight:'bold',color:'#2D0C57',fontSize:14}} >Enter your mobile number to Signup/login</Text>
        <TextInput style={{marginTop:15,height:50,width:'85%',borderColor:'#2D0C57',borderWidth:1,borderRadius:3}} />
        <Pressable onPress={()=>setIsRecieved(true)} style={{marginTop:15, height:50,width:'85%',backgroundColor:'#0BCE83',borderRadius:3,justifyContent:'center',alignItems:'center'}} >
         <Text style={{color:'#FFF',fontWeight:'bold',fontSize:20}}>GET OTP </Text>
        </Pressable>
        </View>
        :
        <View style={{height:300,width:'100%',alignItems:'center'}} >   
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',height:40}} >
        <Text style={{marginTop:15,fontWeight:'bold',color:'#2D0C57',fontSize:14}} >we have sent an OTP "*******970."</Text>
        <Pressable onPress={()=>setIsRecieved(false)}style={{marginTop:10}}>
         <Text style={{color:'#0BCE83',fontWeight:'bold',fontSize:15}}>Change </Text>
        </Pressable>
        </View>
        <View style={{flexDirection:'row',width:'100%',justifyContent:'center'}}>
        <TextInput style={{ marginTop:15,height:50,width:'13%',borderColor:'#2D0C57',borderWidth:1,borderRadius:3}} />
        <TextInput style={{marginStart:10,marginTop:15,height:50,width:'13%',borderColor:'#2D0C57',borderWidth:1,borderRadius:3}} />
        <TextInput style={{marginStart:10,marginTop:15,height:50,width:'13%',borderColor:'#2D0C57',borderWidth:1,borderRadius:3}} />
        <TextInput style={{marginStart:10,marginTop:15,height:50,width:'13%',borderColor:'#2D0C57',borderWidth:1,borderRadius:3}} />
        </View>
        <Pressable style={{marginTop:15, height:50,width:'85%',backgroundColor:'#0BCE83',borderRadius:3,justifyContent:'center',alignItems:'center'}} >
         <Text style={{color:'#FFF',fontWeight:'bold',fontSize:20}}>Verify </Text>
        </Pressable>
        <Text style={{margin:10}}> Didn't get it resend otp in 19 sec </Text>
        </View>
        }
        </View>
    
    )
}
export default Signup;