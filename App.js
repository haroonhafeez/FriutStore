import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Catogory from './component/Catogory';
import Itemlist from './component/Itemlist';
import Item from './component/Item';
import Welcome from './component/Welcome';
import Signup from './component/Signup';
import Cart from './component/Cart';
export default function App() {
  const stack=createNativeStackNavigator()
  return (
  <NavigationContainer>
    <stack.Navigator initialRouteName='Welcome' >
      <stack.Screen
      options={{title:'Home'}}
      name='onlinestore' component={Welcome}/>
      <stack.Screen  name='signup' component={Signup} />
      <stack.Screen  name='Catogory' component={Catogory} />
      <stack.Screen  name='Itemlist' component={Itemlist} />
      <stack.Screen  name='Item' component={Item} />
      <stack.Screen  name='Cart' component={Cart} />
    </stack.Navigator >
  </NavigationContainer>
  );
}
