import React from "react";
import { Image, ForecastText } from "../GetData/styles";

export const ForecastCard = (props) => {
  const { forecastData } = props;

  const date = new Date(forecastData.date);

  return (
    <li>
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
    </li>
  );
};
