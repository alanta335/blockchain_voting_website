
import useEth from "../../contexts/EthContext/useEth";

function ContractBtns() {
  const { state: { contract, accounts } } = useEth();




  const write = async e => {

    await contract.methods.vote1().send({ from: accounts[0] });
  };
  return (
    <button onClick={write} className="btns">
      <img className="im" src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" />
      vote for ash
    </button>
  );
}

export default ContractBtns;
