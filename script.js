function Calculate() {
    const preDate = document.querySelector(".d1").value;
    const nexDate = document.querySelector(".d2").value;
    errorStatement = errorFinder(preDate, nexDate);
    if (errorStatement == "correct") {
        const previousDate = new Date(preDate);
        const nextDate = new Date(nexDate);
        console.log(previousDate);
        console.log(nextDate);
        const previousDateYear = previousDate.getYear();
        const previousDateMonth = previousDate.getMonth();
        const previousDateDate = previousDate.getDate();
        const nextDateYear = nextDate.getYear();
        const nextDateMonth = nextDate.getMonth();
        const nextDateDate = nextDate.getDate();
        var age = {}
        var ageString = {}
        var monthAge = 0,
            dateAge = 0;
        var yearAge = nextDateYear - previousDateYear;
        //get month 
        if (nextDateMonth >= previousDateMonth) {
            monthAge = nextDateMonth - previousDateMonth;
        } else {
            yearAge--;
            monthAge = 12 + nextDateMonth - previousDateMonth;
        }
        // get days
        if (nextDateDate >= previousDateDate)
        //get days when the current date is greater  
            dateAge = nextDateDate - previousDateDate;
        else {
            monthAge--;
            dateAge = 31 + nextDateDate - previousDateDate;

            if (monthAge < 0) {
                monthAge = 11;
                yearAge--;
            }

        }
        age = {
            years: yearAge,
            months: monthAge,
            days: dateAge
        };
        console.log(age.years);
        if ((age.years > 0) && (age.months > 0) && (age.days > 0)) {
            ageString = age.years + " years, " + age.months + " months, and " + age.days + " days old.";
        } else if ((age.years == 0) && (age.months == 0) && (age.days > 0)) {
            ageString = "Only " + age.days + " days old!";
        } else if ((age.years > 0) && (age.months == 0) && (age.days == 0)) {
            ageageString = age.years + " years old. Happy Birthday!!";
        } else if ((age.years > 0) && (age.months > 0) && (age.days == 0)) {
            ageageString = age.years + " years and " + age.months + " months old.";
        } else if ((age.years == 0) && (age.months > 0) && (age.days > 0)) {
            ageageString = age.months + " months and " + age.days + " days old.";
        } else if ((age.years > 0) && (age.months == 0) && (age.days > 0)) {
            ageageString = age.years + " years, and" + age.days + " days old.";
        } else if ((age.years == 0) && (age.months > 0) && (age.days == 0)) {
            ageageString = age.months + " months old.";
        } else if ((age.years == 0) && (age.months == 0) && (age.days == 0)) {
            ageString = "Welcome to Earth! <br> It's first day on Earth!";
        } else {
            ageString = "";
        }
        if (ageString != "") {
            document.querySelector(".output").innerHTML = ageString;
        } else {
            document.querySelector(".output").innerHTML = "Your age input was <strong> wrong</wrong>!";
        }
    }
}

function errorFinder(preDate, nexDate) {
    if (preDate == null || preDate == "") {
        const input1 = document.querySelector(".d1");
        input1.classList.add("error-input");

    } else {
        const input1 = document.querySelector(".d1");
        input1.classList.remove("error-input");
    }
    if (nexDate == null || nexDate == "") {
        const input1 = document.querySelector(".d2");
        input1.classList.add("error-input");

    } else {
        const input1 = document.querySelector(".d2");
        input1.classList.remove("error-input");

    }
    if (preDate != "" && nexDate != "") {
        return "correct";
    } else {
        return "error"
    }
}