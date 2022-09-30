/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import { Container, Input, IconButton, Flex } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const GetData = () => {
  const LocationApiKey = "445fdddbc7ff459b7f1b193c22bdb132";
  const temp = "c0d290eeee9dd399b017a6d2ba64be7e";
  const baseUrl = "https://api.openweathermap.org/data/2.5";

  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({
    clouds: "",
    temperature: "",
    feelsLike: "",
    minTemperature: "",
    maxTemperature: "",
    pressure: "",
    humidity: "",
    visibility: "",
    wind: "",
    weatherCondition: "",
    description: "",
    sunrise: "",
    sunset: "",
  });
  const [forecast, setForecast] = useState([]);

  const getCurrentWeather = async () => {
    const response = await fetch(
      `${baseUrl}/weather?q=${location}&units=metric&appid=${temp}`
    );
    if (response.ok) {
      const data = await response.json();
      setWeather((previousState) => ({
        ...previousState,
        clouds: data.clouds.all,
        temperature: data.main.temp,
        feelsLike: data.main.feels_like,
        minTemperature: data.main.temp_min,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        maxTemperature: data.main.temp_max,
        visibility: data.visibility,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        weatherCondition: data.weather[0].main,
        description: data.weather[0].description,
        wind: data.wind.speed,
      }));
      setLocation("");
    }
    const url = `${baseUrl}/forecast/?q=${location}&cnt=4&units=metric&appid=${temp}`;
    try {
      const weatherData = await fetch(url);
      if (weatherData.ok) {
        const weather = await weatherData.json();
        const list = weather.list;
        const convertedList = list.map((eachItem) => ({
          clouds: eachItem.clouds,
          date: eachItem.dt_txt,
          maxTemperature: eachItem.main.temp_max,
          minTemperature: eachItem.main.temp_min,
          feelsLike: eachItem.main.feels_like,
          weatherCondition: eachItem.weather[0].main,
          description: eachItem.weather[0].description,
          wind: eachItem.wind.speed,
        }));
        setForecast(convertedList);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <Container>
      <Flex>
        <Input
          type="text"
          value={location}
          onChange={handleChange}
          onKeyPress={({ key }) => {
            key === "Enter" && getCurrentWeather();
          }}
          placeholder="Enter City..."
        />
        <IconButton
          aria-label="Search database"
          icon={<SearchIcon />}
          onClick={getCurrentWeather}
        />
      </Flex>
    </Container>
  );
};
