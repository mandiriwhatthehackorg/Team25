import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function SettingsScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text> Halo!</Text>
        </ScrollView>
    );
}

SettingsScreen.navigationOptions = {
    title: 'app.json',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
