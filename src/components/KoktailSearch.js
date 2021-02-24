import React from 'react'

function KoktailSearch(props) {
    const {ididDrink,fstrDrinkThumb,strInstructions,strDrink} = props
    return (
        <table key={ididDrink}>
           <tbody>
             <tr>
               <td>
                   <img alt={strDrink} width="120" src={fstrDrinkThumb}/>
               </td>
               <td>
                 {strDrink}
                 <p>{strInstructions}</p>
               </td>
             </tr>
           </tbody>
  
         </table>
    )
}

export default KoktailSearch;
