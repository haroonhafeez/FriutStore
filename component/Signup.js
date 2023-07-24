import { Image, Pressable, TextInput } from "react-native";
import { Text, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { useState,useRef } from "react";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase/compat/app";
import {firebaseConfig } from "../Config";
const Signup=({navigation})=>{
   const[phoneNumber,setPhoneNumber]=useState('')
   const[Code,setCode]=useState('')
   const[VerificationID,setVerificationID]=useState(null)
   const recaptchaVerifier=useRef(null)
   const [isRecieved,setIsRecieved]=useState(false)
   const CrousalData=[
        require('../assets/otp1.jpg'),
        require('../assets/otp2.jpg'),
        require('../assets/otp3.jpg'),
    ]
    const sendVerification=()=>{
        const phoneProvider=new firebase.auth.PhoneAuthProvider()
        phoneProvider
        .verifyPhoneNumber(phoneNumber,recaptchaVerifier.current)
        .then(setVerificationID)
        setPhoneNumber('')
        setIsRecieved(true)
    } 
    const CofirmCode=()=>{
        const credential=firebase.auth.PhoneAuthProvider.credential(
            VerificationID,
            Code
        )
        firebase.auth().signInWithCredential(credential)
        .then(
            setCode('')
            ).catch((error)=>{

            })
            alert('Login Secccesfully')
    }

    return(
        
        
        <View>
        <Pressable onPress={()=>navigation.navigate('Catogory')} style={{height:50,width:'100%',justifyContent:'center'}} ><Text  style={{position:'absolute',right:40,top:10,textDecorationLine:'underline'}}>Skip Login</Text></Pressable>        
        <View style={{height:'60%'}}>
        <SliderBox   
        images={CrousalData}
        dotColor="green"
        inactiveDotColor="black"
        ImageComponentStyle={{height:'96%', borderRadius: 15, width: '90%'}}
        autoplay
        circleLoop
        sliderBoxHeight={'100%'}
        autoplayInterval={3000}
        resizeMethod='resize'
        resizeMode='cover'
        dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 15,
            marginHorizontal: 5,
            padding: 0,
            margin:5
          }}
        />
        </View>
        <FirebaseRecaptchaVerifierModal
        style={{justifyContent:'center',alignItems:'center'}}
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        />
        {isRecieved===false?
        <View style={{height:300,width:'100%',alignItems:'center'}} >
        <Text style={{marginTop:5,fontWeight:'bold',color:'#2D0C57',fontSize:14}} >Enter your mobile number to Signup/login</Text>
        <TextInput autoComplete='tel' keyboardType='phone-pad' onChangeText={setPhoneNumber} 
        placeholder="+92**********"
        style={{ padding:10,
         marginTop:15,
         height:40,
         width:'85%',
         borderColor:'#2D0C57',
         borderWidth:1,
         borderRadius:3,
         color:'#2D0C57',
         textAlign:'center',
         fontWeight:'900',
         fontSize:16, 
         }} />
        <Pressable onPress={sendVerification} style={{marginTop:15, height:50,width:'85%',backgroundColor:'#0BCE83',borderRadius:3,justifyContent:'center',alignItems:'center'}} >
         <Text style={{color:'#FFF',fontWeight:'bold',fontSize:20}}>GET OTP </Text>
        </Pressable>
        </View>
        :
        <View style={{height:300,width:'100%',alignItems:'center'}} >   
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',height:40}} >
        <Text style={{fontWeight:'bold',color:'#2D0C57',fontSize:14}} >we have sent an OTP "*******970."</Text>
        <Pressable onPress={()=>setIsRecieved(false)}style={{marginTop:10}}>
         <Text style={{color:'#0BCE83',fontWeight:'bold',fontSize:15}}>Change </Text>
        </Pressable>
        </View>
        <View style={{flexDirection:'row',width:'100%',justifyContent:'center'}}>
        <TextInput  keyboardType='number-pad' onChangeText={setCode} style={{color:'#2D0C57',
         textAlign:'center',
         fontWeight:'900',
         fontSize:16,  padding:10, marginTop:5,height:40,width:'40%',borderColor:'#2D0C57',borderWidth:1,borderRadius:3}} />
        </View>
        <Pressable onPress={CofirmCode} style={{marginTop:15, height:50,width:'85%',backgroundColor:'#0BCE83',borderRadius:3,justifyContent:'center',alignItems:'center'}} >
         <Text style={{color:'#FFF',fontWeight:'bold',fontSize:20}}>Verify </Text>
        </Pressable>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:40}}>
        <Text style={{marginTop:0}}> Didn't get OTP press </Text>
        <Pressable onPress={sendVerification} style={{justifyContent:'center',alignItems:'center',height:40}} >
            <Text  style={{textDecorationLine:'underline',fontWeight:'bold',color:'#0BCE83'}}>Resend</Text>
        </Pressable>        
        </View>
        </View>
        }
        </View>
    
    )
}
export default Signup;