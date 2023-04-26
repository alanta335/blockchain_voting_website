import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Title from "./Title";
import RButton from "./RButton";
import Contract from "./Contract";
import ContractBtns from "./ContractBtns";
import ContractBtns1 from "./ContractBtns1";
import ContractBtns2 from "./ContractBtns2";
import ContractBtns3 from "./ContractBtns3";
import ContractBtns4 from "./ContractBtns4";

import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";

function Demo() {
  const { state } = useEth();
  const [value, setValue] = useState("?");
  const [value1, setValue1] = useState("?");
  const [value2, setValue2] = useState("?");
  const [value3, setValue3] = useState("?");
  const [value4, setValue4] = useState("?");

  const demo =
    <>

      <div className="contract-container">
        <div className="buttons">
          <ContractBtns />
          <ContractBtns1 />
          <ContractBtns2 />
          <ContractBtns3 />
          <ContractBtns4 />
        </div>

        <div className="outputs">
          <Contract value={value} name="alan" />
          <Contract value={value1} name="ash" />
          <Contract value={value2} name="may" />
          <Contract value={value3} name="remith" />
          <Contract value={value4} name="alju" />
        </div>
        <div className="bt">
          <RButton setValue={setValue} setValue1={setValue1} setValue2={setValue2} setValue3={setValue3} setValue4={setValue4} />
        </div>
      </div>

    </>;

  return (
    <div className="demo">
      <hr />
      <Title />
      {
        !state.artifact ? <NoticeNoArtifact /> :
          !state.contract ? <NoticeWrongNetwork /> :
            demo
      }
      <hr />
    </div>
  );
}

export default Demo;
