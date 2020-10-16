import React from 'react';
import { Text, View , StyleSheet,  SafeAreaView, Image, Pressable, ScrollView, Button} from 'react-native';
import {SimpleLineIcons, MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';
import colors from './colors';
import ListComponents from '../components/ListComponents';


const SingleProductScreen = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}> 
            <View style={styles.topHeader}>
                <MaterialIcons style={styles.barName} name="arrow-back" size={24} color="black" />
                <View>
                    <SimpleLineIcons  style={styles.bag} name="bag" size={25} color="black" />
                </View>
            </View>
            <View>
                <Image style={styles.fullImage} resizeMode="contain" source={require("../assets/chair_three.jpg")} />
                <Pressable>
                    <MaterialCommunityIcons  style={styles.bookmark} name="bookmark-outline" size={25} color="black" />
                </Pressable>
            </View>
            
            <View style={styles.mainContainer}>
                    <View style={styles.container}>
                        <Text style={styles.heading}>Autobe best Chair</Text>
                        <Text style={styles.subheading2}> 324.59.USD</Text>
                        <Text style={styles.subheading}>Customers's Rating </Text>
                        <View style={{ flexDirection: "row", left: 250, bottom: 40 }}>
                            <MaterialIcons name="star" size={15} color="black" />
                            <MaterialIcons name="star" size={15} color="black" />
                            <MaterialIcons name="star" size={15} color="black" />
                            <MaterialIcons name="star" size={15} color="black" />
                            <MaterialIcons name="star-border" size={15} color="black" />
                        </View>
                        <Text style={styles.info}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</Text>

                    </View>
                    
            </View>
            <View style={styles.mainContainer2}>
                    <ScrollView style={{bottom: 15}} showsHorizontalScrollIndicator={false} horizontal={true} >
                        <View style={{ flexDirection: "row"}}>
                           <ListComponents imageuri={require("../assets/chair_three.jpg")} />
                           <ListComponents imageuri={require("../assets/chair_three.jpg")} />
                           <ListComponents imageuri={require("../assets/chair_three.jpg")} />
                           <ListComponents imageuri={require("../assets/chair_three.jpg")} />
                           <ListComponents imageuri={require("../assets/chair_three.jpg")} />

                        </View>
                   </ScrollView>
            </View>
            <View>
                <Button style={styles.bttn} title="Add To Cart" />
            </View>
            
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    topHeader: {
        display: "flex",
        height: 80,
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: colors.white,
        alignItems: "flex-end",
        borderBottomWidth: 1,
        borderBottomColor: colors.white
    },
    barName: {
        fontWeight: "bold",
        fontSize: 20,
        padding: 20,
        top: 5
    },
    bttn: {
        borderRadius: 8,
        backgroundColor: colors.black
    },
    bag: {
        padding: 20,
    },
    bookmark:{
        left: 380
    },
    container:{
        height: 130,
        padding: 10
    },
    fullImage:{
        width: 410
    },
    mainContainer:{
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline"
    },
    mainContainer2: {
        height: 150,
        width: "100%",
        backgroundColor: colors.thinGray,
    },
    heading: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: 20
    },
    subheading:{
        color: colors.mediumGray,
        left: 250,
        bottom: 40
    },
    subheading2:{
        color: colors.mediumGray,
    },
    info:{
        color: colors.mediumGray,
        alignSelf: "center",
        bottom: 20
    }
    
   
   
    
})
export default SingleProductScreen;
