var catOne = "Tim";
var catTwo = "Tom";
var clicksOne = 0;
var clicksTwo = 0;


    function catOneCount() {
        clicksOne += 1;
        document.getElementById("clicks-one").innerHTML = clicksOne;
    };

    function catTwoCount() {
        clicksTwo += 1;
        document.getElementById("clicks-two").innerHTML = clicksTwo;
    };

// Add the cat names when page is loaded
    function catNames() {
        document.getElementById("cat-name-one").innerHTML = catOne;
        document.getElementById("cat-name-two").innerHTML = catTwo;
    };




