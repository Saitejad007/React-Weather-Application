import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);
  background: linear-gradient(
    to bottom,
    #08244f,
    #0b2f6a,
    #0e3a87,
    #10449f,
    #124bb4,
    #134cb5,
    #1048b1,
    #0b42ab
  ); /*#0575e6, #021b79);*/
`;

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flex};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`;

export const CurrentWeatherResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 992px) {
    width: 40vw;
    justify-content: space-between;
    padding-top: 20px;
  }
`;

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  text-align: center;
`;

export const CurrentWeatherContainer = styled.div`
  @media screen and (min-width: 992px) {
    display: flex;
    flex-direction: row;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

export const LogoContainer = styled(Header)`
  display: flex;
  margin: 0;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  background: #eeeeee;
  border-radius: 32px;
  /* max-width: 400px; */
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const HeaderSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  background: #eeeeee;
  border-radius: 32px;
  /* flex-grow: 1; */
  max-width: 500x;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flex};
  align-items: center;
  margin: 10px;
  justify-content: center;
  border-radius: 32px;
  color: #fff;
  background: none;
  padding: ${(props) => props.p};
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flex};
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  background: none;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  padding: ${(props) => props.p};
  background: rgba(0, 16, 38, 0.3);
  mix-blend-mode: normal;
  color: #fff;
  margin: 10px;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
`;

export const DetailsContainer = styled(SectionContainer)`
  box-shadow: none;
  margin: 0;
  flex-direction: ${(props) => props.flex};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  padding: ${(props) => props.p};
  width: ${(props) => props.w};
`;

export const Input = styled.input`
  width: 100%;
  /* max-width: 400px; */
  border: none;
  background: none;
  padding: 8px;
  color: #000;
  font-family: inherit;
  font-weight: 500;
  outline: none;
  margin-left: 16px;
`;

export const Image = styled.img`
  margin: 0;
  height: ${(props) => props.h};
  width: ${(props) => props.w};
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
  font-weight: 700;
  font-size: 14px;
  margin: 10px;
  color: #eee;
`;

export const LocationName = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #fff;
`;

export const Button = styled.button`
  border: none;
  background: none;
  color: #fff;
  font-size: 24px;
  padding: 4px;
  cursor: pointer;
`;

export const WeatherCondition = styled(LocationName)`
  font-weight: 400;
  font-size: 18px;
`;

export const Temperature = styled.p`
  font-size: 64px;
  font-family: inherit;
  font-weight: bold;
  padding: 0;
  span {
    font-weight: 400;
  }
`;

export const Text = styled.p`
  font-size: ${(props) => props.font};
  font-weight: ${(props) => props.weight};
  padding: 4px;
`;

export const ForecastText = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding: 4px;
  span {
    font-size: 11px;
  }
`;

export const Icon = styled.p`
  font-size: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: 0;
  background: rgba(0, 16, 38, 0.3);
  mix-blend-mode: normal;
  color: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  margin: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 8px;
  color: #fff;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);
  padding: 10px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  div {
    display: flex;
    justify-content: space-around;
  }
`;

export const MainData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const InnerList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  background: rgba(0, 16, 38, 0.35);
  padding: 10px;
  border-radius: 16px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  @media screen and (min-width: 768px) {
    padding: 16px;
    justify-content: space-between;
  }
`;

export const InnerListItem = styled.li`
  list-style: none;
  text-align: left;
  width: 50%;
  font-family: inherit;
  font-size: 12px;
  padding: 3px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    width: 50%;
    text-align: center;
    padding: 5px;
    font-size: 14px;
  }
`;

export const ExpandButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  color: blue;
  background: #ffffff;
  border-radius: 32px;
  padding: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  transition: all 0.4s ease-in-out;
  &:hover {
    scale: 1.25;
    transition: all 0.4s ease-in-out;
  }
`;

export const TodayText = styled.p`
  font-family: inherit;
  font-size: 20px;
  font-weight: 700;
`;

export const Loader = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 78vh;
  @media screen and (min-width: 768px) {
    height: 83.9vh;
  }
`;

export const LoadingText = styled(Text)`
  color: #ffffff;
  font-weight: 500;
  margin: 10px;
`;
// background: linear-gradient(to right, #bdc3c7, #2c3e50) - rain
//background: linear-gradient(to right, #076585, #fff) - clear sky
//background: linear-gradient(to right, #3d9eaa, #ffe47a)- sunny #ffc45a
//background: linear-gradient(to right, #73c8a9, #373b44) - cloudy
//background: linear-gradient(to right, #4b79a1, #283e51) - darksky
//background: linear-gradient(to right, #4ca1af, #c4e0e5) - snowing
