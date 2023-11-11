const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });

});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));








function filterNumber(str) {
  // Remove any non-digit characters (except commas)
  const cleanedStr = str.replace(/[^\d,]/g, '');

  // Remove commas and convert to a numeric value
  const numericValue = parseFloat(cleanedStr.replace(/,/g, ''));

  return numericValue;
}

$(document).ready(function() {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(filterNumber(counters[i].innerHTML));
  }

  var count = function(start, value, id) {
    var localStart = start;
    var duration = 2000; // Set the duration to 2000 milliseconds (2 seconds)
    var increment = Math.ceil((value - start) / (duration / 40));

    // Adjust increment to add 5 instead of 1
    increment = Math.max(increment, 1);

    var interval = setInterval(function() {
      if (localStart < value) {
        localStart += increment;
        counters[id].innerHTML = Math.min(localStart, value);
      } else {
        clearInterval(interval); // Stop the interval when target value is reached
      }
    }, 40);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});

