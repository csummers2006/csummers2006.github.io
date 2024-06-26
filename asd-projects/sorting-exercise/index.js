/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 2: Implement bubbleSort

async function bubbleSort(array) {
    for (i = 0; i = array.length - 1; i++) {

        for (j = array.length - 1; j = i >= 1; j--) {
            if (array[j] < array[j - 1]) {
                swap(array[j].value && array[j - 1].value)
                updateCounter(bubbleCounter);
                await sleep();
            }
        }
    }
}


// TODO 3: Implement quickSort
async function quickSort(array, left, right) {
    if ((right - left) > 0) {

        var index = await partition(array, left, right)
        if (left < (index - 1)) {
            await quickSort(array, left, index - 1)
        }
        if (index < right) {
            await quickSort(array, index, right)
        }

    }
}
// TODOs 4 & 5: Implement partition
function partition(array, left, right) {
    pivot = left
    while (left <= right)
        left += 1
    while (array[left] < pivot(left)++)
        while (array[right] > pivot(right)--)
            right -= 1
    if (left <= right) {
        swap(array, left, right)
        left += 1
        right -= 1

        return left
    }
}
// TODO 1: Implement swap
function swap(array, i, j) {
    var move = array[i]
    array[i] = array[j]
    array[j] = move

    drawSwap(array, i, j)
}
///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep() {
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j) {
    let element1 = array[i];
    let element2 = array[j];

    let temp = parseFloat($(element1.id).css("top")) + "px";

    $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
    $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter) {
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}