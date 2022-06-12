import React from "react";
import styled from "styled-components";

const Title = styled.h4`
  margin: 5px 0px;
  color: ${(props) => props.theme.main};
`;

const TileLabel = ({ label }) => <Title>{label}</Title>;

export default TileLabel;
