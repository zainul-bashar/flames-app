
const stringMaths = ( modifiedFirstName, modifiedSecondName ) => {
  
    let sum = 0;
    let strArr = modifiedFirstName.split('');
    let str2Arr = modifiedSecondName.split('');
    let combineStrArr = strArr.concat(str2Arr);
     for( let i=1; i<combineStrArr.length; i++ ){
             sum+=i;
     }
     return sum%6;
}

export default stringMaths;