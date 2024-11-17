const Checkbox = (status, id) => {
  return (
    <>
      <input type="checkbox" onChange={(e) => {
        console.log(e.target.checked);
      }} id={id} />
    </>
  )
}

export default Checkbox;
