export const isDaylight = (submitted) => {
    var currentDate = new Date(submitted);
    var currentYear = currentDate.getFullYear();

    // DST Start
    var firstOfMarch = new Date(currentYear, 2, 1);
    var daysUntilFirstSundayInMarch = (7 - firstOfMarch.getDay()) % 7;
    var secondSundayInMarch = firstOfMarch.getDate() + daysUntilFirstSundayInMarch + 7;
    var dstStartDate = new Date(currentYear, 2, secondSundayInMarch);

    // DST End
    var firstOfNovember = new Date(currentYear, 10, 1);
    var daysUntilFirstSundayInNov = (7 - firstOfNovember.getDay()) % 7;
    var firstSundayInNovember = firstOfNovember.getDate() + daysUntilFirstSundayInNov;
    var dstEndDate = new Date(currentYear, 10, firstSundayInNovember);

    // console.log(dstStartDate)
    // console.log(dstEndDate)
    // console.log(currentDate)

    if (currentDate > dstStartDate) {
        return true
    }
    else {
        return false
    }

}

