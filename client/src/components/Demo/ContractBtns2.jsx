import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function ContractBtns({ setValue }) {
  const { state: { contract, accounts } } = useEth();

  const read = async () => {
    const value = await contract.methods.read2().call({ from: accounts[0] });
    setValue(value);
  };
  

  const write = async e => {
    
    await contract.methods.vote2().send({ from: accounts[0] });
  };
  return (
    <div className="btns">

      <button onClick={read}>
        read()
      </button>

      <div onClick={write} className="input-btn">
        vote
      </div>

    </div>
  );
}

export default ContractBtns;
