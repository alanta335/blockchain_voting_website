import { useRef, useEffect } from "react";

function Contract({ value }) {

  return (
    <code>
      {`value = `}
      <span className="secondary-color" >
        {value}
      </span>
    </code>
  );
}

export default Contract;
