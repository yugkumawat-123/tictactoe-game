const square = (value, children) => {
  return (
    <div>
      {value}
      <h5>Children will be rendered</h5>
      <div>{children}</div>
      <div>{false}</div>
    </div>
  );
};

export default square;
