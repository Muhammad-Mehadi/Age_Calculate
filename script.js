function Calculate() {
    const preDate = document.querySelector(".d1").value;
    const nextDate = document.querySelector(".d2").value;
    errorStatement = errorFinder(preDate, nextDate);
    if (errorStatement == "correct") {
        console.log(preDate);
        console.log(nextDate);
    }
}

function errorFinder(preDate, nextDate) {
    if (preDate == null || preDate == "") {
        const input1 = document.querySelector(".d1");
        input1.classList.add("error-input");

    } else {
        const input1 = document.querySelector(".d1");
        input1.classList.remove("error-input");
    }
    if (nextDate == null || nextDate == "") {
        const input1 = document.querySelector(".d2");
        input1.classList.add("error-input");

    } else {
        const input1 = document.querySelector(".d2");
        input1.classList.remove("error-input");

    }
    if (preDate != "" && nextDate != "") {
        return "correct";
    } else {
        return "error"
    }
}