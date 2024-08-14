const screen = document.querySelector(".calculator__display");
const nhs = document.querySelectorAll(".btn-keys");
const dot = document.querySelector(".dots");
const operators = document.querySelectorAll(".btn-operator");
const enter = document.querySelector(".equal");
const bksp = document.querySelector(".right");
const clear = document.querySelector(".rigt");

dot.addEventListener("click", () => {
  if (screen.innerHTML.slice(-1) == ".") {
    dot.classList.add("is-depressed");
  } else {
    screen.innerHTML += ".";
  }
});

enter.addEventListener("click", () => {
  let holder = screen.innerHTML;
  if (
    holder.slice(-1) == "+" ||
    holder.slice(-1) == "." ||
    holder.slice(-1) == "-" ||
    holder.slice(-1) == "/" ||
    holder.slice(-1) == "*"
  ) {
    console.log(holder.slice(-1));
    screen.innerHTML = screen.innerHTML.substring(
      0,
      screen.innerHTML.length - 1
    );
  } else {
    screen.innerHTML = eval(screen.innerHTML);
  }
});

bksp.addEventListener("click", () => {
  if (screen.innerHTML.length > 1) {
    screen.innerHTML = screen.innerHTML.substring(
      0,
      screen.innerHTML.length - 1
    );
  }
});

clear.addEventListener("click", () => {
  screen.innerHTML = "0";
});

operators.forEach((items) => {
  items.addEventListener("click", () => {
    if (
      screen.innerHTML.slice(-1) == "+" ||
      screen.innerHTML.slice(-1) == "/" ||
      screen.innerHTML.slice(-1) == "-" ||
      screen.innerHTML.slice(-1) == "*"
    ) {
      items.classList.add("is-depressed");
    } else {
      screen.innerHTML += items.innerText;
    }
  });
});

nhs.forEach((item) => {
  item.addEventListener("click", () => {
    if (screen.innerHTML == 0) {
      screen.innerHTML = item.innerHTML;
    } else {
      screen.innerHTML += item.innerHTML;
    }
  });
});
