import React from 'react'
import {  View , StyleSheet, Pressable,Image, Text} from 'react-native';


function NewArivals({ imageUri, price, desc}) {
    return (
        <Pressable style={styles.button} >

            <View style={styles.productContainer}>
                <View style={{flex: 1 }}>
                    <Image style={styles.imagePlaceholder} resizeMode="center" source={imageUri}  />
                </View>
                <View style={{ top:20}} >
                    <Text style={styles.productDesc}>{desc}</Text>
                    <View >
                        <Text style={styles.productPrice}>{`${price}.USD`}</Text>
                        <Text style={styles.addBttn} >+</Text>
                    </View>
                </View>
            </View>

      </Pressable>  
    )
}
const styles = StyleSheet.create({
    productContainer: {
        height: 100,
        width: 250 , 
        backgroundColor: colors.white,
        borderRadius: 8,
        marginLeft: 20,
        overflow: "hidden",
        padding: 2,
        display: "flex",
        flexDirection: "row"
    },
    productNew: {
        color: "red",
        position: "absolute",
        left: 120,
        fontWeight: "bold",
        fontSize: 10
    },
    productDesc: {
        color: colors.mediumGray,
        fontSize: 8,
        textAlign: "left",
        overflow: "hidden",
        left: 90,
        width: 250
    },
    productPrice: {
        color: colors.black,
        fontSize: 10,
        fontWeight: "bold",
        marginLeft: 90
    },
    addBttn:{
        borderRadius: 40,
        height: 15,
        width: 15,
        color: colors.white,
        backgroundColor: colors.black,
        borderColor: colors.black,
        left: 200,
        fontWeight: "700",
        textAlign: "center",
        bottom: 5
    },
    imagePlaceholder: {
        flex: 1,
        width: 80,
        borderRadius: 8,
        bottom: 10
    }
    
})
export default NewArivals;
