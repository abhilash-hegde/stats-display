import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const fetchCss = css`
  border-radius: 44px;
  width: 375px;
  background-color: ${({ theme }) => theme.btn2};
`;

const formBtn = css`
  width: 30%;
  border-radius: 0px 20px 20px 0px;
  background-color: ${({ theme }) => theme.btn1};
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
  }
`;

const Button = styled(motion.button)`
  display: flex;
  flex-wrap: wrap;
  ${({ styleType }) => (styleType === "form" ? formBtn : fetchCss)}
  border: none;
  height: 4.87rem;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  background-color: #faa916;
  color: #fff;
  outline: none;
  cursor: pointer;
`;

export default Button;
