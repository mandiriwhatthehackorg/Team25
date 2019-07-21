import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Ionicons, FontAwesome } from 'react-native-vector-icons';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import Profile from '../screens/Profile';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    config
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
    ),
};


const ListStack = createStackNavigator(
    {
        Links: ListScreen,
    },
    config
);

ListStack.navigationOptions = {
    tabBarLabel: 'Links',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-list-box' : 'md-list-box'} />
    ),
};


const WalletStack = createStackNavigator(
    {
        Wallets: Profile,
    },
    config
);

WalletStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-wallet' : 'md-wallet'} />
    ),
};


const ProfileStack = createStackNavigator(
    {
        Profile: Profile,
    },
    config
);

ProfileStack.navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} />
    ),
};

const tabNavigator = createBottomTabNavigator({
    HomeStack,
    ListStack,
    WalletStack,
    ProfileStack
},
    {
        initialRouteName: 'HomeStack',
        tabBarOptions: {
            activeTintColor: '#2e94b5',
            showLabel: false,
            style: {
                fontHeight: 'bold',
                backgroundColor: '#10316b',
            },
        },
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                var IconComponent
                if (routeName === 'HomeStack') {
                    IconComponent = FontAwesome;
                    iconName = `home`
                } else if (routeName === 'Search') {
                    IconComponent = Ionicons;
                    iconName = `ios-list-box`
                } else if (routeName === 'WalletStack') {
                    IconComponent = Ionicons;
                    iconName = 'md-wallet'
                } else if (routeName === 'ProfileStack') {
                    var IconComponent = Ionicons;
                    iconName = 'ios-contact'
                }
                return <IconComponent name={iconName} size={25} color="#FFF" focused={focused} />;
            },
        })
    });


export default tabNavigator;
