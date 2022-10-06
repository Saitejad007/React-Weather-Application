import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  background: linear-gradient(to top, #0575e6, #021b79);
`;

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  text-align: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  background: #eeeeee;
  border-radius: 32px;
`;

export const SectionContainer = styled(SearchContainer)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  box-shadow: -3px 7px 55px 2px rgba(30, 30, 60, 0.35);
  padding: 10px;
`;

export const DetailsContainer = styled(SectionContainer)`
  box-shadow: none;
  margin: 0;
`;

export const Input = styled.input`
  width: 80%;
  border: none;
  background: none;
  padding: 10px;
  color: #000;
  font-family: inherit;
  font-weight: 500;
  outline: none;
  margin-left: 16px;
`;

export const Image = styled.img`
  /* width: 150px;
  height: 150px; */
`;

export const IconButton = styled.button`
  padding: 14px;
  border: none;
  outline: none;
  cursor: pointer;
  background: #0575e6;
  border-radius: 32px;
  margin: 8px;
  color: #eee;
  font-weight: bold;
`;

export const Heading = styled.h1`
  font-family: inherit;
  font-weight: 300;
  letter-spacing: 10px;
  font-size: 36px;
  margin: 10px;
  color: #eee;
`;

export const LocationName = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const WeatherCondition = styled(LocationName)``;

export const Temperature = styled.p`
  font-size: 64px;
  font-family: inherit;
  font-weight: bold;
`;

export const Text = styled.p``;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: 0;
  li {
    list-style: none;
    margin: 8px;
    /* border: 1px solid; */
    border-radius: 20px;
    color: #fff;
    padding: 16px;
    width: 80%;
    max-width: 155px;
    background: linear-gradient(60deg, #076585 20%, #fff 80%);
  }
`;

// background: linear-gradient(to right, #bdc3c7, #2c3e50) - rain
//background: linear-gradient(to right, #076585, #fff) - clear sky
//background: linear-gradient(to right, #3d9eaa, #ffe47a)- sunny #ffc45a
//background: linear-gradient(to right, #73c8a9, #373b44) - cloudy
//background: linear-gradient(to right, #4b79a1, #283e51) - darksky
//background: linear-gradient(to right, #4ca1af, #c4e0e5) - snowing
