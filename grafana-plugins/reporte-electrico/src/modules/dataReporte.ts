import { PanelData, InterpolateFunction } from '@grafana/data';
import { SimpleOptions } from 'types';

import { InfoReporte } from 'components/Variables'

const dataReporte = (data: PanelData, options: SimpleOptions, replaceVariables: InterpolateFunction): InfoReporte => {
  let informacion: InfoReporte = {
    EnergiaRack: 0,
    consumoUPS: {
      Costo: 0,
      Energia: 0
    },
    costoRack: 0,
    cuartoTI: {
      Costo: 0,
      Energia: 0
    },
    dcie: 0,
    humedad: {
      Maxima: 0,
      Minima: 0,
      Promedio: 0
    },
    preHOT: {
      Costo: 0,
      Energia: 0
    },
    pue: 0,
    serviciosGenerales: {
      Costo: 0,
      Energia: 0
    },
    sistemaAACC: {
      Costo: 0,
      Eneriga: 0
    },
    sistemaElectrico: {
      Costo: 0,
      Energia: 0
    },
    temperatura: {
      Maxima: 0,
      Minima: 0,
      Promedio: 0
    }
  }

  return informacion
}

export default dataReporte
