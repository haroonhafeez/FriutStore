import { useState } from "react";
import {ScrollView,StyleSheet, View, Text, Image, TextInput, useWindowDimensions ,Pressable,FlatList, Animated} from "react-native";
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';


const Itemlist = () => {
    const items=[
        {
            image:require('../assets/veg(1).png'),
            name:"Boston Lettuce",
            type:"Rs/piece",
            price:1.10
        },
        {
            image:require('../assets/veg(2).png'),
            name:"Purple Cauliflower",
            type:"Rs/KG",
            price:1.85
        },
        {
            image:require('../assets/veg(3).png'),
            name:"Savoy Cabbage",
            type:"Rs/KG",
            price:1.45
        },
        {
            image:require('../assets/veg(2).png'),
            name:"Purple Cauliflower",
            type:"Rs/KG",
            price:1.85
        },
        {
            image:require('../assets/veg(3).png'),
            name:"Savoy Cabbage",
            type:"Rs/KG",
            price:1.45
        },
    ]
    const FirstRoute = () => (
        <ScrollView>
        <View style={{ flex: 1,height:400 }} >
        <FlatList
        data={items}
        renderItem={({item})=>{
            return(
                <View style={{ height:150,width:'100%',justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                <Image style={{width:'40%',height:'80%',borderRadius:7}} source={item.image} />  
                <View style={{width:'40%',marginLeft:25}}>
                 <Text style={{marginTop:10,fontSize:18,color:'#2D0C57',fontWeight:'800'}} >{item.name}</Text>
                 <Text style={styles.text}>{item.price}<Text style={{fontSize:14,color:'#9586A8',fontWeight:'400'}} >{item.type}</Text></Text>
                 <View style={{height:'50%',width:'100%',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}} >
                  <Pressable style={{height:25,width:'30%',borderColor:'#333',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:3}} >
                     <Image style={{height:12,width:12}} source={require('../assets/Vector.png')} />
                 </Pressable>
                 <Pressable style={{backgroundColor:'#0BCE83',height:25,width:'30%',justifyContent:'center',alignItems:'center',borderRadius:3}} >
                     <Image style={{height:12,width:12}} source={require('../assets/shopping-cart.png')} />
                 </Pressable>
                 </View>
                </View>
             </View>
            )
        }}
        />           
        </View>
        </ScrollView>
    );
    
    const SecondRoute = () => (
        <View style={{ flex: 1,height:400 }} >
    
        </View>
    );
    
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });
    const renderTabBar = props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: '#333' }}
          style={{ backgroundColor: 'white' }}
          renderLabel={({route, color}) => (
            <Text style={{ color: 'black', margin: 8 }}>
              {route.title}
            </Text>
          )}
        />
      );
         
    const layout = useWindowDimensions();

    const [index, setIndex] =useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Vegetables' },
        { key: 'second', title: 'Fruits' },
    ]);

    return (
        
        <View>
            <View style={styles.header} ><Image style={{ height: '100%', width: '100%' }} source={require('../assets/Media(6).png')} /></View>
            <Text style={{ margin: 20, marginBottom: 10, color: '#2D0C57', fontWeight: '900', fontSize: 30 }}>Vegetables</Text>
            <TextInput style={{ padding: 10, paddingStart: 30, borderRadius: 20, marginLeft: 16, marginBottom: 10, height: 40, width: '90%', borderColor: '#2D0C57', borderWidth: 2 }} placeholder='Search' />
         <View style={{height:'100%'}}>  
            <TabView 
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            />
         </View>  
        </View>)

}
const styles=StyleSheet.create({
    text:{
        fontSize:18,
        color:'#2D0C57',
        fontWeight:'800',
        marginRight:10,
        marginTop:10,
    },
    header:{
        height:200,
        width:'100%'
    }
})
export default Itemlist;