import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";

const Title = styled.h4`
  margin: 5px 0px;
  color: ${(props) => props.theme.main};
`;

const TileLabel = ({ label }) => <Title>{label}</Title>;

export default TileLabel;
