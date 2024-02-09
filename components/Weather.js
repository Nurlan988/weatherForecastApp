import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Thunderstorm: {
        iconName: "thunderstorm",
        gradient: ["#2193b0", "#6dd5ed"],
        title: "There's a thunderstorm outside",
        subtitle: "beware of lightning strikes",
    },
    Snow: {
        iconName: "snow",
        gradient: ["#1488CC", "#2B32B2"],
        title: "It is snowing",
        subtitle: "time to build a snowman",
    },
    Atmosphere: {
        iconName: "logo-soundcloud",
        gradient: ["#74ebd5", "#ACB6E5"],
        title: "",
        subtitle: "",
    },
    Rain: {
        iconName: "rainy",
        gradient: ["#9CECFB", "#65C7F7", "#0052D4"],
        title: "It is raining",
        subtitle: "don't forget the umbrella",
    },
    Drizzle: {
        iconName: "rainy",
        gradient: ["#2193b0", "#6dd5ed"],
        title: "Drizzling rain",
        subtitle: "you can get a little wet",
    },
    Clear: {
        iconName: "sunny",
        gradient: ["#4CA1AF", "#C4E0E5"],
        title: "Sunny",
        subtitle: "it's time to sunbathe",
    },
    Clouds: {
        iconName: "cloud",
        gradient: ["#6190E8", "#A7BFE8"],
        title: "It's cloudy today",
        subtitle: "it will be gloomy",
    },
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <Ionicons
                    name={weatherOptions[condition].iconName}
                    size={96}
                    color="#fff"
                />
                <Text style={styles.temp}>{Math.round(temp)}°</Text>
            </View>
            <View style={[styles.halfContainer, styles.textContainer]}>
                <Text style={styles.title}>
                    {weatherOptions[condition].title}
                </Text>
                <Text style={styles.subtitle}>
                    {weatherOptions[condition].subtitle}
                </Text>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start",
    },
    temp: {
        fontSize: 42,
        color: "#fff",
    },
    title: {
        fontSize: 44,
        color: "#fff",
        marginBottom: 10,
    },
    subtitle: {
        color: "#fff",
        fontSize: 24,
    },
});
