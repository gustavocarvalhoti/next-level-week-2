import React from "react";
import {ImageBackground, Text, View} from "react-native";
import styles from "./styles";
import bgImage from '../../assets/images/give-classes-background.png';
import {RectButton} from "react-native-gesture-handler";
import {useNavigation} from '@react-navigation/native';

function GiveClasses() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" source={bgImage} style={styles.content}>
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>Para começar, você precisa se cadastrar como professor na nossa
                    plataforma web.</Text>
            </ImageBackground>
            <RectButton style={styles.okButton} onPress={navigation.goBack}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses;