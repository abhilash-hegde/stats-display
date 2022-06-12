import Theme from "theme";
import Main from "organisms/Main";
import Footer from "organisms/Footer";
import { useState } from "react";

function App() {
  const [inputData, setInputData] = useState([]);
  const [currentJson, setCurrentJson] = useState("data-1234.json");
  const onDataReload = (jsn) => {
    setInputData([]);
    setCurrentJson(jsn);
  };

  const onInputNumber = (val) => {
    setInputData((data) => [val, ...data]);
  };

  return (
    <div className='App' data-testid='app'>
      <Theme>
        <Main currentJson={currentJson} inputData={inputData} />
        <Footer onDataReload={onDataReload} onInputNumber={onInputNumber} />
      </Theme>
    </div>
  );
}

export default App;
