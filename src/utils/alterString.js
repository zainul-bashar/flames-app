
const alterString = (firstName,secondName) => {
   
   let commonChar = '';
   for( let i=0; i<firstName.length-1; i++ ){
      for( let j=0; j<secondName.length-1; j++ ){
         if(firstName.charAt(i) === secondName.charAt(j)){
            commonChar = firstName.charAt(i)
            return commonChar;
         }
      }

   }
   
}

export default alterString;