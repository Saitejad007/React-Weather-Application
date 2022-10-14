import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

export const FooterText = styled.p`
  font-family: inherit;
  color: #fff;
  font-size: 14.5px;
  letter-spacing: 1px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    text-align: center;
  }
`;
