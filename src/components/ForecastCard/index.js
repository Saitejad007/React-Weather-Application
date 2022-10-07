import React from "react";
import { Image, Text, ForecastText } from "../GetData/styles";

export const ForecastCard = (props) => {
  const { forecastData } = props;

  const date = new Date(forecastData.date);

  let day = "";

  // eslint-disable-next-line default-case
  switch (date.getDay()) {
    case 0:
      day = "Sun";
      break;
    case 1:
      day = "Mon";
      break;
    case 2:
      day = "Tue";
      break;
    case 3:
      day = "Wed";
      break;
    case 4:
      day = "Thu";
      break;
    case 5:
      day = "Fri";
      break;
    case 6:
      day = "Sat";
      break;
  }

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
