import React, {useState} from "react";
import {ScrollView, View} from "react-native";
import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import AsyncStorage from "@react-native-community/async-storage";
import TeacherItem, {Teacher} from "../../components/TeacherItem";
import {useFocusEffect} from '@react-navigation/native';

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    // Quando a tela entrar em focu \0/
    useFocusEffect(() => {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                setFavorites(JSON.parse(response));
            }
        });
    })

    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys favoritos"/>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Favorites;