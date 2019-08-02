
function textReplace(text1, letterNumber, text2){
    const array = text1.split(' ');
    const newLetterNumber = letterNumber - 1
    const newArray = [];
    for (let i of array){
        const newArrayItem = i.substring(0, newLetterNumber) + text2 + i.substring(newLetterNumber + 1);
        newArray.push(newArrayItem);
    }
    const newText = newArray.join(' ');
    console.log(newText);
};

textReplace("replace me");

module.exports ={
textReplace: textReplace
}
