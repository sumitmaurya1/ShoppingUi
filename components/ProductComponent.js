import React from 'react'
import { Pressable, StyleSheet, Text, View, Image, Button } from 'react-native';
import colors from '../screens/colors';

const ProductComponent = ({imageUri,name, desc,price}) => {
    
    
    
    return (
        <Pressable  >

            <View style={styles.productContainer}>
                <View style={{flex: 1 }}>
                    <Image style={styles.imagePlaceholder} resizeMode="center" source={imageUri}  />
                </View>
                <View style={{ top:20}} >
                    <Text style={styles.productName}>{name}</Text>
                    <Text style={styles.productNew}>•New </Text>
                    <Text style={styles.productDesc}>{desc}</Text>
                    <View >
                        <Text style={styles.productPrice}>{`${price}.USD`}</Text>
                        
                            <Text style={styles.addBttn} >+</Text>
                        
                    </View>
                </View>
            </View>

      </Pressable>
    );
};

const styles = StyleSheet.create({
  
    productContainer: {
        height: 270,
        width: 200 , 
        backgroundColor: colors.white,
        borderRadius: 8,
        marginLeft: 20,
        overflow: "hidden",
        padding: 10,
        display: "flex",
    },
    productNew: {
        color: "red",
        position: "absolute",
        left: 120,
        fontWeight: "bold",
        fontSize: 10
    },
    productName: {
        color: colors.black,
        marginLeft: 10,
        fontWeight: "700"
    },
    productDesc: {
        color: colors.mediumGray,
        fontSize: 10,
        textAlign: "left",
        marginLeft: 10
    },
    productPrice: {
        color: colors.black,
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10
    },
    addBttn:{
        borderRadius: 40,
        height: 30,
        width: 30,
        color: colors.white,
        backgroundColor: colors.black,
        borderColor: colors.black,
        left: 140,
        bottom: 25,
        fontWeight: "700",
        textAlign: "center"
    },
    imagePlaceholder: {
        flex: 1,
        width: "100%", 
        borderRadius: 8
    }
})

export default ProductComponent;
