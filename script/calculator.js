const input = document.querySelector("input");
const actions = {
  action(val) {
    return ["=", "RESET", "DEL"].includes(val);
  },
  clear() {
    input.value = "";
  },
  del() {
    input.value = input.value.slice(0, -1);
  },
  equal() {
    let value = input.value.replaceAll("x", "*");
    value = value.replaceAll("−", "-");

    let calculate = eval(value);
    input.value = calculate;
  },
};

function Click(val) {
  let temp = actions.action(val);

  if (!temp) {
    input.value += val;
    return;
  }
  if (val === "RESET") {
    actions.clear();
    return;
  }
  if (val === "=") {
    actions.equal();
    return;
  }
  if (val === "DEL") {
    actions.del();
    return;
  }
}

const buttons = [...document.getElementsByTagName("button")];
buttons.forEach(btn => {
  btn.addEventListener("click", function () {
    Click(this.textContent.trim());
  });
});
