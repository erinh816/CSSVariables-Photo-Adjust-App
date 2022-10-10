const inputs = document.querySelectorAll(".controls input");
// console.log(inputs);
// document select returns a nodelist, not an array
// sometimes nodelist needs to be converted to array to be able to use array methods
// forEach was added for nodeList, don't have to convert to array to loop

function handleUpdate() {
  //   console.log(this.value);
  const suffix = this.dataset.sizing || ""; //to avoid returning undefined
  //dataset is an object contains all data attributes from that data element
  //in our app, the element is sizing (in html)

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
// inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
