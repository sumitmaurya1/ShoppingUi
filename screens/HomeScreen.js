import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Pressable } from 'react-native';
import ImageComponent from '../components/ImageComponent';
import CategoriesComponenet from '../components/CategoriesComponenet';
import colors from './colors';
import ProductComponent from '../components/ProductComponent';
import ProductScreen from './ProductScreen';

const HomeScreen= ({ navigation })  => {
    const changeComponent = () => {
        navigation.navigate('Product')
    }
    return (
        <SafeAreaView >
                <ScrollView>
                <View>
                    <ImageComponent />
                </View>
                <View style={styles.mainContainer}>
                    <View style={styles.container}>
                        <Text style={styles.heading}>Categories</Text>
                        <Text style={styles.subheading}>View All → </Text>
                    </View>
                   <ScrollView style={{bottom: 15}} showsHorizontalScrollIndicator={false} horizontal={true} >
                        <View style={{ flexDirection: "row"}}>
                            <CategoriesComponenet imageUri={require("../assets/bedroom.png")} text="Bedroom" />
                            <Pressable onPress={changeComponent}>
                                <CategoriesComponenet imageUri={require("../assets/furniture.png")} text="Furniture"/>
                            </Pressable>
                            <CategoriesComponenet imageUri={require("../assets/livingroom.png")} text="Living"/>
                            <CategoriesComponenet imageUri={require("../assets/wordrobe.png")} text="Wordrobe"/>
                            <CategoriesComponenet imageUri={require("../assets/workplace.png")} text="Workspace"/>

                        </View>
                   </ScrollView>
                </View>
                <View style={styles.mainContainer2}>
                    <View style={styles.container}>
                        <Text style={styles.heading}>Top Trends</Text>
                        <Text style={styles.subheading}>See All</Text>
                    </View>
                    <ScrollView style={{bottom: 15}} showsHorizontalScrollIndicator={false} horizontal={true} >
                        <View style={{ flexDirection: "row"}}>
                            <ProductComponent imageUri={require("../assets/sofa_one.jpg")} price="324.95" name="Beautiful Couch" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />
                            <ProductComponent imageUri={require("../assets/chair_two.jpg")} price="324.95" name="Beautiful Chair" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />
                            <ProductComponent imageUri={require("../assets/sofa_three.jpg")} price="324.95" name="Beautiful Couch" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />
                            <ProductComponent imageUri={require("../assets/sofa_four.jpg")} price="324.95" name="Beautiful Chair" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />
                            <ProductComponent imageUri={require("../assets/sofa_two.jpg")} price="324.95" name="Beautiful Couch" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />
                            <ProductComponent imageUri={require("../assets/chair_three.jpg")} price="324.95" name="Beautiful Chair" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" />

                        </View>
                   </ScrollView>
                </View>
                </ScrollView>
      
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        padding: 20,
        bottom: 5
    },
    mainContainer: {
        height: 150,
        width: "100%",
        backgroundColor: colors.thinGray,
    },
    mainContainer2: {
        height: 350,
        width: "100%",
        backgroundColor: colors.thinGray,
    },
    heading:{
        color: colors.black,
        fontSize: 22,
        fontWeight: "bold"
    },
    subheading:{
        color: colors.lightGray,
        fontSize: 13,
    },

})

export default HomeScreen;
