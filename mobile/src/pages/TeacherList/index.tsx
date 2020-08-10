import React, {useEffect, useState} from "react";
import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem, {Teacher} from "../../components/TeacherItem";
import {ScrollView, Text, TextInput, View} from "react-native";
import {BorderlessButton, RectButton} from "react-native-gesture-handler";
import {Feather} from '@expo/vector-icons'
import api from "../../services/api";
import AsyncStorage from '@react-native-community/async-storage';
import {useFocusEffect} from "@react-navigation/native";

function TeacherList() {

    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    const [reload, setReload] = useState(false);

    useFocusEffect(() => {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favTeachers = JSON.parse(response);
                const favTeachersIds = favTeachers.map((teacher: Teacher) => {
                    return teacher.id
                });
                setFavorites(favTeachersIds);
            }
        });
    })

    useEffect(() => {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favTeachers = JSON.parse(response);
                const favTeachersIds = favTeachers.map((teacher: Teacher) => {
                    return teacher.id
                });
                setFavorites(favTeachersIds);
            }
        });

        api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        }).then((response) => {
            setTeachers(response.data);
        })
    }, [reload])

    async function handleFiltersSubmit() {
        setReload(!reload);
        setIsFiltersVisible(false);
    }

    return (
        <View style={styles.container}>
            <PageHeader
                title="Proffys disponíveis"
                hederRight={(
                    <BorderlessButton onPress={() => setIsFiltersVisible(!isFiltersVisible)}>
                        <Feather name="filter" size={20} color="#FFF"/>
                    </BorderlessButton>
                )}
            >
                {isFiltersVisible &&
                <View style={styles.searchForm}>
                    <Text style={styles.label}>
                        Matéria
                    </Text>
                    <TextInput
                        value={subject}
                        onChangeText={setSubject}
                        style={styles.input}
                        placeholder="Qual a matéria?"
                        placeholderTextColor="#c1bccc"
                    />
                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>
                                Dia da semana
                            </Text>
                            <TextInput
                                value={week_day}
                                onChangeText={setWeekDay}
                                style={styles.input}
                                placeholder="Qual o dia?"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>
                                Horário
                            </Text>
                            <TextInput
                                value={time}
                                onChangeText={setTime}
                                style={styles.input}
                                placeholder="Qual o horário?"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>
                    </View>
                    <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
                        <Text style={styles.submitButtonText}>
                            Filtrar
                        </Text>
                    </RectButton>
                </View>
                }
            </PageHeader>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default TeacherList;