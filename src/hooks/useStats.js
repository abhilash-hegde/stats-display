import { mean, median, std, mode } from "mathjs";

const useStats = (dataSet = []) => {
  const formatNum = (value) => value?.toFixed(6);
  if (dataSet.length === 0) return [0, 0, 0, 0];

  const meanValue = formatNum(mean(dataSet));
  const medianValue = formatNum(median(dataSet));
  const stdDeviationValue = formatNum(std(dataSet));
  const modeValue = mode(dataSet)
    .map((val) => formatNum(val))
    .toString();

  return [meanValue, medianValue, stdDeviationValue, modeValue];
};

export default useStats;
