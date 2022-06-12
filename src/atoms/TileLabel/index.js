import React from "react";
import styled from "styled-components";

const Title = styled.h4`
  margin: 5px 0px;
  color: ${(props) => props.theme.main};
  font-size: 1.5rem;
`;

const TileLabel = ({ label }) => <Title>{label}</Title>;

export default TileLabel;
