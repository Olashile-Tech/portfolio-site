function changeColor() {
  const colors = ["#f1f2f6", "#dfe4ea", "#ced6e0", "#a4b0be"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
