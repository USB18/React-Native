import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IMAGES, getImageFromURL } from '../../constants/images';
import Home from '../../screens/home';
import Playlist from '../../screens/playlists';
import Bookmark from '../../screens/bookmark';
import Profile from '../../screens/profile';
import TabIcon from './tab-Icon';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

const tabScreenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: { height:Platform.OS=="ios"?110: 90 },
};

const tabScreens = [
    {
        name: 'Home',
        component: Home,
        icon: IMAGES.HOME_TAB_ICON,
        label: 'Home',
    },
    {
        name: 'Playlist',
        component: Playlist,
        icon: IMAGES.PLAYLIST_TAB_ICON,
        label: 'Playlist',
    },
    {
        name: 'Bookmark',
        component: Bookmark,
        icon: IMAGES.BOOKMARK_TAB_ICON,
        label: 'Bookmark',
    },
    {
        name: 'Profile',
        component: Profile,
        icon: IMAGES.PROFILE_TAB_ICON,
        label: 'Profile',
    },
];

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={tabScreenOptions}>
            {tabScreens.map((tab) => (
                <Tab.Screen
                    key={tab.name}
                    name={tab.name}
                    component={tab.component}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                isFocused={focused}
                                Icon={getImageFromURL(tab.icon)}
                                label={tab.label}
                            />
                        ),
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

export default TabNavigator;
