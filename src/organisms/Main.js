import React, { useState, useEffect } from "react";
import Tile from "molecules/Tile";
import axios from "axios";
import { MainContainer } from "molecules/StyledContainers";
import useStats from "hooks/useStats";

const Main = ({ currentJson, inputData = [] }) => {
  const [data, setData] = useState([]);

  const [meanValue, medianValue, stdDeviationValue, modeValue] = useStats([
    ...inputData,
    ...data,
  ]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`./${currentJson}`);
      setData(response.data.data ?? []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentJson]);

  return (
    <MainContainer>
      <Tile value={meanValue} label='Mean' />
      <Tile value={medianValue} label='Median' />
      <Tile value={stdDeviationValue} label='Std Deviation' />
      <Tile value={modeValue} label='Mode' />
    </MainContainer>
  );
};

export default Main;
