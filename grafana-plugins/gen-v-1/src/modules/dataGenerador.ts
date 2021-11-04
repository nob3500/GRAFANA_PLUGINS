import { InterpolateFunction, PanelData } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataGenerador } from 'componentes/variables/variables';
import modo_controlStyles from 'styles/modoControlStyles';
import alarmasStyles from 'styles/alarmsStyles';
import estadoStyles from 'styles/estadoStyles';

const dataGenerador = (data: PanelData, options: SimpleOptions, replaceVariables: InterpolateFunction): DataGenerador => {
  console.log('data: ', data);
  console.log('options: ', options);
  console.log(replaceVariables)

  let MANUAL_MODE = data.series.find(({ name }) => name?.includes('DATA.MANUAL_MODE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let STOP_MODE = data.series.find(({ name }) => name?.includes('DATA.STOP_MODE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let AUTO_MODE = data.series.find(({ name }) => name?.includes('DATA.AUTO_MODE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let OFF_MODE = data.series.find(({ name }) => name?.includes('DATA.OFF_MODE.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let L1L2_VOL = data.series.find(({ name }) => name?.includes('DATA.L1L2_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let L2L3_VOL = data.series.find(({ name }) => name?.includes('DATA.L2L3_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let L3L1_VOL = data.series.find(({ name }) => name?.includes('DATA.L3L1_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let L1N_VOL = data.series.find(({ name }) => name?.includes('DATA.L1N_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let L2N_VOL = data.series.find(({ name }) => name?.includes('DATA.L2N_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let L3N_VOL = data.series.find(({ name }) => name?.includes('DATA.L3N_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let L1_CUR = data.series.find(({ name }) => name?.includes('DATA.L1_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
  let L2_CUR = data.series.find(({ name }) => name?.includes('DATA.L2_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
  let L3_CUR = data.series.find(({ name }) => name?.includes('DATA.L3_CUR.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
  let TOT_VA = data.series.find(({ name }) => name?.includes('DATA.TOT_VA.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
  let TOT_WATTS = data.series.find(({ name }) => name?.includes('DATA.TOT_WATTS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let FREQ = data.series.find(({ name }) => name?.includes('DATA.FREQ.VALUE'))?.fields[1].state?.calcs?.lastNotNull;
  let FUEL_LEV = data.series.find(({ name }) => name?.includes('DATA.FUEL_LEV.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let OIL_PRESS = data.series.find(({ name }) => name?.includes('DATA.OIL_PRESS.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let COOL_TEMP = data.series.find(({ name }) => name?.includes('DATA.COOL_TEMP.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let ENG_BATT_VOL = data.series.find(({ name }) => name?.includes('DATA.ENG_BATT_VOL.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let ENG_RUN_TIME = data.series.find(({ name }) => name?.includes('DATA.ENG_RUN_TIME.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let MODBUS_ST = data.series.find(({ name }) => name?.includes('DATA.MODBUS_ST.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let WARNING_ST = data.series.find(({ name }) => name?.includes('DATA.WARNING_ST.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let ES_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.ES_ELTRIP_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let ES_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.ES_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let ES_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.ES_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let FS_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.FS_ELTRIP_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let FS_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.FS_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let FS_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.FS_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let GHV_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.GHV_ELTRIP_ALM.VALUE'))?.fields[1].state
    ?.calcs?.lastNotNull;
  let GHV_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.GHV_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let GHV_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.GHV_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let GLV_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.GLV_ELTRIP_ALM.VALUE'))?.fields[1].state
    ?.calcs?.lastNotNull;
  let GLV_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.GLV_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let GLV_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.GLV_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let HCT_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.HCT_ELTRIP_ALM.VALUE'))?.fields[1].state
    ?.calcs?.lastNotNull;
  let HCT_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.HCT_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let HCT_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.HCT_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let LOP_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.LOP_ELTRIP_ALM.VALUE'))?.fields[1].state
    ?.calcs?.lastNotNull;
  let LOP_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.LOP_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let LOP_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.LOP_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let OS_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.OS_ELTRIP_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let OS_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.OS_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let OS_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.OS_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let US_ELTRIP_ALM = data.series.find(({ name }) => name?.includes('DATA.US_ELTRIP_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let US_SHUTD_ALM = data.series.find(({ name }) => name?.includes('DATA.US_SHUTD_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;
  let US_WARN_ALM = data.series.find(({ name }) => name?.includes('DATA.US_WARN_ALM.VALUE'))?.fields[1].state?.calcs
    ?.lastNotNull;

  // ---------------------------------------------------------------
  let generador: DataGenerador = {

    modo_control: {
      stop_mode: modo_controlStyles.SinConexion,
      auto_mode: modo_controlStyles.SinConexion,
      manual_mode: modo_controlStyles.SinConexion,
      off_mode: modo_controlStyles.SinConexion,

    },
    alternador: {
      voltaje_ff: 0,
      corriente: 0,
      pot_kw: 0,
      pot_kva: 0,
      factor_pot: 0,

    },
    motor: {
      frecuencia: 0,
      horas_uso: 0,
      oil_press: 0,
      temp: 0,
      volt_bat: 0,
    },
    alarmas: {
      over_speed: {
        war: alarmasStyles.on,
        sht: alarmasStyles.on,
        trip: alarmasStyles.on,
      },
      gen_high_volt: {
        war: alarmasStyles.on,
        sht: alarmasStyles.on,
        trip: alarmasStyles.on,
      },
      low_oil_press: {
        war: alarmasStyles.on,
        sht: alarmasStyles.on,
        trip: alarmasStyles.on,
      },
      high_cool_temp: {
        war: alarmasStyles.on,
        sht: alarmasStyles.on,
        trip: alarmasStyles.on,
      },
      under_speed: {
        war: alarmasStyles.on,
        sht: alarmasStyles.on,
        trip: alarmasStyles.on,
      },
      gen_low_volt: {
        war: alarmasStyles.on,
        sht: alarmasStyles.on,
        trip: alarmasStyles.on,
      },
      fail_start: {
        war: alarmasStyles.on,
        sht: alarmasStyles.on,
        trip: alarmasStyles.on,
      },
      emerg_stop: {
        war: alarmasStyles.on,
        sht: alarmasStyles.on,
        trip: alarmasStyles.on,
      },
    },

    datos_generales: {
      fase:'',// options.fase,
      marca:'',//  options.marca,
      modelo:'',//  options.modelo,
      sistema:'',//  options.sistema,
      ubicacion:'',//  options.ubicacion,
    },  
    
    datos_principales:{
      voltaje: 0, //id = tspan5844
      temp: 0, //id = tspan1960-4
      diesel: FUEL_LEV, //id = tspan9221
      rectan_gen: estadoStyles.sinConexion, // rectangulo id= estado_eq = g1499
      nombre_gen: '',//nombre del equipo id= tspan6769
      boton_estado: estadoStyles.sinConexion,// power id = st2
      text_estado: '',// texto id= tspan5848-3
    },

    /*
    boton_estado: estadoStyles.sinConexion,
    boton_gen: '',    
    estado: '', 
    nivel: FUEL_LEV,
    //nombre_gen: options.nombre,
    temp: COOL_TEMP,
    voltaje: 0,*/
  };


    // ------------------------INTERPOLACION DE VARIABLES-------------
    let variableNombre = replaceVariables('$EQUIPO')

     ///console.log("variableNombre", variableNombre)

     //uma.datos_principales.nombre_uma = variableNombre !== '' ? variableNombre : options.nombre
     generador.datos_principales.nombre_gen = variableNombre !== '' ? variableNombre : options.nombre

  // ---------------------------------------------------------------
  let corriente = (L1_CUR + L2_CUR + L3_CUR) / 3;
  if (L1_CUR !== undefined && L2_CUR !== undefined && L3_CUR !== undefined) {
    generador.alternador.corriente = Number.parseFloat(corriente.toFixed(2));
  }

  let factorPotencia = TOT_WATTS / TOT_VA;
  if (TOT_VA === 0) {
    factorPotencia = 0;
  }
  if (TOT_VA !== undefined && TOT_WATTS !== undefined) {
    generador.alternador.factor_pot = Number.parseFloat(factorPotencia.toFixed(2));
  }

  let potKVA = TOT_VA / 1000;
  if (TOT_VA !== undefined) {
    generador.alternador.pot_kva = Number.parseFloat(potKVA.toFixed(2));
  }

  let potKW = TOT_WATTS / 1000;
  if (TOT_WATTS !== undefined) {
    generador.alternador.pot_kw = Number.parseFloat(potKW.toFixed(2));
  }

  let voltajeFF = (L1L2_VOL + L2L3_VOL + L3L1_VOL) / 3;
  if (L1L2_VOL !== undefined && L2L3_VOL !== undefined && L3L1_VOL !== undefined) {
    generador.alternador.voltaje_ff = Number.parseFloat(voltajeFF.toFixed(2));
  }

  let voltajeLN = (L1N_VOL + L2N_VOL + L3N_VOL) / 3;
  if (L1N_VOL !== undefined && L2N_VOL !== undefined && L3N_VOL !== undefined) {
    generador.datos_principales.voltaje = Number.parseFloat(voltajeLN.toFixed(2));
  }

  generador.motor.frecuencia = Number.parseFloat(FREQ?.toFixed(2));
  generador.motor.horas_uso = Number.parseFloat(ENG_RUN_TIME?.toFixed(2));
  generador.motor.oil_press = Number.parseFloat(OIL_PRESS?.toFixed(2));
  generador.motor.temp = Number.parseFloat(COOL_TEMP?.toFixed(2));
  generador.motor.volt_bat = Number.parseFloat(ENG_BATT_VOL?.toFixed(2));

  generador.datos_principales.text_estado = WARNING_ST === 1 || MODBUS_ST === 1 ? 'APAGADO' : 'ENCENDIDO';
  generador.datos_principales.boton_estado = WARNING_ST === 1 || MODBUS_ST === 1 ? estadoStyles.alarma : estadoStyles.ok;
  // -------------------------------------------------------------------
  // ---------------------------MODO CONTROL----------------------------
  // -------------------------------------------------------------------
  generador.modo_control.manual_mode = MANUAL_MODE === 0 ? modo_controlStyles.Off : modo_controlStyles.On;
  generador.modo_control.auto_mode = AUTO_MODE === 0 ? modo_controlStyles.Off : modo_controlStyles.On;
  generador.modo_control.off_mode = OFF_MODE === 0 ? modo_controlStyles.Off : modo_controlStyles.On;
  generador.modo_control.stop_mode = STOP_MODE === 0 ? modo_controlStyles.Off : modo_controlStyles.On;
  // -------------------------------------------------------------------
  // -------------------------------------------------------------------
  generador.alarmas.emerg_stop.trip = ES_ELTRIP_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.alarmas.emerg_stop.sht = ES_SHUTD_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.alarmas.emerg_stop.war = ES_WARN_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  // -------------------------------------------------------------------
  generador.alarmas.fail_start.trip = FS_ELTRIP_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.alarmas.fail_start.sht = FS_SHUTD_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.alarmas.fail_start.war = FS_WARN_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  // -------------------------------------------------------------------
  generador.alarmas.gen_high_volt.trip = GHV_ELTRIP_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.alarmas.gen_high_volt.sht = GHV_SHUTD_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.alarmas.gen_high_volt.war = GHV_WARN_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  // -------------------------------------------------------------------
  generador.alarmas.gen_low_volt.trip = GLV_ELTRIP_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.alarmas.gen_low_volt.sht = GLV_SHUTD_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.alarmas.gen_low_volt.war = GLV_WARN_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  // -------------------------------------------------------------------
  generador.alarmas.low_oil_press.trip = LOP_ELTRIP_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.alarmas.low_oil_press.sht = LOP_SHUTD_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.alarmas.low_oil_press.war = LOP_WARN_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  // -------------------------------------------------------------------
  generador.alarmas.over_speed.trip = OS_ELTRIP_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.alarmas.over_speed.war = OS_WARN_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.alarmas.over_speed.sht = OS_SHUTD_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  // -------------------------------------------------------------------
  generador.alarmas.under_speed.trip = US_ELTRIP_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.alarmas.under_speed.sht = US_SHUTD_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.alarmas.under_speed.war = US_WARN_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  // -------------------------------------------------------------------
  generador.alarmas.high_cool_temp.trip = HCT_ELTRIP_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.alarmas.high_cool_temp.war = HCT_WARN_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;
  generador.alarmas.high_cool_temp.sht = HCT_SHUTD_ALM === 1 ? alarmasStyles.on : alarmasStyles.off;

  console.log(generador);

  return generador;
};

export default dataGenerador;
