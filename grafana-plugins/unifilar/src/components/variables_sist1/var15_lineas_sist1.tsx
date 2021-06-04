import React from 'react'



type Lineas_Sistema1 = {
  
   //PSG2A, TDLOWA ,ATS03A,TDP01A
    l1_1: string;//path6103-7
    l1_2: string;//path6183
    l1_3: string;//path6185
    l1_4: string;//path11202
    l1_5: string;//path11200
    l1_6: string;//path6673
    l1_7: string;//path15921
    l1_8: string;//path15966

    //TDP01A,ATSREC08A,ATSANTSAT1A,ATSREC05A,TRDRY,TUPSIN01A,ATSCHI08A,ATSSG11A,ATSCHI07A
    l1_9: string;//path5903
    l1_10: string;//path5901
    l1_11: string;//path5899
    l1_12: string;//path5894
    l1_13: string;//path5892
    l1_14: string;//path5890
    l1_15: string;//path5886
    l1_16: string;//path20299
    l1_17: string;//path6683
    l1_18: string;//
    l1_19: string;//
    l1_20: string;//
    l1_21: string;//


    //ATSANTSAT1A,CUARTO SATELITAL
    l1_22: string;//path16574
    l1_23: string;//path16572

    //ATSREC05A, REC01A
    l1_24: string;//path20297

    //TUPSIN01A1 , TUPSOUT01A
    l1_25: string;//
    l1_26: string;//
    l1_27: string;//
    
    /*l1_24: string;//
    l1_25: string;//
    l1_26: string;//
    l1_27: string;//
    l1_28: string;//
    l1_29: string;//
    l1_30: string;//
    l1_31: string;//
    l1_32: string;//
    l1_33: string;
    l1_34: string;
    l1_35: string;
    l1_36: string;
    l1_37: string;
    l1_38: string;
    l1_39: string;
    l1_40: string;
    l1_41: string;
    l1_42: string;
    l1_43: string;
    l1_44: string;
    l1_45: string;
    l1_46: string;
    l1_47: string;
    l1_48: string;
    l1_49: string;
    l1_50: string;
         
    */
}


export interface DataLine_s1{
  
  lineas_sistema1: Lineas_Sistema1;
  

}

export const Variables = ({
    lineas_sistema1
 // estados,botones_alarmas,datos_generales,datos_principales

}: DataLine_s1) =>{  

    return (
        //insertar el grupo o capa completo de las lineas de sistema1
        <g id="layer52">

        </g>
    )
}

