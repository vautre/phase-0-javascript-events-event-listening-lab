function addingEventListener() {
}
function addingEventListener() {
    const input = document.querySelector("#button");
  
    if (input) {
      function clickAlert() {
        alert('I was clicked!');
      }
      input.addEventListener('click', clickAlert);
    }
  }
  
  // Call the function to bind the event listener
  addingEventListener();
  
  // Simulate a click event
  let alertCalled = false;
  window.alert = () => {
    alertCalled = true;
  };
  
  const input = document.getElementById('button');
  input.click();