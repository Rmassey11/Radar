//Get values from page
function getPalindrome(){
    document.getElementById("alert").classList.add("invisible");
    let pageValues = document.getElementById("userPalindrome").value;
    let returnObj = revPalindrome(pageValues);
    displayPalindrome(returnObj);
    
}

//Reverse the values
function revPalindrome(pageValues){
    pageValues = pageValues.toLowerCase();
    let regex = /[^a-z0-9]/gi;
    pageValues = pageValues.replace(regex,"");
    let revPalindrome = [];
    let returnObj = {};
    for(let index = pageValues.length - 1; index >=0; index--){
        revPalindrome += pageValues[index];
    }
    if(revPalindrome == pageValues){
        returnObj.msg = "Well done! You enetered a Palindrome"
    }
    else{
        returnObj.msg = "Sorry! You did not enter a palindrome."
    }
    returnObj.reversed = revPalindrome;
    return returnObj;
}

//Display success and reversed values
function displayPalindrome(returnObj){
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your Phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}