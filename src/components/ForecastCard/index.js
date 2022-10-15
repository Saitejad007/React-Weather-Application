import React, { useState } from "react";
import {
  Image,
  ForecastText,
  MainData,
  InnerList,
  ListItem,
  InnerListItem,
  ExpandButton,
} from "../GetData/styles";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

export const ForecastCard = (props) => {
  const { forecastData } = props;
  const [showdata, setShowdata] = useState(false);

  const date = new Date(forecastData.date);

  const handleClick = () => {
    if (!showdata) {
      setShowdata(true);
    } else {
      setShowdata(false);
    }
  };

  const sunrise =
    forecastData.sunrise !== ""
      ? new Date(forecastData.sunrise * 1000).toLocaleTimeString()
      : "";
  const sunset =
    forecastData.sunset !== ""
      ? new Date(forecastData.sunset * 1000).toLocaleTimeString()
      : "";

  return (
    <ListItem>
      <MainData>
        <ForecastText>{date.toDateString()}</ForecastText>
        <Image
          alt="weather icon"
          src={
            forecastData.iconUrl !== ""
              ? ` https://www.weatherbit.io/static/img/icons/${forecastData.iconUrl}.png`
              : ""
          }
          w="48px"
        />
        <div>
          <ForecastText>
            {Math.round(forecastData.minTemperature)}°<span>C</span>
          </ForecastText>
          <ForecastText>
            {Math.round(forecastData.maxTemperature)}°<span>C</span>
          </ForecastText>
        </div>
        <ExpandButton onClick={handleClick}>
          {showdata ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </ExpandButton>
      </MainData>
      {showdata ? (
        <motion.div
          className="additional-data-container"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <InnerList>
            <InnerListItem>Clouds: {forecastData.clouds}%</InnerListItem>
            <InnerListItem>
              Forecast: {forecastData.weatherCondition}
            </InnerListItem>
            <InnerListItem>Feel: {forecastData.feelsLike}°c</InnerListItem>
            <InnerListItem>
              wind: {Math.round(forecastData.wind * 3.6)} km/h{" "}
              {forecastData.windDirection}
            </InnerListItem>
            <InnerListItem>
              Vis: {Math.round(forecastData.visibility)} km
            </InnerListItem>
            <InnerListItem>UV: {forecastData.uv}</InnerListItem>
            <InnerListItem>Humidity: {forecastData.humidity}%</InnerListItem>
            {/* <InnerListItem>Pres: {forecastData.pressure} hPa</InnerListItem> */}
            <InnerListItem>
              Precip: {forecastData.precipitation} mm
            </InnerListItem>
            <InnerListItem>Sunrise: {sunrise}</InnerListItem>
            <InnerListItem>Sunset: {sunset}</InnerListItem>
          </InnerList>
        </motion.div>
      ) : null}
    </ListItem>
  );
};
