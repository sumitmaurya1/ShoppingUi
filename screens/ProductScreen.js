import React from 'react';
import { Text, View , StyleSheet, TextInput,Pressable, ScrollView, SafeAreaView} from 'react-native';
import {SimpleLineIcons, MaterialIcons} from '@expo/vector-icons';
import colors from './colors';
import ProductComponent from '../components/ProductComponent';
import NewArivals from '../components/NewArivals';
import BestSellers from '../components/BestSellers';


const ProductScreen = ({ navigation }) => {

    const changeComponent = () => {
        console.log("tapped")
        navigation.navigate('SingleProduct')
    } 

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.thinGray}}> 
            <ScrollView>
            <View style={styles.topHeader}>
                <Text style={styles.barName}>Furniture</Text>
                <View>
                    <SimpleLineIcons  style={styles.bag} name="bag" size={25} color="black" />
                </View>
            </View>
            <View style={styles.searchContainer}>
                <MaterialIcons name="search" size={24} color="black" />
                <TextInput style={styles.search} placeholder="Search unique Furniture " placeholderTextColor={colors.lightGray} />
                <SimpleLineIcons style={{left:60, bottom: 10, height: 35, width: 35, backgroundColor: colors.white, borderRadius: 8, padding:5}} name="equalizer" size={20} color="black" />
            </View>
            <View style={styles.mainContainer}>
                    <View style={styles.container}>
                        <Text style={styles.heading}>Morden</Text>
                        <Text style={styles.subheading}>+Good Quality Items </Text>
                    </View>
                   <ScrollView style={{bottom: 15}} showsHorizontalScrollIndicator={false} horizontal={true} >
                        <View style={{ flexDirection: "row"}}>
                            
                            <ProductComponent imageUri={require("../assets/sofa_one.jpg")} price="324.95" name="Beautiful Couch" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />
                            <Pressable onPress={changeComponent}>
                                <ProductComponent imageUri={require("../assets/chair_two.jpg")} price="324.95" name="Beautiful Chair" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />
                            </Pressable>
                            <ProductComponent imageUri={require("../assets/sofa_three.jpg")} price="324.95" name="Beautiful Couch" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />
                            <ProductComponent imageUri={require("../assets/sofa_four.jpg")} price="324.95" name="Beautiful Chair" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />
                            <ProductComponent imageUri={require("../assets/sofa_two.jpg")} price="324.95" name="Beautiful Couch" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />
                            <ProductComponent imageUri={require("../assets/chair_three.jpg")} price="324.95" name="Beautiful Chair" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />

                        </View>
                   </ScrollView>
            </View>

            <View style={styles.mainContainer2}>
                    <View style={styles.container}>
                        <Text style={styles.heading}>New Arrivals</Text>
                        <Text style={styles.subheading2}>+Good Quality Items </Text>
                    </View>
                    <ScrollView style={{bottom: 15}} showsHorizontalScrollIndicator={false} horizontal={true} >
                        <View style={{ flexDirection: "row"}}>
                            <NewArivals imageUri={require("../assets/sofa_one.jpg")} price="301.55" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />
                            <NewArivals imageUri={require("../assets/chair_five.jpg")} price="301.55" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />
                            <NewArivals imageUri={require("../assets/sofa_two.jpg")} price="301.55" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />
                        </View>
                   </ScrollView>
            </View>

            <View style={styles.mainContainer3}>
                    <View style={styles.container}>
                        <Text style={styles.heading}>Best Sellers</Text>
                    </View>
                    <ScrollView style={{bottom: 15}} showsHorizontalScrollIndicator={false} horizontal={true} >
                        <View style={{ flexDirection: "row"}}>
                            <BestSellers imageUri={require("../assets/sofa_four.jpg")} store="Zara Furniture World" off="Get 20% off" />
                            <BestSellers imageUri={require("../assets/chair_two.jpg")} store="Zara Furniture World" off="Get 20% off" />
                        </View>
                   </ScrollView>
            </View>

            </ScrollView>
            
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
        borderBottomColor: colors.thinGray
    },
    barName: {
        fontWeight: "bold",
        fontSize: 20,
        padding: 20,
        top: 5
    },
    bag: {
        padding: 20,
    },
    search:{
        flex: 1,
        fontWeight: "500",
        backgroundColor: colors.white,
        marginLeft: 10,
        
    },
    searchContainer: {
        flexDirection: "row",
        padding:15,
        backgroundColor: colors.white,
        marginHorizontal: 10,
        elevation: 1,
        shadowColor: colors.black,
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 0},
        borderRadius: 8,
        height: 50,
        width: 350
    },
    subheading:{
        color: colors.lightGray,
        fontSize: 13,
        right: 160,
        bottom: 8
    },
    subheading2:{
        color: colors.lightGray,
        fontSize: 13,
        right: 110,
        bottom: 8
    },

    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        padding: 20,
        bottom: 5
    },
    container2: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        padding: 20,
        
    },
    mainContainer: {
        height: 340,
        width: "100%",
        backgroundColor: colors.thinGray,
    },
    mainContainer2: {
        height: 150,
        width: "100%",
        backgroundColor: colors.thinGray,
    },
    mainContainer3: {
        height: 200,
        width: "100%",
        backgroundColor: colors.thinGray, 
    },
    heading:{
        color: colors.black,
        fontSize: 22,
        fontWeight: "bold"
    },
    
})
export default ProductScreen;
