# Variables de UPS
DATA.INPUT_VOLTAGE_MAX.VALUE
DATA.OUTPUT_VOLTAGE.VALUE
DATA.BATTERY_VOLTAGE.VALUE
DATA.INVERTER_ON_OFF.VALUE
DATA.ESTIMATED_MINUTES_REMAINING.VALUE
DATA.ESTIMATED_CHARGE_REMAINING.VALUE
DATA.INPUT_VOLTAGE_MIN.VALUE
DATA.OUTPUT_CURRENT.VALUE
DATA.OUTPUT_POWER.VALUE
DATA.OUTPUT_PERCENT_LOAD.VALUE
DATA.OUTPUT_PERCENT_LOAD_2.VALUE
DATA.OUTPUT_PERCENT_LOAD_3.VALUE
DATA.ALARMS_PRESENT.VALUE
DATA.BYPASS_ON_OFF.VALUE
DATA.RECTIFIER_ON_OFF.VALUE

# Forma de pegar en el campo Campos del dataSource para elastic
DATA.INPUT_VOLTAGE_MAX.VALUE,DATA.OUTPUT_VOLTAGE.VALUE,DATA.BATTERY_VOLTAGE.VALUE,DATA.INVERTER_ON_OFF.VALUE,DATA.ESTIMATED_MINUTES_REMAINING.VALUE,DATA.ESTIMATED_CHARGE_REMAINING.VALUE,DATA.INPUT_VOLTAGE_MIN.VALUE,DATA.OUTPUT_CURRENT.VALUE,DATA.OUTPUT_POWER.VALUE,DATA.OUTPUT_PERCENT_LOAD.VALUE,DATA.OUTPUT_PERCENT_LOAD_2.VALUE,DATA.OUTPUT_PERCENT_LOAD_3.VALUE,DATA.ALARMS_PRESENT.VALUE,DATA.BYPASS_ON_OFF.VALUE,DATA.RECTIFIER_ON_OFF.VALUE


simplepanel
let dataUps : DataUps
  /dataUps={
    DatosGenerales: {
      Fase: 'A',
      Sistema: '1',
      Marca: 'YORK',
      Modelo: 'YVAA0263',
      Ubicacion: 'EXTERIORES'
    },
    Parametros: {
      VBateria: 0,
      MinEstimados: 0,
      CargaEstimada: 0,
      InVoltmin: 0,
      InVoltmax: 0,
      CorrienteOut: 0,
      PotenciaOut: 0,
      PorcenCarga1: 0,
      PorcenCarga2: 0,
      PorcenCarga3: 0
    },
    Alarmas: {
      Presente: '',
      Inversor: '',
      Bypass: '',
      Rectificador: ''
    },
    Principal: {
      ID: '',
      Estado: '',
      InVolmax: 0,
      OutVolt: 0,
      VBateria: 0
    }
  }



      <Ups
        Parametros={dataUps.Parametros}
        Principal={dataUps.Principal}
        DatosGenerales={dataUps.DatosGenerales}
        Alarmas={dataUps.Alarmas}  