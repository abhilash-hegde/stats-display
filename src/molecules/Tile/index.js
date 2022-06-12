import React from "react";
import PropTypes from "prop-types";
import TileValue from "atoms/TileValue";
import TileLabel from "atoms/TileLabel";
import { TileContainer } from "molecules/StyledContainers";

const variants = {
  open: {
    scale: [0.5, 1.2, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.7, 1],
    },
  },
  closed: {
    scale: 0.2,
  },
};

const Tile = ({ value, label }) => (
  <TileContainer
    data-testid={label}
    variants={variants}
    initial='closed'
    animate='open'
    exit='closed'
  >
    <TileLabel label={label} />
    <TileValue value={value} />
  </TileContainer>
);

Tile.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default Tile;
