import React, { useState, useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Image, TextInput, FlatList } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import API_URL from '../services/apiRoute';

const MatchChat = (props) => {
    // lấy id của currentUser trong redux
    const currentUser = useSelector((state) => state.user);
    const { navigation } = props;
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    let searchData;
    if (data.length > 0) {
        searchData = data.filter((item) => item.full_name.toLowerCase().includes(search.toLowerCase()));
    }

    useFocusEffect(
        useCallback(() => {
            const getData = () => {
                axios
                    .get(`${API_URL}/api/user/matchchat/${currentUser.id}`)
                    .then((response) => {
                        setData(response.data);
                    })
                    .catch((error) => {
                        console.log('lỗi:', error);
                    });
            };
            getData();
        }, [currentUser]),
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchInputContainer}>
                <Icon name="search-outline" style={styles.IconSearch} size={24} />
                <TextInput
                    onChangeText={(text) => setSearch(text)}
                    style={styles.searchInput}
                    placeholder="Search here ..."
                    placeholderTextColor={'#B2B2B2'}
                />
            </View>
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Chat', {
                                    target_id: item.target_id,
                                    chat_id: item.chat_id,
                                    image: item.image,
                                    name: item.full_name,
                                })
                            }
                            style={{
                                width: 70,
                                height: 70,
                                borderRadius: 70,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 2,
                                borderColor: '#EF8484',
                            }}
                        >
                            <Image
                                style={{
                                    ...styles.avatar,
                                    width: 60,
                                    height: 60,
                                    borderRadius: 60,
                                    marginRight: 0,
                                }}
                                resizeMode="cover"
                                source={{ uri: item.image }}
                            />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.target_id}
                    horizontal
                />
            </View>
            <Text style={{ marginTop: 30, color: '#C258E7', fontWeight: 'bold', fontSize: 16 }}>Message</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={searchData}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('Chat', {
                                target_id: item.target_id,
                                image: item.image,
                                chat_id: item.chat_id,
                                name: item.full_name,
                                currentUser: currentUser,
                            })
                        }
                        style={styles.targetContainer}
                    >
                        <Image style={styles.avatar} resizeMode="cover" source={{ uri: item.image }} />
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>{item.full_name}</Text>
                            <Text>{item.content}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.target_id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 22,
        backgroundColor: '#FFFFFF',
        paddingBottom: 10,
    },
    searchInputContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    searchInput: {
        borderRadius: 100,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
        height: 44,
        backgroundColor: '#fff',
        flex: 1,
        paddingLeft: 40,
    },
    IconSearch: {
        color: '#B2B2B2',
        position: 'absolute',
        zIndex: 1,
        left: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    targetContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 13,
        borderBottomWidth: 0.5,
        borderColor: '#B2B2B2',
    },
});

export default MatchChat;
