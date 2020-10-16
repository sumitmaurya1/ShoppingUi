import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import colors from '../screens/colors'

const CategoriesComponenet = ({ imageUri, text }) => {
    return (
            <View style={styles.productContainer}>
                <View style={{flex:2  }}>
                    <Image style={{flex:1,}} resizeMode="center" source={imageUri}  />
                </View>
                <View>
                    <Text style={styles.productName}>{text}</Text>
                </View>
           </View>
    );
};

const styles = StyleSheet.create({
    
    productContainer: {
        height: 80,
        alignItems:"center",
        width:120 , 
        backgroundColor: colors.white,
        borderRadius: 8,
        padding: 15,
        marginLeft: 20,
        borderColor: colors.white
    },
    productName: {
        color: colors.mediumGray,
        letterSpacing: 2,
    }
    
})

export default CategoriesComponenet;
