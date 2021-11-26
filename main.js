"use strict";

const checkRules = document.querySelector(".check-rules");
checkRules.style.display = "none";

const drop = document.querySelector(".drop");
const choices = new Choices(drop, {
	searchEnabled: false,
	itemSelectText: '',
});

const inputSum = document.querySelector(".input__sum");
const inputTerm = document.querySelector(".input__term");
const inputProcent = document.querySelector(".input__procent");

let bodyCalc = document.querySelector(".body-calc");

//all inputs
const allInputs = document.querySelectorAll(".input-block input");

const countPay = document.querySelector(".count-pay");

//results
const results = document.querySelector(".results");
//results_disable
const monthPay = document.querySelector(".month-pay");
const allProcent = document.querySelector(".all-procent");
const allPay = document.querySelector(".all-pay");

let yearOrMonth = "month";

drop.addEventListener("change", () => yearOrMonth = drop.value);

countPay.addEventListener("click", count);

function count() {

	for (let elem of allInputs) {

		if (elem.value.trim() === "") {
			checkRules.style.display = "";
			return;
		}

		if (isNaN(elem.value) || elem.value === "null" || elem.value === "false" || elem.value === "true") {
			checkRules.style.display = "";
			return;
		}

		if (elem.value.includes(".")) {
			checkRules.style.display = "";
			return;
		}

	}

	let sum = Number(inputSum.value);
	let term = Number(inputTerm.value);
	let procent = Number(inputProcent.value);		

	if (yearOrMonth === "year") {
		let procentYear = procent * sum / 100;
		allProcent.textContent = (procentYear * term).toFixed(2);
		let all = sum + procentYear * term;
		allPay.textContent = all.toFixed(2);
		let month = all / 12;
		monthPay.textContent = month.toFixed(2);
	} else {
		let procentMonth = procent * sum / 100 / 12;
		allProcent.textContent = (procentMonth * term).toFixed(2);
		let all = sum + procentMonth * term;
		allPay.textContent = all.toFixed(2);
		let month = all / term;
		monthPay.textContent = month.toFixed(2);
	}

	results.classList.remove("results_disable");

}

bodyCalc.addEventListener("click", (event) => {
	let target = event.target;

	if (target.matches(".inp")) {
		checkRules.style.display = "none";
	}

});







