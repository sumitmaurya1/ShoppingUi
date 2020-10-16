import React from 'react'
import {  View , StyleSheet, Pressable,Image, Text, ImageBackground} from 'react-native';
import colors from '../screens/colors';


function BestSellers({ imageUri,off, store}) {
    return (
        <Pressable style={styles.button} >

            <View style={styles.productContainer}>
                <View style={{flex: 1 }}>
                    <ImageBackground style={styles.imagePlaceholder} resizeMode="stretch" blurRadius={0.5}  source={imageUri}  />
                </View>
                <View style={{ top:20}} >
                    <Text style={styles.productDesc}>{store}</Text>
                    <Text style={styles.productDesc}>{off}</Text>
                </View>
            </View>

      </Pressable>  
    )
}
const styles = StyleSheet.create({
    productContainer: {
        height: 150,
        width: 250 , 
        backgroundColor: colors.thinGray,
        borderRadius: 8,
        marginLeft: 20,
        overflow: "hidden",
        padding: 2,
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "row"
    },
    productDesc: {
        color: colors.white,
        fontSize: 18,
        textAlign: "left",
        overflow: "hidden",
        left: 20,
        fontWeight: "bold",
        width: 250,
        bottom: 10

    },
    
    imagePlaceholder: {
        flex: 1,
        width: 250,
        
    }
    
})
export default BestSellers;
