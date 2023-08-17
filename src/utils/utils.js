

export const returnFirst20WordsOfString = (str) =>{
    const strArr = str.split(" ");
    let strToReturn = ''
    for (let i = 0; i < 10; i++){
        strToReturn += `${strArr[i]} `
    }
    return strToReturn 
}