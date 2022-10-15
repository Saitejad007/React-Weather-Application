/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import { ForecastCard } from "../ForecastCard";
import { BiSearch } from "react-icons/bi";
import { MdVisibility } from "react-icons/md";
import {
  WiShowers,
  WiStrongWind,
  WiHumidity,
  WiBarometer,
} from "react-icons/wi";
import { BiCurrentLocation } from "react-icons/bi";
import { BsFillSunsetFill, BsFillSunriseFill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import {
  MainContainer,
  Loader,
  Input,
  IconButton,
  LoadingText,
  SectionContainer,
  SearchContainer,
  HeaderSearchContainer,
  IconContainer,
  CurrentWeatherContainer,
  ResponsiveContainer,
  DetailsContainer,
  CurrentWeatherResponsiveContainer,
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
  TodayText,
} from "./styles";
import { ResponsiveMap } from "../ResponsiveMap";
import { PropagateLoader } from "react-spinners";
import { Footer } from "../Footer";

export const GetData = () => {
  const API_KEY = "cebae210006b4c97bdb902dac1ad1522";
  const color = "#ffffff";
  const [location, setLocation] = useState("");
  let [loading, setLoading] = useState(true);
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
    coords: {
      lat: 28.6448,
      lon: 77.216721,
    },
  });
  const [forecast, setForecast] = useState([]);

  const getCurLocationWeather = async (position) => {
    setLoading(true);
    const currentWeatherUrl = `https://api.weatherbit.io/v2.0/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}&key=${API_KEY}`;
    const response = await fetch(currentWeatherUrl);
    if (response.ok) {
      const curWeatherJsonObject = await response.json();
      const data = curWeatherJsonObject.data[0];

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
        coords: {
          lat: data.lat,
          lon: data.lon,
        },
      }));
      setLocation("");
    }
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${position.coords.latitude}&lon=${position.coords.longitude}&key=${API_KEY}`;
    try {
      const forecastData = await fetch(url);
      if (forecastData.ok) {
        const forecastJsonObject = await forecastData.json();
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
        const updatedList = convertedList.slice(1);
        setForecast(updatedList);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // console.log(position);
        if (position.coords !== null) {
          getCurLocationWeather(position);
        }
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  }, []);

  const getCurrentWeather = async () => {
    setLoading(true);

    const currentWeatherUrl = `https://api.weatherbit.io/v2.0/current?city=${location}&key=${API_KEY}`;
    const response = await fetch(currentWeatherUrl);
    if (response.ok) {
      const curWeatherJsonObject = await response.json();
      const data = curWeatherJsonObject.data[0];
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
        coords: {
          lat: data.lat,
          lon: data.lon,
        },
      }));
      setLocation("");
    }
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&days=8&key=${API_KEY}`;
    try {
      const forecastData = await fetch(url);
      if (forecastData.ok) {
        const forecastJsonObject = await forecastData.json();
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
        const updatedList = convertedList.slice(1);
        setForecast(updatedList);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const precipitation =
    weather.precipitation !== null ? weather.precipitation : 0;

  const date = new Date();

  return (
    <MainContainer>
      <ResponsiveContainer>
        <Header>
          <LogoContainer>
            <img
              src="https://img.icons8.com/3d-fluency/48/000000/storm.png"
              alt="weather icon"
            />
            <Heading>Weather Station</Heading>
          </LogoContainer>
          <HeaderSearchContainer>
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
              onClick={getCurrentWeather}
            >
              <BiSearch />
            </IconButton>
          </HeaderSearchContainer>
          <LogoContainer>
            <Button>
              <BiCurrentLocation />
            </Button>
            <LocationName>
              {weather.name}, {weather.country}
            </LocationName>
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
        {loading ? (
          <Loader>
            <LoadingText>
              We're fetching the data, meanwhile just chill!
            </LoadingText>
            <PropagateLoader
              color={color}
              loading={loading}
              // cssOverride={override}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </Loader>
        ) : (
          <div>
            <CurrentWeatherContainer>
              <CurrentWeatherResponsiveContainer>
                <SectionContainer flex="column" p="8px">
                  <TodayText>Today - {date.toLocaleString()}</TodayText>
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

                    <WeatherCondition>
                      {weather.weatherCondition}
                    </WeatherCondition>
                    <DetailsContainer>
                      <Text font="18px" weight="400">
                        Clouds: {weather.clouds}%
                      </Text>
                      <Text font="18px" weight="400">
                        Feel: {Math.round(weather.feelsLike)}°c
                      </Text>
                    </DetailsContainer>
                  </DetailsContainer>
                </SectionContainer>
                <IconContainer flex="row" p="5px">
                  <DetailsContainer
                    flex="row"
                    justify="center"
                    align="center"
                    p="10px"
                    w="30%"
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
                    justify="center"
                    align="center"
                    w="30%"
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
                    justify="center"
                    align="center"
                    w="30%"
                  >
                    <Icon>
                      <WiHumidity />
                    </Icon>
                    <Text font="14px" weight="500">
                      {weather.humidity}%
                    </Text>
                  </DetailsContainer>
                  <DetailsContainer
                    p="10px"
                    flex="row"
                    justify="center"
                    align="center"
                    w="30%"
                  >
                    <Icon>
                      <MdVisibility />
                    </Icon>
                    <Text font="14px" weight="500">
                      {weather.visibility} km
                    </Text>
                  </DetailsContainer>
                  <DetailsContainer
                    p="10px"
                    flex="row"
                    justify="center"
                    align="center"
                    w="30%"
                  >
                    <Icon>
                      <WiBarometer />
                    </Icon>
                    <Text font="14px" weight="500">
                      {weather.pressure} hPa
                    </Text>
                  </DetailsContainer>
                  <DetailsContainer
                    p="10px"
                    flex="row"
                    justify="center"
                    align="center"
                    w="30%"
                  >
                    <Text font="14px" weight="500">
                      <span>UV</span> {Math.round(weather.uv, 2)}
                    </Text>
                  </DetailsContainer>
                  <DetailsContainer
                    p="10px"
                    flex="row"
                    justify="center"
                    align="center"
                    w="30%"
                  >
                    <Text font="14px" weight="500">
                      aqi {weather.airquality}
                    </Text>
                  </DetailsContainer>
                  <DetailsContainer
                    p="10px"
                    flex="row"
                    justify="center"
                    align="center"
                    w="30%"
                  >
                    <Icon>
                      <BsFillSunriseFill />
                    </Icon>
                    <Text font="14px" weight="500">
                      {weather.sunrise}
                    </Text>
                  </DetailsContainer>
                  <DetailsContainer
                    p="10px"
                    flex="row"
                    justify="center"
                    align="center"
                    w="30%"
                  >
                    <Icon>
                      <BsFillSunsetFill />
                    </Icon>
                    <Text font="14px" weight="500">
                      {weather.sunset}
                    </Text>
                  </DetailsContainer>
                </IconContainer>
              </CurrentWeatherResponsiveContainer>
              {/* Raw embeddable frame of RainViewer API service */}
              {/* <iframe
          src="https://www.rainviewer.com/map.html?loc=37.44,-97.2729,5&oFa=0&oC=1&oU=0&oCS=1&oF=0&oAP=1&c=3&o=90&lm=1&layer=radar&sm=1&sn=1"
          width="100%"
          frameborder="0"
          style={{ border: 0, height: "50vh" }}
          allowfullscreen
        ></iframe> */}
              <ResponsiveMap
                coordinates={weather.coords}
                temperature={weather.temperature}
              />
            </CurrentWeatherContainer>
            <List>
              {forecast.map((eachItem) => (
                <ForecastCard forecastData={eachItem} key={eachItem.id} />
              ))}
            </List>
          </div>
        )}
      </ResponsiveContainer>
      <Footer />
    </MainContainer>
  );
};
