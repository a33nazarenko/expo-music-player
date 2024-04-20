import { colors, fontSize } from "@/constants/tokens";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { Platform, StyleSheet, View } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Ionicons, FontAwesome6 } from '@expo/vector-icons';
import { FloatingPlayer } from "@/components/FloatingPlayer";

const TabsNavigation = () => {
    return (
        <>
            <Tabs screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarLabelStyle: {
                    fontSize: fontSize.xs,
                    fontWeight: '500'
                },
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    borderTopWidth: 0,
                    paddingTop: 0,
                    paddingBottom: 4
                },
                tabBarBackground: () => Platform.OS === 'ios' ? (
                    <BlurView intensity={100} blurReductionFactor={1} tint="dark" style={{ ...StyleSheet.absoluteFillObject, overflow: 'hidden' }} />
                ) : (<View style={{ ...StyleSheet.absoluteFillObject, overflow: 'hidden', backgroundColor: '#252525' }} />)
            }}>
                <Tabs.Screen name="favorites" options={{
                    title: 'Favorites',
                    tabBarIcon: ({ color }) => <FontAwesome name="heart" size={20} color={color} />
                }} />
                <Tabs.Screen name="playlists" options={{
                    title: 'Playlists',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="playlist-play" size={28} color={color} />
                }} />
                <Tabs.Screen name="(songs)" options={{
                    title: 'Songs',
                    tabBarIcon: ({ color }) => <Ionicons name="musical-notes-sharp" size={24} color={color} />
                }} />
                <Tabs.Screen name="artists" options={{
                    title: 'Artists',
                    tabBarIcon: ({ color }) => <FontAwesome6 name="users-line" size={20} color={color} />
                }} />
            </Tabs>
            <FloatingPlayer style={{
                position: 'absolute',
                left: 8,
                right: 8,
                bottom: 55
            }} />
        </>)
}

export default TabsNavigation;