import React, {ReactNode} from "react";
import {Image, Text, View} from "react-native";
import styles from "./styles";
import {BorderlessButton} from "react-native-gesture-handler";
import backIcon from "../../assets/images/icons/back.png";
import logoIcon from "../../assets/images/logo.png";
import {useNavigation} from '@react-navigation/native';

interface PageHeaderProps {
    title: string,
    hederRight?: ReactNode // Recebe um componente
}

const PageHeader: React.FC<PageHeaderProps> = ({title, hederRight, children}) => {
    const navegation = useNavigation();

    function handleGoBack() {
        navegation.navigate('Landing');
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain"/>
                </BorderlessButton>
                <Image source={logoIcon} resizeMode="contain"/>
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {hederRight}
            </View>
            {children}
        </View>
    )
}

export default PageHeader;