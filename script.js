var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const parsedDate1 = new Date(date1);
    const parsedDate2 = new Date(date2);

    // Calculate the time difference in milliseconds
    const timeDiff = Math.abs(parsedDate2 - parsedDate1);

    // Calculate the difference in days
    const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return diffDays;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
