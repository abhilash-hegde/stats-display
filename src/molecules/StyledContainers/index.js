import styled from "styled-components";
import { motion } from "framer-motion";

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.main};
  min-height: 450px;
  min-width: 100vw;
  width: 100vw;
  align-items: center;
  justify-content: space-evenly;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  // height: 340px;
  height: calc(100vh - 450px);
  min-height: 300px;
  min-width: 100vw;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.theme.footer};
`;

const FormContainer = styled.div`
  min-width: 80vw;
  display: table;
  border-collapse: collapse;
  & input {
    border: 0;
    display: block;
    width: 100%;
    min-height: 100%;
    height: 76px;
  }
  & > div {
    padding: 0px;
    width: 100%;
    display: table-cell;
    vertical-align: middle;
  }
  & button {
    min-width: 125px;
    width: 100%;
    height: 78px;
  }
  @media (min-width: 768px) {
    min-width: 40vw;
    & button {
      min-width: 250px;
      width: 100%;
      height: 78px;
    }
  }
`;

const ReloadContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  flex-wrap: wrap;
  min-width: 50vw;
  height: 125px;
  & button {
    margin: 10px;
  }
  @media (min-width: 768px) {
    min-width: 55vw;
  }
`;

const ReloadButtons = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  height: 100px;
  min-width: 100vw;
  gap: 100px;
  background-color: ${(props) => props.theme.footer};
  @media (max-width: 1000px) {
    gap: 50px;
  }
`;

const TileContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  min-width: 200px;
  border-radius: 50%;
  border: 5px solid ${(props) => props.theme.tileBorder};
  background-color: ${(props) => props.theme.tile};
  box-sizing: border-box;
  margin: 10px;
  & h4 {
    margin-top: -15px;
  }
  @media (min-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0px;
    height: 280px;
    width: 280px;
    border: 10px solid ${(props) => props.theme.tileBorder};
  }
`;

export {
  FormContainer,
  FooterContainer,
  MainContainer,
  ReloadContainer,
  ReloadButtons,
  TileContainer,
};
