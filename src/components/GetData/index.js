/* eslint-disable no-unused-expressions */
import React, { useState } from "react";

import { ForecastCard } from "../ForecastCard";
import { BiSearch } from "react-icons/bi";
import { WiShowers, WiStrongWind, WiHumidity } from "react-icons/wi";
import { BiCurrentLocation } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import {
  Container,
  Input,
  IconButton,
  SectionContainer,
  SearchContainer,
  IconContainer,
  ResponsiveContainer,
  DetailsContainer,
  Heading,
  LocationName,
  WeatherCondition,
  Text,
  Icon,
  Image,
  List,
  Temperature,
  LogoContainer,
  Header,
  Button,
} from "./styles";

export const GetData = () => {
  const API_KEY = "cebae210006b4c97bdb902dac1ad1522";
  // const baseUrl = "https://api.openweathermap.org/data/2.5";

  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({
    name: "",
    clouds: "",
    temperature: "",
    feelsLike: "",
    pressure: "",
    humidity: "",
    visibility: "",
    wind: "",
    weatherCondition: "",
    sunrise: "",
    sunset: "",
    iconUrl: "",
    country: "",
    airquality: "",
    precipitation: "",
    date: "",
    windDirection: "",
    uv: "",
  });
  const [forecast, setForecast] = useState([]);

  const getCurrentWeather = async () => {
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/current?&city=${location}&key=${API_KEY}`
    );
    if (response.ok) {
      const curWeatherJsonObject = await response.json();
      const data = curWeatherJsonObject.data[0];
      console.log(data);
      setWeather((previousState) => ({
        ...previousState,
        name: data.city_name,
        country: data.country_code,
        clouds: data.clouds,
        temperature: data.temp,
        feelsLike: data.app_temp,
        airquality: data.aqi,
        precipitation: data.precip,
        pressure: data.pres,
        humidity: data.rh,
        date: data.datetime,
        visibility: data.vis,
        sunrise: data.sunrise,
        sunset: data.sunset,
        weatherCondition: data.weather.description,
        windDirection: data.wind_cdir,
        wind: data.wind_spd,
        iconUrl: data.weather.icon,
        uv: data.uv,
      }));
      setLocation("");
    }
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&days=7&key=${API_KEY}`;
    try {
      const weatherData = await fetch(url);
      if (weatherData.ok) {
        const forecastJsonObject = await weatherData.json();
        const forecastList = forecastJsonObject.data;
        const convertedList = forecastList.map((eachItem) => ({
          id: uuidv4(),
          clouds: eachItem.clouds,
          date: eachItem.datetime,
          maxTemperature: eachItem.max_temp,
          minTemperature: eachItem.min_temp,
          feelsLike: eachItem.temp,
          weatherCondition: eachItem.weather.description,
          wind: eachItem.wind_spd,
          windDirection: eachItem.wind_cdir,
          iconUrl: eachItem.weather.icon,
          visibility: eachItem.vis,
          uv: eachItem.uv,
          humidity: eachItem.rh,
          pressure: eachItem.pres,
          precipitation: eachItem.precip,
          moonRise: eachItem.moonrise_ts,
          moonSet: eachItem.moonset_ts,
          sunrise: eachItem.sunrise_ts,
          sunset: eachItem.sunset_ts,
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

  // const sunrise =
  //   weather.sunrise !== ""
  //     ? new Date(weather.sunrise * 1000).toLocaleTimeString()
  //     : "";
  // const sunset =
  //   weather.sunset !== ""
  //     ? new Date(weather.sunset * 1000).toLocaleTimeString()
  //     : "";

  // console.log(sunrise);

  const precipitation =
    weather.precipitation != "null" ? weather.precipitation : 0;

  return (
    <Container>
      <ResponsiveContainer>
        <Header>
          <LogoContainer>
            <img src="https://img.icons8.com/3d-fluency/48/000000/storm.png" />
            <Heading>Weather Station</Heading>
          </LogoContainer>
          <LogoContainer>
            <Button>
              <BiCurrentLocation />
            </Button>
            <LocationName>{weather.name}</LocationName>
          </LogoContainer>
        </Header>

        <SearchContainer>
          <Input
            type="text"
            value={location}
            onChange={handleChange}
            onKeyPress={({ key }) => {
              key === "Enter" && getCurrentWeather();
            }}
            placeholder="Enter City..."
          />
          <IconButton aria-label="Search database" onClick={getCurrentWeather}>
            <BiSearch />
          </IconButton>
        </SearchContainer>
        <SectionContainer flex="column" p="8px">
          <Image
            alt="weather icon"
            src={
              weather.iconUrl !== ""
                ? ` https://www.weatherbit.io/static/img/icons/${weather.iconUrl}.png`
                : ""
            }
          />

          <DetailsContainer flex="column" align="center">
            <Temperature>
              {Math.round(weather.temperature)}°<span>c</span>
            </Temperature>

            <WeatherCondition>{weather.weatherCondition}</WeatherCondition>
            <DetailsContainer>
              <Text font="18px" weight="400">
                Clouds: {weather.clouds}%
              </Text>
              <Text font="18px" weight="400">
                Feel: {Math.round(weather.feelsLike)}°C
              </Text>
            </DetailsContainer>
          </DetailsContainer>
        </SectionContainer>
        <IconContainer flex="row" p="5px">
          <DetailsContainer
            flex="row"
            justify="space-around"
            align="center"
            p="10px"
          >
            <Icon>
              <WiShowers />
            </Icon>
            <Text font="14px" weight="500">
              {precipitation}
              mm/h
            </Text>
          </DetailsContainer>
          <DetailsContainer
            p="10px"
            flex="row"
            justify="space-around"
            align="center"
          >
            <Icon>
              <WiStrongWind />
            </Icon>
            <Text font="14px" weight="500">
              {Math.round(weather.wind)}km/h
            </Text>
          </DetailsContainer>
          <DetailsContainer
            p="10px"
            flex="row"
            justify="space-around"
            align="center"
          >
            <Icon>
              <WiHumidity />
            </Icon>
            <Text font="14px" weight="500">
              {weather.humidity}%
            </Text>
          </DetailsContainer>
        </IconContainer>

        <List>
          {forecast.map((eachItem) => (
            <ForecastCard forecastData={eachItem} key={eachItem.id} />
          ))}
        </List>

        {/* <Flex justify="space-around">
        <Flex direction="column" p="1">
          <Text p="1">Min- {Math.round(weather.minTemperature)}°C</Text>
          <Text p="1">Max- {Math.round(weather.maxTemperature)}°C</Text>
          <Text p="1">Feel- {Math.round(weather.feelsLike)}°C</Text>
          <Text p="1">Humidity- {weather.humidity}%</Text>
        </Flex>

        <Flex direction="column" p="1">
          <Text p="1">Pressure- {weather.pressure}hPa</Text>
          <Text p="1">Wind- {Math.ceil(weather.wind * 3.6)}Km/h</Text>
          <Text p="1">Sunrise- {sunrise.toLocaleString()}</Text>
          <Text p="1">Sunset- {sunset.toLocaleString()}</Text>
          <Text p="1">
            Visibility- {Math.round(weather.visibility / 1000)}KM
          </Text>
        </Flex>
      </Flex>
      <Flex mt="2">
       
      </Flex> */}
      </ResponsiveContainer>
    </Container>
  );
};
