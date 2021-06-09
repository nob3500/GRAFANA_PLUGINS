import React from 'react'


//className = {lineas_sistema1.l1_1}
type Lineas_Sist1 = {
  
   //PSG2A, TDLOWA ,ATS03A,TDP01A
    l1_1: string;//path6103-7
        
    
}


export interface DataLine_sist1{
  
  lineas_sistema1: Lineas_Sist1;
  

}

export const Var15 = ({
    lineas_sistema1
 // estados,botones_alarmas,datos_generales,datos_principales

}: DataLine_sist1) =>{  

    return (
        //insertar el grupo o capa completo de las lineas de sistema1
        <g id="layer??">


        </g> 
                    
            
    )
}

