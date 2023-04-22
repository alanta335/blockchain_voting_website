import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Title from "./Title";

import Contract from "./Contract";
import ContractBtns from "./ContractBtns";
import ContractBtns1 from "./ContractBtns1";
import ContractBtns2 from "./ContractBtns2";

import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";

function Demo() {
  const { state } = useEth();
  const [value, setValue] = useState("?");
  const [value1, setValue1] = useState("?");
  const [value2, setValue2] = useState("?");

  const demo =
    <>
      
      <div className="contract-container">
        <Contract value={value} />
        <Contract value={value1} />
        <Contract value={value2} />
        <ContractBtns setValue={setValue} />
        <ContractBtns1 setValue={setValue1} />
        <ContractBtns2 setValue={setValue2} />
      </div>
      
    </>;

  return (
    <div className="demo">
      <Title />
      {
        !state.artifact ? <NoticeNoArtifact /> :
          !state.contract ? <NoticeWrongNetwork /> :
            demo
      }
    </div>
  );
}

export default Demo;
