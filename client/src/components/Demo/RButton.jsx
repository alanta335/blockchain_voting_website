
import useEth from "../../contexts/EthContext/useEth";

function ContractBtns({ setValue, setValue1, setValue2, setValue3, setValue4 }) {
    const { state: { contract, accounts } } = useEth();

    const read = async () => {
        const value = await contract.methods.read().call({ from: accounts[0] });
        const value1 = await contract.methods.read1().call({ from: accounts[0] });
        const value2 = await contract.methods.read2().call({ from: accounts[0] });
        const value3 = await contract.methods.read3().call({ from: accounts[0] });
        const value4 = await contract.methods.read4().call({ from: accounts[0] });
        setValue(value);
        setValue1(value1);
        setValue2(value2);
        setValue3(value3);
        setValue4(value4);
    };


    return (
        <button className="btns" onClick={read}>
            show the vote count
        </button>
    );
}

export default ContractBtns;
