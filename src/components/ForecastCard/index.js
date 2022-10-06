import {
  Heading,
  HStack,
  Image,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import React from "react";
import { MdNightsStay } from "react-icons/md";

export const ForecastCard = (props) => {
  const { forecastData } = props;

  const date =
    forecastData.date !== "" ? new Date(forecastData.date * 1000) : "";

  return (
    <li>
      <VStack>
        <Text>{date.toDateString()}</Text>
        <Text>{date.toLocaleTimeString()}</Text>
      </VStack>
      <HStack grow="1" justify="center">
        <Heading as="h3" textAlign="center">
          {Math.round(forecastData.minTemperature)}°C
        </Heading>
        <MoonIcon />
      </HStack>
      <HStack justify="center">
        <Heading as="h3">{Math.round(forecastData.maxTemperature)}°C</Heading>
        <SunIcon />
      </HStack>
      <Text>
        {forecastData.weatherCondition} - {forecastData.description}
      </Text>
    </li>
  );
};
