import React, {useEffect, useState} from "react";
import {Image, Text, View} from "react-native";
import styles from "./styles";
import {RectButton} from "react-native-gesture-handler"
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import AsyncStorage from '@react-native-community/async-storage';
import api from "../../services/api";

export interface Teacher {
    id: number
    avatar: string,
    bio: string,
    cost: number,
    name: string,
    subject: string,
    whatsapp: string,
}

interface TeacherItemProps {
    teacher: Teacher,
    favorited: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher, favorited}) => {

    useEffect(() => {
        setIsFavorited(favorited);
    }, [favorited]);

    const [isFavorited, setIsFavorited] = useState(favorited);

    function handleLinkGoWhatsapp() {
        api.post('connections', {
            user_id: teacher.id
        });
        // Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
    }

    async function handleToggleFavorite() {
        let favoritesArray = [];
        const favorites = await AsyncStorage.getItem('favorites');
        if (favorites) {
            favoritesArray = JSON.parse(favorites);
        }

        if (isFavorited) {
            // Não precisou
            const favIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id = teacher.id
            });
            favoritesArray.splice(favIndex, 1);

            // Remover dos favoritos
            //favoritesArray.pop(teacher);
            setIsFavorited(false);
        } else {
            // Adicionar aos favoritos
            favoritesArray.push(teacher);
            setIsFavorited(true);

        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{uri: teacher.avatar}}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                {teacher.bio}
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {' '}
                    <Text style={styles.priceValue}>R$ {teacher.cost},00</Text>
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <RectButton
                    style={[
                        styles.favoriteBtn,
                        isFavorited ? styles.favorited : {}
                    ]}
                    onPress={handleToggleFavorite}
                >
                    {
                        isFavorited
                            ? <Image source={heartOutlineIcon}/>
                            : <Image source={unfavoriteIcon}/>
                    }
                </RectButton>
                <RectButton style={styles.contactBtn}>
                    <Image source={whatsappIcon}/>
                    <Text
                        style={styles.contactBtnText}
                        onPress={handleLinkGoWhatsapp}
                    >
                        Entrar em contato
                    </Text>
                </RectButton>
            </View>
        </View>
    )
}

export default TeacherItem;