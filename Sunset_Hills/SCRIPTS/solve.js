//Kick off a function when the Submit button is clicked.
$("#submit").on('click', function () {

    //Get user inputs & assign them to variables.
    let height1 = parseInt($("#numIn1").val());
    let height2 = parseInt($("#numIn2").val());
    let height3 = parseInt($("#numIn3").val());
    let height4 = parseInt($("#numIn4").val());
    let height5 = parseInt($("#numIn5").val());
    let height6 = parseInt($("#numIn6").val());
    let height7 = parseInt($("#numIn7").val());

    //Collect user inputs into array.
    let heightsArray = [height1, height2, height3, height4, height5, height6, height7];

    /* The westernmost building will always see the sunset, so the
     * integer at index[0] is always included in results */

    let resultOut = new Array();
    resultOut.push(heightsArray[0]);

    let highest = 0;
    let currentHeight = 0;

    //Iterate over array to determine whether current integer is less than the previous one
    for (let index = 1; index <= heightsArray.length - 1; index++) {
        currentHeight = heightsArray[index];

        /*If the current integer is greater than the previous one,
         * add it to the results array.*/
        if (currentHeight > highest) {
            resultOut.push(currentHeight);
            highest = currentHeight;
        }

        //Print results
        $("#results").html(`The building(s) that can see the sunset are: <span>[${resultOut.toString()}]</span>.`);
    }

    
});
//Clear inputs and results
$("#clear").on('click', function () {
    $("#numIn1").val("");
    $("#numIn2").val("");
    $("#numIn3").val("");
    $("#numIn4").val("");
    $("#numIn5").val("");
    $("#numIn6").val("");
    $("#numIn7").val("");
    $("#resultOut").val("");
});