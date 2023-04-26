
import useEth from "../../contexts/EthContext/useEth";

import React from 'react';
function ContractBtns() {
  const { state: { contract, accounts } } = useEth();



  const write = async e => {

    await contract.methods.vote().send({ from: accounts[0] });
  };
  return (
    <button onClick={write} className="btns">
      <img className="im" src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" />
      vote for alan
    </button>
  );
}

export default ContractBtns;
