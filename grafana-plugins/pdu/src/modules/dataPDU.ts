import { PanelData, InterpolateFunction } from '@grafana/data';
import { SimpleOptions } from 'types';
import 'css/stylesPop.css';
import estadoStyles from 'styles/estadoStyles';
import { DataPdu } from 'components/variables/variables';
//import alarmaStyles from 'styles/alarmsStyles';

const imgPopUp=require.context('../img/imgalarmas/',true);
const swal = require('sweetalert');



//popup
let audioAlm = 'http://172.30.128.202:1880/uimedia/audio/alarma.mp4';
let msgEstado = '';
let colorEstado = '';
let variableNombre =  '';
let imgEquipo = '';

function reproducir(sonido: any) {
  const audio = new Audio(sonido);
  audio.play();
}

function PopUp(cookieVar: any, equipo: any, variable: any, nomCookie: any) {
  if (cookieVar === null) {
    localStorage.setItem('gyecookie_'+nomCookie, variable);
  } else {
      if (cookieVar !== ''+ variable) {
       reproducir(audioAlm);
        swal({
          className: colorEstado,
          title: equipo,
          text: 'EQUIPO' + msgEstado,
          icon: imgEquipo,
        }).then((value: any) => {
          localStorage.setItem('gyecookie_'+nomCookie,variable);
        });
              //console.log("alarma")
        localStorage.setItem('gyecookie_'+nomCookie,variable);}}}


