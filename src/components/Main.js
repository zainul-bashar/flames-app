import { useState } from 'react';
import './Main.css';
import alterString from '../utils/alterString';
import alteringString from '../utils/alteringString';
import stringMaths from '../utils/stringMaths';

const Main = () => {

    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const mainFnc = (firstName,secondName) =>{

        if( !firstName && !secondName ){
            setError('Please Enter Both Names');
            return;
        }

        if( !firstName ){
             setError('Enter First Name')
             return;
        }else if( !secondName ){
            setError('Enter Second Name')
            return;
        }

       let commonChar = alterString( firstName,secondName )
       let res = alteringString( commonChar,firstName,secondName )
        let calculation =  stringMaths( res.modifiedFirstName, res.modifiedSecondName )

         if( calculation === 1 ){
             setResult('Friends')
         }else if( calculation === 2 ){
            setResult('Love')
         }else if( calculation === 3 ){
            setResult('Affection')
         }else if( calculation === 4 ){
            setResult('Marriage')
         }else if( calculation === 5 ){
            setResult('Enemy')
         }else if( calculation === 0 ){
            setResult('Siblings')
         }else{
            setResult('Love Birds')
         }

    }

    const erase = () => {
        
        setFirstName('')
        setSecondName('')
        setError('')
        setResult('')
    }

    return (
        <div>
            <h1>Flames App</h1>
            <h3>Enter Both the name here:</h3>
            <input type="text" placeholder="enter first name" 
            onChange={(e)=> setFirstName(e.target.value)} value={firstName}></input>
            <input type="text" placeholder="enter second name" 
            onChange={(e)=> setSecondName(e.target.value)} value={secondName}></input><br/>
            <button className='btn1' onClick={()=>mainFnc(firstName,secondName)}>calculate relationship future</button><br/>
            <button className='btn2' onClick={erase}>clear</button>
            <h1>{error}</h1>
            <h1>{result}</h1>
        </div>
    )
}

export default Main;