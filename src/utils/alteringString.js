
const alteringString = (commonChar, firstName, secondName) => {
  
    let firstNameArr = firstName.split('');
    let secondNameArr = secondName.split('');

  let modifiedFirstName =  firstNameArr.filter( (ele) => ele !== commonChar ).join('');
  let modifiedSecondName = secondNameArr.filter( (ele) => ele !== commonChar ).join('');

  return({modifiedSecondName, modifiedFirstName});
}

export default alteringString;