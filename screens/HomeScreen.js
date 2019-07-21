import React from 'react';
import { SearchBar, Icon } from 'react-native-elements';

import ProgressBarAnimated from 'react-native-progress-bar-animated';

import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native';

export default function HomeScreen() {
    const barWidth = Dimensions.get('screen').width - 70;
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}>
                <View style={styles.welcomeContainer}>
                    <Image
                        source={require('../assets/images/logo_small.png')}
                        style={styles.welcomeImage}
                    />
                    <Text style={styles.geetingText}>
                        Selamat Pagi, Hafidz!
                    </Text>
                </View>
                <View style={styles.getStartedContainer}>
                    <View
                        style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
                        <Text style={styles.getStartedText}> Saldo Anda </Text>
                        <Text style={styles.amountSaldo}> IDR 17.3000.000</Text>
                    </View>
                </View>
                <View style={[styles.getStartedContainer, { marginTop: 10 }]}>
                    <View
                        style={[styles.favouriteMenu]}>
                        <Text style={styles.getStartedText}> Menu Favorit </Text>
                        <Text style={styles.amountSaldo}> > </Text>
                    </View>
                    <View
                        style={[styles.favouriteMenu, { marginHorizontal: 50 }]}>
                        <View
                            style={[styles.promoHighlightContainer, styles.homeScreenFilename]}>
                            <Icon name='md-arrow-up' type='ionicon'
                                color='#10316b' />
                            <Icon name='md-arrow-down' type='ionicon'
                                color='#10316b' />
                        </View>
                        <View
                            style={[styles.promoHighlightContainer, styles.homeScreenFilename]}>
                            <Icon name='money' type='font-awesome'
                                color='#10316b' />
                        </View>
                        <View
                            style={[styles.promoHighlightContainer, styles.homeScreenFilename]}>
                            <Icon name='md-arrow-up' type='ionicon'
                                color='#10316b' />
                            <Icon name='md-arrow-down' type='ionicon'
                                color='#10316b' />
                        </View>
                        <View
                            style={[styles.promoHighlightContainer, styles.homeScreenFilename]}>
                            <Icon name='creditcard' type='antdesign'
                                color='#10316b' />
                        </View>
                    </View>
                </View>
                <View style={[styles.getStartedContainer, { marginTop: 10 }]}>
                    <View
                        style={[styles.favouriteMenu]}>
                        <Text style={styles.getStartedText}> Mandiri Fiestapoin </Text>
                        <Text style={styles.amountSaldo}> > </Text>
                    </View>
                    <View
                        style={[styles.poinUserContainer, styles.homeScreenFilename]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.getStartedText}> Hafidz Noor </Text>
                            <Text style={styles.getStartedText}> Level 3</Text>
                        </View>
                        <ProgressBarAnimated
                            width={barWidth}
                            value={45}
                            backgroundColorOnComplete="#6CC644"
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Text style={styles.getStartedText}> 500 fp</Text>
                        </View>
                    </View>


                    <View
                        style={[styles.favouriteMenu, { marginHorizontal: 50 }]}>
                        <View
                            style={[styles.promoHighlightContainer, styles.homeScreenFilename]}>
                            <Icon name='md-arrow-up' type='ionicon'
                                color='#10316b' />
                            <Icon name='md-arrow-down' type='ionicon'
                                color='#10316b' />
                        </View>
                        <View
                            style={[styles.promoHighlightContainer, styles.homeScreenFilename]}>
                            <Icon name='money' type='font-awesome'
                                color='#10316b' />
                        </View>
                        <View
                            style={[styles.promoHighlightContainer, styles.homeScreenFilename]}>
                            <Icon name='md-arrow-up' type='ionicon'
                                color='#10316b' />
                            <Icon name='md-arrow-down' type='ionicon'
                                color='#10316b' />
                        </View>
                        <View
                            style={[styles.promoHighlightContainer, styles.homeScreenFilename]}>
                            <Icon name='creditcard' type='antdesign'
                                color='#10316b' />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

HomeScreen.navigationOptions = {
    headerTitle: <Icon
        reverse
        size={15}
        name='list'
        type='foundation'
        color='#517fa4'
    />,
    headerTitleStyle: {
        marginLeft: 5,
        borderBottom: 0
    },
    headerStyle: {
        backgroundColor: '#10316b',
        elevation: 0
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    greetingText: {
        color: '#fff',
        marginTop: 10,
        marginBottom: 60,
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 24,
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 20,
    },
    welcomeContainer: {
        alignItems: 'center',
        backgroundColor: '#10316b',
        marginBottom: 40,
        paddingTop: -20
    },
    welcomeImage: {
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: '#d9e7ff',
        borderRadius: 10,
        position: 'relative',
        zIndex: 2,
        marginTop: -28,
        justifyContent: 'center',
        width: 300,
        height: 80,
        paddingHorizontal: 4,
    },
    poinUserContainer: {
        backgroundColor: '#d9e7ff',
        borderRadius: 10,
        justifyContent: 'center',
        width: 300,
        height: 80,
        paddingHorizontal: 4,
    },
    promoHighlightContainer: {
        backgroundColor: '#fdbe34',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
        fontWeight: '600',
        paddingHorizontal: 15,
    },
    favouriteMenu: {
        borderRadius: 10,
        color: '#000',
        justifyContent: 'center',
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    amountSaldo: {
        fontSize: 20,
        fontStyle: 'italic',
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
