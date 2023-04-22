import { EthProvider } from "./contexts/EthContext";

import Setup from "./components/Setup";
import Demo from "./components/Demo";


function App() {
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          
          <hr />
          <Setup />
          <hr />
          <Demo />
          <hr />
          
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
