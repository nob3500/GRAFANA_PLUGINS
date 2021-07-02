import React from 'react'



//className = {lineas_sistema2.l2_1}
type Lineas_Sist2 = {
  
   //PSG2A, TDLOWA ,ATS04A,ATS03A,TDP02A
    l2_0: string;//path11149   
    l2_1: string;//path11147
    l2_2: string;//path11143
    l2_3: string;//path11141
    l2_4: string;//path11135
    l2_5: string;//path15871

    //TDP02A,TRDRY,TUPSIN02A,ATSREC06A,ATSREC05A,ATSCHI08A,ATSCHI07A,ATSSG11A,ATSANTSAT2A,ATSANTSAT1A
    l2_6: string;//path20303
    l2_7: string;//path6601
    l2_8: string;//path19704    
    l2_9: string;//path19708
    l2_10: string;//path19712
    l2_11: string;//path19714
    l2_12: string;//path19716
    l2_13: string;//path6797
    l2_14: string;//path20295

    //TR-DRY; P-UPS2A
    l2_15: string;//path6603
    l2_16: string;//path6605
    l2_17: string;//path6607    
    l2_18: string;//path6609

    //ATSANTSAT1A,CUARTO SATELITAL
    l2_19: string;//path16551
    l2_20: string;//path16549
    l2_21: string;//path16545

    //ATSREC06A, REC02A
    l2_22: string;//path6789

    //TUPSIN02A 
    l2_23: string;//path6813
    l2_24: string;//path6815    
    l2_25: string;//path6817
    l2_26: string;//path6819
    l2_27: string;//path6821
    l2_28: string;//path6823


    // TUPSOUT02A
    l2_29: string;//path6825
    l2_30: string;//path6827
    l2_31: string;//path6829
    l2_32: string;//path6831
    l2_33: string;//path6833
    l2_34: string;//path6835

    //TUPSOUT01A,ATS-PDU-10A,ATS-PDU-09A
    l2_35: string;//path5542
    l2_36: string;//path19702

    //ATS-PDU-10A, T-PDU-02A
    l2_37: string;//path6521

    //ATS-CHI-08A, T-CHI-04A
    l2_38: string;//path6540

    //T-CHI-03A, T-CHI-01A
    l2_39: string;//path6538 
    
    //ATS-SG-11A, TSG-1A HAY QUE ACTIVAR PARA AMBOS SISTEMAS EL COLOR
    //l2_40: string;//    
    //l2_41: string;//

   
}


export interface DataLine_sist2{
  
  lineas_sistema2: Lineas_Sist2;
  

}

