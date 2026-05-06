// Code SubmitButton Component Here

function SubmitButton() {
  function mouseEnter() {
    console.log("Mouse Entering");
  }

  function mouseLeave() {
    console.log("Mouse Exiting");
  }
  return (
    <>
      <button onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        Submit Password
      </button>
    </>
  );
}

export default SubmitButton;
