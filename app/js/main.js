class WeightConverter {
  constructor() {
    this.input = document.querySelector(".weight__input");
    this.btn = document.querySelector(".weight__btn");
    this.grams = document.querySelector(".grams");
    this.ounces = document.querySelector(".ounces");
    this.pounds = document.querySelector(".pounds");
    this.ton = document.querySelector(".ton");
    this.error = document.querySelector(".weight__error");
    this.OUNCES = 0.02834952;
    this.POUNDS = 0.45359237;
  }
  convert() {
  this.btn.addEventListener("click", () => {
      let inputValue = this.input.value;
      if(inputValue === "" || inputValue === null) {
        this.error.classList.add("active");
      } else {
        let gramsValue = inputValue * 1000;
        let ouncesValue = inputValue / this.OUNCES;
        let poundsValue = inputValue / this.POUNDS;
        let tonValue = inputValue / 1000;

        this.grams.textContent = Number(gramsValue).toFixed(2);
        this.ounces.textContent = Number(ouncesValue).toFixed(2);
        this.pounds.textContent = Number(poundsValue).toFixed(2);
        this.ton.textContent = Number(tonValue).toFixed(2);

        inputValue = "";
      }
    });
  }
}
let obj = new WeightConverter();
obj.convert();
