import { PanelData } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataPqm } from 'components/variables/variables';
//import alarmaStyles from 'styles/alarmsStyles';
import estadoStyles from 'styles/estadoStyles';

const dataPQM = (data: PanelData, options: SimpleOptions): DataPqm => {
  console.log(options)
  console.log(data)

  //------------------------------------ASIGNACION DE VARIABLES-------------------------------//
    
    //let CURR_AVG = data.series.find(({ name }) => name?.includes('DATA.CURR_AVG.VALUE'))?.fields[1].state?.calcs?.lastNotNull
    let CURR_A = data.series.find(({ name }) => name?.includes('DATA.CURR_A.VALUE'))?.fields[1].state?.calcs?.lastNotNull
    let CURR_B = data.series.find(({ name }) => name?.includes('DATA.CURR_B.VALUE'))?.fields[1].state?.calcs?.lastNotNull
    let CURR_C = data.series.find(({ name }) => name?.includes('DATA.CURR_C.VALUE'))?.fields[1].state?.calcs?.lastNotNull
    //let CURR_UNB = data.series.find(({ name }) => name?.includes('DATA.CURR_UNB.VALUE'))?.fields[1].state?.calcs?.lastNotNull
    let ENY_APP = data.series.find(({ name }) => name?.includes('DATA.ENY_APP.VALUE'))?.fields[1].state?.calcs?.lastNotNull
    //let ENY_NEG_REACT = data.series.find(({ name }) => name?.includes('DATA.ENY_NEG_REACT.VALUE'))?.fields[1].state?.calcs?.lastNotNull
    //let ENY_NEG_REAL = data.series.find(({ name }) => name?.includes('ENY_NEG_REAL'))?.fields[1].state?.calcs?.lastNotNull
    //let ENY_POS_REACT = data.series.find(({ name }) => name?.includes('ENY_POS_REACT'))?.fields[1].state?.calcs?.lastNotNull
    //let ENY_POS_REAL = data.series.find(({ name }) => name?.includes('ENY_POS_REAL'))?.fields[1].state?.calcs?.lastNotNull
    let FREQ = data.series.find(({ name }) => name?.includes('DATA.FREQ.VALUE'))?.fields[1].state?.calcs?.lastNotNull
    let MODBUS_ST = data.series.find(({ name }) => name?.includes('DATA.MODBUS_ST.VALUE'))?.fields[1].state?.calcs?.lastNotNull
    let APPPOW_3PHAS = data.series.find(({ name }) => name?.includes('DATA.APPPOW_3PHAS.VALUE'))?.fields[1].state?.calcs?.lastNotNull
    let POWFAC_3PHAS = data.series.find(({ name }) => name?.includes('DATA.POWFAC_3PHAS.VALUE'))?.fields[1].state?.calcs?.lastNotNull
    //let REACTPOW_3PHAS = data.series.find(({ name }) => name?.includes('DATA.REACTPOW_3PHAS.VALUE'))?.fields[1].state?.calcs?.lastNotNull
    let REALPOW_3PHAS = data.series.find(({ name }) => name?.includes('DATA.REALPOW_3PHAS.VALUE'))?.fields[1].state?.calcs?.lastNotNull
    //let VOL_UNB = data.series.find(({ name }) => name?.includes('DATA.VOL_UNB.VALUE'))?.fields[1].state?.calcs?.lastNotNull
    let VOL_VAB = data.series.find(({ name }) => name?.includes('DATA.VOL_VAB.VALUE'))?.fields[1].state?.calcs?.lastNotNull
    let VOL_VAN = data.series.find(({ name }) => name?.includes('DATA.VOL_VAN.VALUE'))?.fields[1].state?.calcs?.lastNotNull
    let VOL_VBC = data.series.find(({ name }) => name?.includes('DATA.VOL_VBC.VALUE'))?.fields[1].state?.calcs?.lastNotNull
    let VOL_VBN = data.series.find(({ name }) => name?.includes('DATA.VOL_VBN.VALUE'))?.fields[1].state?.calcs?.lastNotNull
    let VOL_VCA = data.series.find(({ name }) => name?.includes('VOL_VCA'))?.fields[1].state?.calcs?.lastNotNull
    let VOL_VCN = data.series.find(({ name }) => name?.includes('DATA.VOL_VCN.VALUE'))?.fields[1].state?.calcs?.lastNotNull
    
  //------------------
  
  let pqm: DataPqm = {
    estados:{
      volt_an: 0,
      volt_bn: 0,
      volt_cn: 0,
      volt_ab: 0,
      volt_bc: 0,
      volt_ca: 0,
      cur_a: 0,
      cur_b: 0,
      cur_c: 0,
      p_real_t: 0,
      p_apt_t:0

    },
    botones_alarmas:{
      red_modbus: estadoStyles.sinConexion,
      volt_max: estadoStyles.sinConexion,
      corr_max: estadoStyles.sinConexion,
    },
    datos_generales: {
      fase: '',
      marca: '',
      modelo: '',
      sistema: '',
      ubicacion: ''
    },
    datos_principales: {
      pot_real: 0,
      frecuencia: 0,
      factor_p: 0,
      boton_pqm: estadoStyles.sinConexion,
      nombre_pqm:'', 
      boton_estado: estadoStyles.sinConexion,
      text_estado:''
    }
  }

  // --------------------------ESTADOS----------------------------------//
  
  // let volt_an = VOL_VAN ; //pqm.estados.volt_an = VOL_VAN
  if (VOL_VAN !== undefined ) {
    pqm.estados.volt_an = Number.parseFloat(VOL_VAN.toFixed(2));
  }

  // pqm.estados.volt_an = Number.parseFloat(VOL_VAN?.toFixed(2));

  let volt_bn = VOL_VBN ; //pqm.estados.volt_bn = VOL_VBN
  if (VOL_VBN !== undefined ) {
    pqm.estados.volt_bn = Number.parseFloat(volt_bn.toFixed(2));
  }
  let volt_cn = VOL_VCN ; // pqm.estados.volt_cn = VOL_VCN
  if (VOL_VCN !== undefined ) {
    pqm.estados.volt_cn = Number.parseFloat(volt_cn.toFixed(2));
  }

  let volt_ab = (VOL_VAB  ) ;//pqm.estados.volt_ab = VOL_VAB
  if (VOL_VAB !== undefined ) {
    pqm.estados.volt_ab = Number.parseFloat(volt_ab.toFixed(2));
  }

  let volt_bc = (VOL_VBC ) ;//pqm.estados.volt_bc = VOL_VBC
  if (VOL_VBC !== undefined ) {
    pqm.estados.volt_bc = Number.parseFloat(volt_bc.toFixed(2));
  }

  let volt_ca = (VOL_VCA ) ;//pqm.estados.volt_ca = VOL_VCA
  if (VOL_VCA ) {
    pqm.estados.volt_ca = Number.parseFloat(volt_ca.toFixed(2));
  }
  
  let cur_a = (CURR_A) ;//pqm.estados.cur_a = CURR_A
  if (CURR_A !== undefined ) {
    pqm.estados.cur_a = Number.parseFloat(cur_a.toFixed(2));
  }
  
  let cur_b = (CURR_B) ;//pqm.estados.cur_b = CURR_B
  if (CURR_B !== undefined ) {
    pqm.estados.cur_b = Number.parseFloat(cur_b.toFixed(2));
  }
  
  let cur_c = (CURR_C) ;//pqm.estados.cur_c = CURR_C
  if (CURR_C !== undefined ) {
    pqm.estados.cur_c = Number.parseFloat(cur_c.toFixed(2));
  } 
 /*
  let p_apt_t = APPPOW_3PHAS ; //pqm.estados.p_apt_t = APPPOW_3PHAS
  if (APPPOW_3PHAS !== undefined) {
    pqm.estados.p_apt_t = Number.parseFloat(p_apt_t.toFixed(2));
  }*/

  let p_real_t = ENY_APP ; //pqm.estados.p_apt_t = APPPOW_3PHAS
  if (ENY_APP !== undefined) {
    pqm.estados.p_real_t = Number.parseFloat(p_real_t.toFixed(2));
  }

  //pqm.datos_principales.pot_reaL_ = Number.parseFloat(ENY_APP?.toFixed(2));
  
  /*let text_estado = (VOL_VAB  + VOL_VAB  + VOL_VAB ) / 3;
  if (VOL_VAB  !== undefined && VOL_VAB  !== undefined && VOL_VAB  !== undefined) {
    pqm.datos_principales.text_estado = text_estado toString ('ALARMADO')
  }*/
  
  

  // --------------------------DATOS GENERALES-------------------------//

  pqm.datos_generales.fase = options.fase
  pqm.datos_generales.sistema = options.sistema
  pqm.datos_generales.marca = options.marca
  pqm.datos_generales.modelo = options.modelo
  pqm.datos_generales.ubicacion = options.ubicacion

  // ----------------------BOTONES ALARMAS------------------------------//

  pqm.botones_alarmas.red_modbus = MODBUS_ST === 1 ? estadoStyles.alarma: estadoStyles.sinConexion
  
  // ---------------------- DATOS PRINCIPALES---------------------------//
  pqm.datos_principales.frecuencia = Number.parseFloat(FREQ?.toFixed(2));
  pqm.datos_principales.pot_real = Number.parseFloat(REALPOW_3PHAS?.toFixed(2));
  pqm.datos_principales.factor_p = Number.parseFloat(POWFAC_3PHAS?.toFixed(2));
  pqm.estados.p_apt_t = Number.parseFloat (APPPOW_3PHAS?.toFixed(2));
  pqm.datos_principales.boton_estado = MODBUS_ST === 1? estadoStyles.sinConexion : estadoStyles.ok;
  pqm.datos_principales.boton_pqm = MODBUS_ST === 1? estadoStyles.sinConexion : estadoStyles.ok;
  pqm.datos_principales.text_estado =  // Disponible , Alarmado
  pqm.datos_principales.nombre_pqm = options.nombre

 
  
  
  
  return pqm
}

export default dataPQM
