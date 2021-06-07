import React from 'react'



type Lineas_Sist1 = {
  
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
    l1_15: string;//path5886efi24j  
    l1_16: string;//path20299
    l1_17: string;//path6683
    //TR-DRY; P-UPS2A
    l1_18: string;//path6603-8
    l1_19: string;//path6605-3
    l1_20: string;//path6609-1
    l1_21: string;//path6607-0

    //ATSANTSAT1A,CUARTO SATELITAL
    l1_22: string;//path16574
    l1_23: string;//path16572

    //ATSREC05A, REC01A
    l1_24: string;//path20297
    
    //TUPSIN01A1 
    l1_25: string;//path16768
    l1_26: string;//path16770
    l1_27: string;//path16772
    l1_28: string;//path16774
    l1_29: string;//path16776
    l1_30: string;//path16778

    // TUPSOUT01A
    l1_31: string;//path16780
    l1_32: string;//path16782
    l1_33: string;//path16784
    l1_34: string;//path16786
    l1_35: string;//path16788
    l1_36: string;//path16790

    //TUPSOUT01A,ATS-PDU-10A
    l1_37: string;//path20323

    //TUPSOUT01A, ATS-PDU-09A
    l1_38: string;//path6304

    //ATS-PDU-09A, T-PDU-01A
    l1_39: string;//path6519

    //ATS-CHI-07A, T-CHI-03A
    l1_40: string;//path5544

    //T-CHI-03A, T-CHI-01A
    l1_41: string;//path9357

    //ATS-SG-11A, TSG-1A
    l1_42: string;//path6542
    l1_43: string;//path6544       
    
}


export interface DataLine_sist1{
  
  lineas_sistema1: Lineas_Sist1;
  

}

export const Variables = ({
    lineas_sistema1
 // estados,botones_alarmas,datos_generales,datos_principales

}: DataLine_sist1) =>{  

    return (
        //insertar el grupo o capa completo de las lineas de sistema1
        <g id="layer52">

        </g>
    )
}

