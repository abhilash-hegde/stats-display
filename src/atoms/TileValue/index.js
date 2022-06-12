import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Value = styled(motion.h3)`
  margin: 0px;
  user-select: none;
  font-size: 1.5rem;
`;

const statVariants = {
  open: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 3,
      ease: "easeInOut",
    },
  },
  closed: { opacity: 0 },
};

const TileValue = ({ value }) => (
  <Value
    key={value}
    variants={statVariants}
    initial='closed'
    animate='open'
    exit='closed'
    whileHover={{ scale: 1.2}}
    whileTap={{ scale: 0.8 }}
  >
    {value}
  </Value>
);

export default TileValue;
