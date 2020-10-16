import React from 'react'
import { Image, Pressable, View, StyleSheet } from 'react-native'

const ListComponents = ({imageuri}) => {
    return (
        <Pressable>
            <View style={styles.container}>
                <Image resizeMode="contain" style={styles.product} source={imageuri} />
            </View>
        </Pressable>
    )
}

export default ListComponents;
const styles = StyleSheet.create({
    container:{
        height: 100,
        width: 100,
        padding: 10
    },
    product:{
        width: 100,
        height: 100
    }
})