const DataPDU = (data: PanelData, options: SimpleOptions, replaceVariables: InterpolateFunction): DataPdu => {
  console.log(options)
  console.log(data)
  console.log(replaceVariables)

  variableNombre = replaceVariables('$EQUIPO')

  
 
  let IN1_AB_VOL = data.series.find(({ name }) => name?.includes('DATA.IN1_AB_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let IN1_BC_VOL = data.series.find(({ name }) => name?.includes('DATA.IN1_BC_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let IN1_CA_VOL= data.series.find(({ name }) => name?.includes('DATA.IN1_CA_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_AB_VOL= data.series.find(({ name }) => name?.includes('DATA.OUT1_AB_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_BC_VOL = data.series.find(({ name }) => name?.includes('DATA.OUT1_BC_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_CA_VOL = data.series.find(({ name }) => name?.includes('DATA.OUT1_CA_VOL.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_A_CUR = data.series.find(({ name }) => name?.includes('DATA.OUT1_A_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_B_CUR = data.series.find(({ name }) => name?.includes('DATA.OUT1_B_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_C_CUR = data.series.find(({ name }) => name?.includes('DATA.OUT1_C_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let NEUT_CUR = data.series.find(({ name }) => name?.includes('DATA.NEUT_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let DOOR_OPEN_ALM = data.series.find(({ name }) => name?.includes('DATA.DOOR_OPEN_ALM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let GEN_ALM = data.series.find(({ name }) => name?.includes('DATA.GEN_ALM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let MODBUS_ST = data.series.find(({ name }) => name?.includes('DATA.MODBUS_ST.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let MAIN_TRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.MAIN_TRIP_ALM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_TOTAL_KVA = data.series.find(({ name }) => name?.includes('DATA.OUT1_TOTAL_KVA.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  /*let OUT1_VOL_LOW_ALM = data.series.find(({ name }) => name?.includes('DATA.OUT1_VOL_LOW_ALM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_VOL_HI_ALM = data.series.find(({ name }) => name?.includes('DATA.OUT1_VOL_HI_ALM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let IN1_VOL_LOW_ALM = data.series.find(({ name }) => name?.includes('DATA.IN1_VOL_LOW_ALM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let IN1_VOL_HI_ALM = data.series.find(({ name }) => name?.includes('DATA.IN1_VOL_HI_ALM.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_KWH = data.series.find(({ name }) => name?.includes('DATA.OUT1_KWH.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_A_COS_FI = data.series.find(({ name }) => name?.includes('DATA.OUT1_A_COS_FI.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_B_COS_FI = data.series.find(({ name }) => name?.includes('DATA.OUT1_B_COS_FI.VALUE'))?.fields[1].state?.calcs?.lastNotNull
  let OUT1_C_COS_FI = data.series.find(({ name }) => name?.includes('DATA.OUT1_C_COS_FI.VALUE'))?.fields[1].state?.calcs?.lastNotNull*/
  
  let imgAlm= imgPopUp('./pdu_alm.png')
  //let imgUpsAdv= imgPopUp('./ups_adv.png')
  let cookieEstado = localStorage.getItem('gyecookie_'+variableNombre);
  let cookieAlm = localStorage.getItem('gyecookie_'+variableNombre+'alm');
  //let cookieAdv = localStorage.getItem('gyecookie_'+variableNombre+'adv');
  console.log(DOOR_OPEN_ALM , GEN_ALM,MODBUS_ST,MAIN_TRIP_ALM)
  if (DOOR_OPEN_ALM === 1 || GEN_ALM===1 || MODBUS_ST===1 || MAIN_TRIP_ALM===1) {
      msgEstado=" ALARMA"
      imgEquipo=imgAlm;
      colorEstado='alarma'
      PopUp(cookieAlm, variableNombre, 1, variableNombre + 'alm');
      }  else {
          localStorage.setItem('gyecookie_'+variableNombre+'alm','0')
  }
  
  if(IN1_AB_VOL>0){
    msgEstado=" ENCENDIDO"
    imgEquipo=imgAlm;
    colorEstado='advertencia'
    PopUp(cookieEstado, variableNombre, 1, variableNombre);
  }else{
    msgEstado=" APAGADO"
    imgEquipo=imgAlm;
    colorEstado='alarma'
    PopUp(cookieEstado, variableNombre, 0, variableNombre);
  }
  
  
  //-------------------------------------------------------------------------------------------//
  
  let pdu: DataPdu = {

    estados:{

        in1_AB: 0,
        in1_BC: 0,
        in1_CA: 0,
        out1_AB: 0,
        out1_BC: 0,
        out1_CA: 0,
        out1_A: 0,
        out1_B: 0,
        out1_C: 0,
        corriente_N: 0
    },
    botones_alarmas:{

        alarma_general:estadoStyles.sinConexion,
        puerta_abierta:estadoStyles.sinConexion,
        falla_breaker:estadoStyles.sinConexion,
        red_modbus:estadoStyles.sinConexion,
        

        
    },
    datos_generales: {

        fase: '',
        marca: '',
        modelo: '',
        sistema: '',
        ubicacion: ''


    },
    
    datos_principales: {

        in_volt:0,
        out_volt: 0,
        corr_total: 0,
        boton_pdu:estadoStyles.sinConexion, 
        nombre_pdu: '',
        boton_estado: estadoStyles.sinConexion,
        estado: '',

            
    }
  }

   // ------------------------INTERPOLACION DE VARIABLES-------------
  

   pdu.datos_principales.nombre_pdu = variableNombre !== '' ? variableNombre : options.nombre

  // pdu.datos_principales.nombre_pdu = options.nombre 

  // --------------------------ESTADOS----------------------------------// 

  pdu.estados.in1_AB =  Number.parseFloat ((IN1_AB_VOL/10)?.toFixed(2));
  pdu.estados.in1_BC =  Number.parseFloat (IN1_BC_VOL?.toFixed(2))/10;
  pdu.estados.in1_CA =  Number.parseFloat (IN1_CA_VOL?.toFixed(2))/10;
  pdu.estados.out1_AB=  Number.parseFloat (OUT1_AB_VOL?.toFixed(2))/10;
  pdu.estados.out1_BC = Number.parseFloat(OUT1_BC_VOL?.toFixed(2))/10;
  pdu.estados.out1_CA = Number.parseFloat(OUT1_CA_VOL?.toFixed(2))/10;
  pdu.estados.out1_A = Number.parseFloat(OUT1_A_CUR?.toFixed(2))/10;
  pdu.estados.out1_B = Number.parseFloat(OUT1_B_CUR?.toFixed(2))/10;
  pdu.estados.out1_C = Number.parseFloat(OUT1_C_CUR?.toFixed(2))/10;
  pdu.estados.corriente_N = Number.parseFloat(NEUT_CUR?.toFixed(2))/10;

  //pdu.estados.ventilador = EVAP_FAN_SPEED === 0? 'OFF': 'ON'
 
  // --------------------------DATOS GENERALES-------------------------//
  
  pdu.datos_generales.fase = options.fase

   if (variableNombre === 'PDU_1A_F1' || variableNombre === 'PDU_1A_F2'|| variableNombre === 'PDU_1A_F3' || variableNombre === 'PDU_1A_F4' || variableNombre === 'PDU_1A_F5' || variableNombre === 'PDU_1A_F6'|| variableNombre === 'PDU_1A_F7' || variableNombre === 'PDU_1A_F8'|| variableNombre === 'PDU_1A_F9'|| variableNombre === 'PDU_1A_F10'     ) {
    pdu.datos_generales.sistema = '1'
  }

 
  if (variableNombre === 'PDU_2A_F1' || variableNombre === 'PDU_2A_F2'|| variableNombre === 'PDU_2A_F3' || variableNombre === 'PDU_2A_F4' || variableNombre === 'PDU_2A_F5' || variableNombre === 'PDU_2A_F6'|| variableNombre === 'PDU_2A_F7' || variableNombre === 'PDU_2A_F8'|| variableNombre === 'PDU_2A_F9'|| variableNombre === 'PDU_2A_F10'     ) {
    pdu.datos_generales.sistema = '2'
  }
  

  //pdu.datos_generales.sistema = options.sistema 

  pdu.datos_generales.marca = options.marca
  pdu.datos_generales.modelo = options.modelo
  pdu.datos_generales.ubicacion = options.ubicacion

  // ----------------------BOTONES ALARMAS------------------------------//

  pdu.botones_alarmas.alarma_general = GEN_ALM === 1 ? estadoStyles.alarma: estadoStyles.sinConexion
  pdu.botones_alarmas.puerta_abierta = DOOR_OPEN_ALM === 1 ? estadoStyles.alarma: estadoStyles.sinConexion
  pdu.botones_alarmas.falla_breaker = MAIN_TRIP_ALM === 1 ? estadoStyles.alarma: estadoStyles.sinConexion
  pdu.botones_alarmas.red_modbus = MODBUS_ST === 1 ? estadoStyles.alarma: estadoStyles.ok

    
  // ---------------------- DATOS PRINCIPALES---------------------------//

  

  let in_volt = (IN1_AB_VOL + IN1_BC_VOL + IN1_CA_VOL) / 3;
  if (IN1_AB_VOL !== undefined && IN1_BC_VOL !== undefined && IN1_CA_VOL !== undefined) {
    pdu.datos_principales.in_volt = Number.parseFloat((in_volt/10).toFixed(1));
  }

  let out_volt = (OUT1_AB_VOL + OUT1_BC_VOL + OUT1_CA_VOL) / 3;
  if (OUT1_AB_VOL !== undefined && OUT1_BC_VOL !== undefined && OUT1_CA_VOL !== undefined) {
    pdu.datos_principales.out_volt = Number.parseFloat(out_volt.toFixed(0))/10;
  }

  let corr_total = (OUT1_TOTAL_KVA*1000 ) / (out_volt * Math.sqrt (3));
  if (out_volt !== undefined && OUT1_TOTAL_KVA !== undefined) {
    pdu.datos_principales.corr_total = Number.parseFloat(corr_total.toFixed(2));
  }
  
  //pdu.datos_principales.nombre_pdu = options.nombre  
  pdu.datos_principales.boton_estado = IN1_AB_VOL > 0? estadoStyles.ok : estadoStyles.sinConexion
  pdu.datos_principales.estado =IN1_AB_VOL > 0? 'ENCENDIDO':'APAGADO'
  pdu.datos_principales.boton_pdu= IN1_AB_VOL > 0? estadoStyles.ok : estadoStyles.sinConexion
  
  
  return pdu


  
}

export default DataPDU

