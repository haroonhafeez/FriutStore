import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Catogory from './component/Catogory';
import ItemList from './component/Itemlist';
import Item from './component/Item';
import Welcome from './component/Welcome';
import Signup from './component/Signup';
import Cart from './component/Cart';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
export default function App() {
  const Tab = createBottomTabNavigator();
  const stack=createNativeStackNavigator()
  const Logo=()=>{
  return(
    <View style={{width:'100%',height:'100%',backgroundColor:'#FFF'}} ></View>
  )
  }
  const ListHead=()=>{
    return(
      <View style={{width:'100%',height:'100%',backgroundColor:'red'}} >

      </View>
    )
  }
   const Bottombar=()=>{
    return(
  
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle:{
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:15,
        color:'#2D0C57',
      }
  }}
    >
      <Tab.Screen name="Catogory" component={Catogory}  />
      <Tab.Screen name="ItemList" component={ItemList} />
      <Tab.Screen name="Item" component={Item} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  
    )
   }
    

  return (
    <>
      
  <NavigationContainer>
    <stack.Navigator initialRouteName='Welcome' >
      <stack.Screen
      name='onlinestore' component={Welcome} options={{headerTitle:(props)=><Logo {...props} />}}/>
      <stack.Screen  name='Signup' component={Signup} options={{headerTitle:(props)=><Logo {...props} />}} />
      <stack.Screen  name='Catogory' component={Bottombar} options={{headerTitle:(props)=><Logo {...props} />}} />
      <stack.Screen  name='ItemList' component={Bottombar} options={{headerTitle:(props)=><ListHead {...props} />}} />
      <stack.Screen  name='Item' component={Bottombar} options={{headerTitle:(props)=><Logo {...props} />}} />
      <stack.Screen  name='Cart' component={Bottombar} options={{headerTitle:(props)=><Logo {...props} />}} />
    </stack.Navigator >
    
  </NavigationContainer>
  
  </>
  );
}
