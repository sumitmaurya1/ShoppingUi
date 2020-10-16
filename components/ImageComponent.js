import React from 'react'
import { ImageBackground, View , StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons, MaterialIcons, SimpleLineIcons} from '@expo/vector-icons';


const ImageComponent = () => {
    return (
        <View >
            <ImageBackground blurRadius={0.1} resizeMode="cover" style ={styles.container} source={require("../assets/banner.jpg")}>
                <TouchableOpacity>
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons name="menu" size={25} color="white" />
                        <View style={styles.secondIconContainer}>
                            <MaterialIcons name="search" size={27} color="white" />
                            <SimpleLineIcons  style={{ marginLeft: 20 }} name="bag" size={25} color="white" />
                        </View>
                        
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        width: "100%",
    },
    iconContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        top: 20
    },
    secondIconContainer:{
        flexDirection: "row",
    }
})
export default ImageComponent;
