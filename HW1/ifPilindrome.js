function ifPolindrome(textToCheck){
const array = textToCheck.split('');
const reversedArray = array.reverse();
const reversedText = reversedArray.join('');
if(textToCheck===reversedText){
    console.log(true)
}else{
    console.log(false)
}
};

 ifPolindrome("bob");


module.exports ={
ifPolindrome: ifPolindrome
}