export const Var29 = ({
    lineas_sistema2
 // estados,botones_alarmas,datos_generales,datos_principales

}: DataLine_sist2) =>{  

    return (
        //insertar el grupo o capa completo de las lineas de sistema1
        <g id="layer51" fill="none">
        <path
          id="path11141"
          d="M68.365 51.071h17.787v59.86h6.46"
          strokeDasharray="1.28191,.427305"
          strokeWidth={0.4273}
          stroke="#0f0"
          className = {lineas_sistema2.l2_3}
        />
        <path
          id="path11149"
          d="M106 87.671h2.786V75.26h-18.07V41.725h4.78"
          strokeWidth={0.38787}
          stroke="#0f0"
          className = {lineas_sistema2.l2_0}
        />
        <path
          id="path11147"
          d="M68.359 42.319h16.593V6.325h146.8v15.099h16.392"
          strokeDasharray="1.28191,.427305"
          strokeWidth={0.4273}
          stroke="#00fa08"
          className={lineas_sistema2.l2_1}
        />
        <path
          id="path15871"
          d="M92.533 90.943h-4.092v13.32h-11.35"
          strokeWidth={0.4273}
          stroke="#0f0"
          className = {lineas_sistema2.l2_5}
        />
        <path
          id="path6601"
          d="M107.81 32.617h16.869v-7.991h11.039"
          strokeWidth={0.4273}
          stroke="#0f0"
          className = {lineas_sistema2.l2_7}
        />
        <path
          id="path11143"
          d="M68.372 46.378h20.069v37.237h4.065"
          strokeWidth={0.427}
          stroke="#0f0"
          className  = {lineas_sistema2.l2_2}
        />
        <path
          id="path20303"
          d="M107.87 28.795h18.692V44.78h5.446"
          strokeWidth={0.4273}
          stroke="#b1cae0"
          className={lineas_sistema2.l2_6}
        />
        <path
          id="path19704"
          d="M107.82 36.29h16.852v19.284h14.985"
          strokeWidth={0.4273}
          stroke="#0f0"
          className = {lineas_sistema2.l2_8}
        />
        <path
          id="path6797"
          d="M107.83 62.908h6.464v39.375h15.647"
          strokeDasharray="1.2819,.427301"
          strokeWidth={0.4273}
          stroke="#0f0"
          className = {lineas_sistema2.l2_13}
        />
        <path
          id="path19714"
          d="M107.83 47.764h10.644v24.975h107.49v22.478h6.173"
          strokeWidth={0.4273}
          stroke="#878787"
          className = {lineas_sistema2.l2_11}
        />
        <path
          id="path19716"
          d="M107.83 51.574h8.36v34.54h14.106"
          strokeWidth={0.4273}
          stroke="#0f0"
          className = {lineas_sistema2.l2_12}
        />
        <path
          id="path19712"
          d="M225.2 126.74h-5.675V70.546l-98.527-.4V44.113h-13.174"
          strokeDasharray="1.281,.427"
          strokeWidth={0.427}
          stroke="#0f0"
          className = {lineas_sistema2.l2_10}
        />
        <path
          id="path20295"
          d="M139.7 130.97h-29.122V66.897h-2.746"
          strokeDasharray="1.2819,.427301"
          strokeWidth={0.4273}
          stroke="#0f0"
          className = {lineas_sistema2.l2_14}
        />
        <path
          id="path19708"
          d="M107.83 40.133h14.873v26.733h95.244v-6.142h7.24"
          strokeWidth={0.4273}
          stroke="#0f0"
          className = {lineas_sistema2.l2_9}
        />
        <path
          id="path16545"
          d="M184.9 89.297h-5.662"
          strokeWidth={0.4273}
          stroke="#0f0"
          className = {lineas_sistema2.l2_21}
        />
        <path
          id="path16549"
          d="M166.63 89.297h-4.994"
          strokeWidth={0.4273}
          stroke="#0f0"
          className = {lineas_sistema2.l2_20}
        />
        <path
          id="path16551"
          d="M151.17 89.297h-8.531"
          strokeWidth={0.4273}
          stroke="#0f0"
          className = {lineas_sistema2.l2_19}
        />
        <path
          id="path6789"
          d="M152.07 57.66h36.333"
          strokeWidth={0.4273}
          stroke="#0f0"
          className = {lineas_sistema2.l2_22}
        />
        <path
          id="path19702"
          d="M204.22 32.143h10.816v115.53h9.018"
          strokeDasharray="1.281,.427"
          strokeWidth={0.427}
          stroke="#0f0"
          className={lineas_sistema2.l2_36}
        />
        <path
          id="path6825"
          d="M171.17 13.462h21.454"
          strokeWidth={0.43049}
          stroke="#00fa08"
          className = {lineas_sistema2.l2_29}
        />
        <path
          id="path6827"
          d="M171.17 17.487h21.403"
          strokeWidth={0.43049}
          stroke="#00fa08"
          className = {lineas_sistema2.l2_30}
        />
        <path
          id="path6829"
          d="M171.17 21.738h21.337"
          strokeWidth={0.43049}
          stroke="#00fa08"
          className = {lineas_sistema2.l2_31}
        />
        <path
          id="path6831"
          d="M171.17 25.899h21.348"
          strokeWidth={0.43049}
          stroke="#00fa08"
          className={lineas_sistema2.l2_32}
        />
        <path
          id="path6833"
          d="M171.17 29.652h21.442"
          strokeWidth={0.43049}
          stroke="#00fa08"
          className = {lineas_sistema2.l2_33}
        />
        <path
          id="path6835"
          d="M171.17 33.768h21.343"
          strokeWidth={0.43049}
          stroke="#0f0"
          className = {lineas_sistema2.l2_34}
        />
        <path
          id="path6521"
          d="M235.68 41.902h7.883v5.846h4.58"
          strokeWidth={0.427}
          stroke="#0f0"
          className = {lineas_sistema2.l2_37}
        />
        <path
          id="path6540"
          d="M236.82 64.268h9.48V74.74h3.255"
          strokeWidth={0.4273}
          stroke="#0f0"
          className={lineas_sistema2.l2_38}
        />
        <path
          id="path6538"
          d="M273.75 81.084h24.513"
          strokeWidth={0.4273}
          stroke="#0f0"
          className = {lineas_sistema2.l2_39}
        />
        <path
          id="path5542"
          d="M204.38 15.882h14.404v23.803h5.263"
          strokeWidth={0.4273}
          stroke="#0f0"
          className={lineas_sistema2.l2_35}
        />
        <path
          id="path6813"
          d="M147.92 13.585h18.719"
          strokeWidth={0.43049}
          stroke="#00fa08"
          className={lineas_sistema2.l2_23}
        />
        <path
          id="path6815"
          d="M147.92 17.61h18.719"
          strokeWidth={0.43049}
          stroke="#00fa08"
          className={lineas_sistema2.l2_24}
        />
        <path
          id="path6817"
          d="M147.92 21.861h18.719"
          strokeWidth={0.43049}
          stroke="#00fa08"
          className = {lineas_sistema2.l2_25}
        />
        <path
          id="path6819"
          d="M147.92 26.021h18.719"
          strokeWidth={0.43049}
          stroke="#00fa08"
          className = {lineas_sistema2.l2_26}
        />
        <path
          id="path6821"
          d="M147.92 29.775h18.719"
          strokeWidth={0.43049}
          stroke="#00fa08"
          className = {lineas_sistema2.l2_27}
        />
        <path
          id="path6823"
          d="M147.92 33.89h18.719"
          strokeWidth={0.43049}
          stroke="#00fa08"
          className = {lineas_sistema2.l2_28}
        />
        <path
          id="path6596"
          d="M278.64 60.948h5.43"
          strokeWidth={0.4273}
          stroke="#999"
          
        />
        <path
          id="path6603"
          d="M140.05 44.89h3.788"
          strokeWidth={0.347266144}
          stroke="#00fa08"
          className = {lineas_sistema2.l2_15}
        />
        <path
          id="path6605"
          d="M152.72 44.89h2.745"
          strokeWidth={0.347266144}
          stroke="#00fa08"
          className = {lineas_sistema2.l2_16}
        />
        <path
          id="path6607"
          d="M164.652 44.89h2.813"
          strokeWidth={0.347266144}
          stroke="#00fa08"
          className = {lineas_sistema2.l2_17}
        />
        <path
          id="path6609"
          d="M159.46 39.684v-2.01h-8.266"
          strokeWidth={0.347266144}
          stroke="#00fa08"
          className = {lineas_sistema2.l2_18}
        />
        <path
          id="path11135"
          d="M68.411 55.329h10.975v3.254"
          strokeWidth={0.4273}
          stroke="#0eef11"
          className = {lineas_sistema2.l2_4}
        />
        <path
          id="path6101"
          d="M53.072 48.99h8.256"
          strokeWidth={0.427}
          stroke="#999"
        />
        <path
          id="path6103"
          d="M53.072 42.64h8.256"
          strokeWidth={0.427}
          stroke="#999"
        />
        <path
          id="path6105"
          d="M53.072 55.34h8.256"
          strokeWidth={0.427}
          stroke="#999"
        />
      </g>
      


    )
}

