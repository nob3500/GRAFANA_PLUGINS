import React from 'react'


//className = {lineas_sistema1.l1_1}
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
    l1_15: string;//path5886  
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

export const Var15 = ({
    lineas_sistema1
 // estados,botones_alarmas,datos_generales,datos_principales

}: DataLine_sist1) =>{  

    return (
        //insertar el grupo o capa completo de las lineas de sistema1
        <g id="layer52" fill="none">
      <path
        id="path11200"
        d="M92.591 115.11h-6.38v33.322H68.389"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.4273}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_5}
      />
      <path
        id="path11202"
        d="M92.549 87.031h-9.477v57.008H68.337"
        style={{ mixBlendMode: "normal" }}
        strokeDasharray="1.28191,.427305"
        strokeWidth={0.4273}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_4}
        
      />
      <path
        id="path15921"
        d="M77.038 107.72h15.539"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.4273}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_7}
      />
      <path
        id="path15966"
        d="M106 110.43h2.763v8.107H89.746v16.711h5.738"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.45118}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_8}
      />
      <path
        id="path6673"
        d="M248.09 165.06h-5.87v17.627H84.95V152.66l-16.61.024"
        style={{ mixBlendMode: "normal" }}
        strokeDasharray="1.281,.427"
        strokeWidth={0.427}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_6}
      />
      <path
        id="path5886"
        d="M107.95 159.55h19.641v-23.806h11.857"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.4273}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_15}
      />
      <path
        id="path5890"
        d="M107.83 156.01h17.682v-34.351h91.72v10.123h7.903"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.4273}
        stroke="#ff00de"      
        className = {lineas_sistema1.l1_14}
      />
      <path
        id="path5894"
        d="M107.93 148.11h13.221v-33.754h104.96V99.018h6.06"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.4273}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_12}
        

      />
      <path
        id="path5892"
        d="M225.18 65.841h-3.196v53.083H123.4v33.148h-15.54"
        style={{ mixBlendMode: "normal" }}
        strokeDasharray="1.2819,.427301"
        strokeWidth={0.4273}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_13}
      />
      <path
        id="path5899"
        d="M107.94 144.31h10.652v-36.36h11.493"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.4273}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_11}
      />
      <path
        id="path5901"
        d="M108 133.21h8.515V91.334h13.73"
        style={{ mixBlendMode: "normal" }}
        strokeDasharray="1.2819,.427301"
        strokeWidth={0.4273}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_10}
      />
      <path
        id="path5903"
        d="M107.97 129.62h4.52V60.905l27.265.012"
        style={{ mixBlendMode: "normal" }}
        strokeDasharray="1.2819,.427301"
        strokeWidth={0.4273}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_9}
      />
      <path
        id="path6683"
        d="M107.98 167.04h21.599v-19.732h2.596"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.4273}
        stroke="#b1cae0"
        className = {lineas_sistema1.l1_17}
      />
      <path
        id="path20299"
        d="M108.01 163.45h27.562"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.4273}
        stroke="#f901db"
        className = {lineas_sistema1.l1_16}
      />
      <path
        id="path16572"
        d="M184.9 103.95h-23.146"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.4273}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_23}
      />
      <path
        id="path16574"
        d="M151.17 103.95h-9.584"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.4273}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_22}
      />
      <path
        id="path16768"
        d="M148.03 156.96h19.598"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.43041}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_25}
      />
      <path
        id="path16770"
        d="M148.04 160.98h19.584"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.43049}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_26}
      />
      <path
        id="path16772"
        d="M148.03 165.23h19.592"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.43049}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_27}
      />
      <path
        id="path16774"
        d="M148.02 169.39h19.609"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.43049}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_28}
      />
      <path
        id="path16776"
        d="M148.14 173.15h19.492"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.43049}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_29}
      />
      <path
        id="path16778"
        d="M148.06 177.26h19.563"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.43049}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_30}
      />
      <path
        id="path16780"
        d="M171.11 156.96h21.488"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.43049}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_31}
      />
      <path
        id="path16782"
        d="M170.98 160.98h21.616"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.43049}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_32}
      />
      <path
        id="path16784"
        d="M170.97 165.23h21.624"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.43049}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_33}
      />
      <path
        id="path16786"
        d="M170.94 169.39h21.659"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.43049}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_34}
      />
      <path
        id="path16788"
        d="M171.02 173.15h21.573"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.43049}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_35}
      />
      <path
        id="path16790"
        d="M170.98 177.26h21.612"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.43049}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_36}
      />
      <path
        id="path20297"
        d="M188.23 131.71h-35.984"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.4273}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_24}
      />
      <path
        id="path20323"
        d="M204.57 159.47h7.723l-.098-114.4h11.795"
        style={{ mixBlendMode: "normal" }}
        strokeDasharray="1.281,.427"
        strokeWidth={0.427}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_37}
      />
      <path
        id="path6304"
        d="M204.51 175.68h14.284v-22.828h5.251"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.4273}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_38}
      />
      <path
        id="path5544"
        d="M237.31 127.96h8.954v-12.01h3.734"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.4273}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_40}
      />
      <path
        id="path6519"
        d="M236 150.39h6.253v-12.131h5.812"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.427}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_39}
      />
      <path
        id="path6542"
        d="M242.85 96.892h7.845"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.4273}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_42}
      />
      <path
        id="path6544"
        d="M261.18 96.853h9.384"
        style={{ mixBlendMode: "normal" }}
        strokeWidth={0.427}
        stroke="#999"
        className = {lineas_sistema1.l1_43}
      />
      <path
        id="path9357"
        d="M274.18 122.32h24.114"
        strokeWidth={0.427}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_41}
      />
      <path
        id="path6103-7"
        d="M53.204 142.78h8.256"
        strokeWidth={0.427}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_1}
      />
      <path
        id="path6183"
        d="M53.204 149.13h8.256"
        strokeWidth={0.427}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_2}
      />
      <path
        id="path6185"
        d="M53.204 154.95h8.256"
        strokeWidth={0.427}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_3}
      />
      <path
        id="path6609-1"
        d="M159.667 142.37v-2.01h-8.265"
        strokeWidth={0.34725}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_20}
      />
      <path
        id="path6603-8"
        d="M140.257 147.57h3.789"
        strokeWidth={0.34725}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_18}
      />
      <path
        id="path6605-3"
        d="M152.927 147.57h2.745"
        strokeWidth={0.34725}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_19}
      />
      <path
        id="path6607-0"
        d="M164.857 147.57h2.813"
        strokeWidth={0.34725}
        stroke="#ff00de"
        className = {lineas_sistema1.l1_21}
      />
      <path
        id="path6590"
        d="M282.147 174.137h2.092"
        opacity={0.999}
        strokeWidth={0.42730872}
        stroke="#999"
      />
      <path
        id="path6592"
        d="M278.54 178.359h5.739"
        opacity={0.999}
        strokeWidth={0.594167832}
        stroke="#999"
      />
    </g>
    
    )
}

