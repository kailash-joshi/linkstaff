function myMove() {
  let id = null;

  //getting element from DOM
  let elem = document.getElementById("square");
  const wh = window.innerHeight;
  //initial position of square
  let top = 50;
  let left = 0;

  //setInterval method to increase or decrease position of square
  clearInterval(id);

  //method to move square from top left to bottom right
  const frameDown = () => {
    if (top + 50 + 10 < wh) {
      top += 10;
      left += 10;
      elem.style.top = top + "px";
      elem.style.left = left + "px";
    } else {
      clearInterval(id);
      id = setInterval(frameUp, 1000);
    }
  };

  //method to move square from bottom right to top left
  const frameUp = () => {
    if (top - 50 > 0) {
      top -= 10;
      left -= 10;
      elem.style.top = top + "px";
      elem.style.left = left + "px";
    } else {
      clearInterval(id);
      id = setInterval(frameDown, 1000);
    }
  };
  id = setInterval(frameDown, 1000);
}
