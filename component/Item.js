import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { getDatabase, ref, child, get, set } from "firebase/database";
const Item = ({route,navigation}) => {
    const {name,disc,image,origen,price,type}=route.params
    console.log("name:",disc)
    return (
        <View style={{ backgroundColor: '#7fbf53' }} >
            <View style={styles.bgimg} ><Image style={styles.img} source={{uri:image}} /></View>
            <View style={styles.btmView} >
                <Text style={[styles.text, { fontSize: 36, marginTop: 40, fontWeight: '800' }]} >{name}</Text>
                <Text style={[styles.text, { fontSize: 20, fontWeight: 'bold' }]}>{price} <Text style={{ fontSize: 14, color: '#9586A8', fontWeight: '400' }} >{type}</Text></Text>
                <Text style={{ fontSize: 12, color: '#0BCE83', fontWeight: '400' }} >~ 0.01$ /piece </Text>
                <Text style={[styles.text, { fontWeight: '900', fontSize: 17, marginTop: 15 }]} >{origen}</Text>
                <Text style={[styles.text, { color: '#9586A8', fontSize: 15,lineHeight:25 }]}>{disc}</Text>
                <View style={{position:'absolute',bottom:20,left:25, marginTop:80, height: 50, width: '100%', flexDirection: 'row', alignItems: 'center' }} >
                    <Pressable style={{ height: 45, width: '20%', borderColor: '#9586A8', borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 3 }} >
                        <Image style={{ height: 20, width: 20 }} source={require('../assets/Vector.png')} />
                    </Pressable>
                    <Pressable style={{flexDirection:'row', marginLeft:25, backgroundColor: '#0BCE83', height: 45, width: '65%', justifyContent: 'center', alignItems: 'center', borderRadius: 3 }} >
                        <Image style={{ height: 20, width: 20 }} source={require('../assets/shopping-cart.png')} />
                        <Text style={{fontSize:15,color:'#fff',fontWeight:'bold',marginLeft:10}} >Add to cart </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    bgimg: {
        height: '35%',
        width: '100%',
    },
    btmView: {
        backgroundColor: '#f6f5f5',
        height: '65%',
        width: '100%',
        paddingLeft: 20
    },
    img: {
        height: '100%',
        width: '100%',
    },
    logo: {
        width: 100,
        height: 100
    },
    text: {
        color: '#2D0C57',

    },
    btn: {
        width: '85%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 5,
    },
})
export default Item;
