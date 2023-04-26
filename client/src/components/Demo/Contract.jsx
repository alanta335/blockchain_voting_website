

function Contract({ value, name }) {

  return (
    <code>
      {`number vote for `}{name}{`  = `}
      <span className="secondary-color" >
        {value}
      </span>
    </code>
  );
}

export default Contract;
