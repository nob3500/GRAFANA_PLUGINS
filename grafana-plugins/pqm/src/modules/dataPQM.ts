import { PanelData } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataPqm } from 'components/variables/variables';
import alarmaStyles from 'styles/alarmsStyles';
import estadoStyles from 'styles/estadoStyles';

const dataPQM = (data: PanelData, options: SimpleOptions): DataPqm => {
  console.log(options)
  console.log(data)

  //----------------

  
  
    let APPPOW_3PHAS = data.series.find(({ name }) => name?.includes(''))?.fields[1].state?.calcs?.lastNotNull
    //let CURR_AVG = data.series.find(({ name }) => name?.includes(''))?.fields[1].state?.calcs?.lastNotNull
    let CURR_A = data.series.find(({ name }) => name?.includes('DATA.CURR_A.VALUE'))?.fields[1].state?.calcs?.lastNotNull
    let CURR_B = data.series.find(({ name }) => name?.includes(''))?.fields[1].state?.calcs?.lastNotNull
    let CURR_C = data.series.find(({ name }) => name?.includes(''))?.fields[1].state?.calcs?.lastNotNull
    let CURR_UNB  = data.series.find(({ name }) => name?.includes(''))?.fields[1].state?.calcs?.lastNotNull
    //let ENY_APP = data.series.find(({ name }) => name?.includes(''))?.fields[1].state?.calcs?.lastNotNull
    //let ENY_NEG_REACT = data.series.find(({ name }) => name?.includes(''))?.fields[1].state?.calcs?.lastNotNull
    //let ENY_NEG_REAL = data.series.find(({ name }) => name?.includes(''))?.fields[1].state?.calcs?.lastNotNull
    //let ENY_POS_REACT = data.series.find(({ name }) => name?.includes(''))?.fields[1].state?.calcs?.lastNotNull
    //let ENY_POS_REAL = data.series.find(({ name }) => name?.includes(''))?.fields[1].state?.calcs?.lastNotNull
    let FREQ = data.series.find(({ name }) => name?.includes(''))?.fields[1].state?.calcs?.lastNotNull
    let MODBUS_ST = data.series.find(({ name }) => name?.includes('DATA.MODBUS_ST.VALUE'))?.fields[1].state?.calcs?.lastNotNull
    let POWFAC_3PHAS = data.series.find(({ name }) => name?.includes(''))?.fields[1].state?.calcs?.lastNotNull
    //let REACTPOW_3PHAS = data.series.find(({ name }) => name?.includes(''))?.fields[1].state?.calcs?.lastNotNull
    let REALPOW_3PHAS = data.series.find(({ name }) => name?.includes(''))?.fields[1].state?.calcs?.lastNotNull
    let VOL_UNB = data.series.find(({ name }) => name?.includes(''))?.fields[1].state?.calcs?.lastNotNull
    let VOL_VAB = data.series.find(({ name }) => name?.includes(''))?.fields[1].state?.calcs?.lastNotNull
    let VOL_VAN = data.series.find(({ name }) => name?.includes(''))?.fields[1].state?.calcs?.lastNotNull
    let VOL_VBC = data.series.find(({ name }) => name?.includes(''))?.fields[1].state?.calcs?.lastNotNull
    let VOL_VBN = data.series.find(({ name }) => name?.includes(''))?.fields[1].state?.calcs?.lastNotNull
    let VOL_VCA = data.series.find(({ name }) => name?.includes(''))?.fields[1].state?.calcs?.lastNotNull
    let VOL_VCN = data.series.find(({ name }) => name?.includes(''))?.fields[1].state?.calcs?.lastNotNull
  
  
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
      red_modbus: '',
      volt_max: '',
      corr_max: ''
    },
    datos_generales: {
      fase: '1',
      marca: '',
      modelo: '',
      sistema: '',
      ubicacion: ''
    },
    datos_principales: {
      pot_real: 0,
      frecuencia: 0,
      factor_p: 0,
      boton_pqm: '',
      nombre_pqm:'', 
      boton_estado: '',
      text_estado:''
    }
  }

  // --------------------------ESTADOS----------------------------------//

  pqm.estados.volt_an = VOL_VAN
  pqm.estados.volt_bn = VOL_VBN
  pqm.estados.volt_cn = VOL_VCN
  pqm.estados.volt_ab = VOL_VAB
  pqm.estados.volt_bc = VOL_VBC
  pqm.estados.volt_ca = VOL_VCA
  pqm.estados.cur_a = CURR_A
  pqm.estados.cur_b = CURR_B
  pqm.estados.cur_c = CURR_C
  pqm.estados.p_apt_t = APPPOW_3PHAS
  pqm.estados.p_real_t = REALPOW_3PHAS



  // --------------------------DATOS GENERALES-------------------------//

  pqm.datos_generales.fase = options.fase
  pqm.datos_generales.sistema = options.sistema
  pqm.datos_generales.marca = options.marca
  pqm.datos_generales.modelo = options.modelo
  pqm.datos_generales.ubicacion = options.ubicacion

  // ----------------------BOTONES ALARMAS------------------------------//

  pqm.botones_alarmas.red_modbus = MODBUS_ST === 1 ? alarmaStyles.on : alarmaStyles.off
  pqm.botones_alarmas.volt_max = VOL_UNB === 1 ? alarmaStyles.on : alarmaStyles.off
  pqm.botones_alarmas.corr_max = CURR_UNB === 1 ? alarmaStyles.on : alarmaStyles.off

  // ---------------------- DATOS PRINCIPALES---------------------------//
  pqm.datos_principales.frecuencia = Number.parseFloat(FREQ?.toFixed(2));
  pqm.datos_principales.pot_real = Number.parseFloat(REALPOW_3PHAS?.toFixed(2));
  pqm.datos_principales.factor_p = Number.parseFloat(POWFAC_3PHAS?.toFixed(2));
  pqm.datos_principales.boton_estado = estadoStyles.sinConexion,
  pqm.datos_principales.boton_pqm = estadoStyles.sinConexion,
  pqm.datos_principales.text_estado = '', // encendido , apagado
  pqm.datos_principales.nombre_pqm = options.nombre
  


  return pqm
}

export default dataPQM
