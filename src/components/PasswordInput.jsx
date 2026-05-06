// Code PasswordInput Component Here

function PasswordInput() {
  function enterPassword() {
    console.log("Entering password…");
  }
  return (
    <>
      <input type="password" onChange={enterPassword}></input>
    </>
  );
}

export default PasswordInput;
