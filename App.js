import { Alert, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import axios from "axios";

import Loading from "./components/Loading";
import Weather from "./components/Weather";

const API_KEY = "1036f5c2d2d8558a849e504fcd4a20e6";

export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [temp, setTemp] = useState(0);
    const [condition, setCondition] = useState(null);

    const getCurrentLocation = async () => {
        try {
            await Location.requestForegroundPermissionsAsync();
            const {
                coords: { latitude, longitude },
            } = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.Highest,
                maximumage: 10000,
            });
            await getWeather(latitude, longitude);
            setIsLoading(false);
        } catch (err) {
            Alert.alert("Permission error", "Error message: " + err.message);
            console.log(err);
        }
    };

    async function getWeather(lat, lon) {
        const { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        setTemp(data?.main?.temp);
        setCondition(data?.weather[0]?.main);
    }

    useEffect(() => {
        getCurrentLocation();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {isLoading ? (
                <Loading />
            ) : (
                <Weather temp={temp} condition={condition} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
