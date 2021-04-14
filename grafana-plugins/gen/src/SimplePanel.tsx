import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
//import { stylesFactory, useTheme } from '@grafana/ui';
import { stylesFactory} from '@grafana/ui';
import Generador from './components/generador';

import { DataGenerador } from 'components/variables/variables'


interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  //const theme = useTheme();
  const styles = getStyles();

  let generador: DataGenerador = {
    alternador: {
        corriente: 0,
        factor_pot: 0,
        pot_kva: 0,
        pot_kw: 0,
        voltaje_ff: 0
    },
    boton_estado: '',
    boton_gen: '',
    botones_Alarmas: {
        altas_revol: {
            off: '',
            on: '',
            trip: ''
        },
        alto_volt_gen: {
            off: '',
            on: '',
            trip: ''
        },
        baja_pres_aceite: {
            off: '',
            on: '',
            trip: ''
        },
        baja_temp: {
            off: '',
            on: '',
            trip: ''
        },
        bajas_revol: {
            off: '',
            on: '',
            trip: ''
        },
        bajo_volt_gen: {
            off: '',
            on: '',
            trip: ''
        },
        falla_arranque: {
            off: '',
            on: '',
            trip: ''
        },
        paro_emergencia: {
            off: '',
            on: '',
            trip: ''
        },
    },
    dataGeneral: {
        fase: '1',
        marca: '',
        modelo: '',
        sistema: '',
        ubicacion: ''
    },
    estado: '',
    modoControl: {
        modo_apagado: '',
        modo_auto: '',
        modo_encendido: '',
        modo_manual: ''
    },
    motor: {
        frecuencia: 60,
        horas_uso: 0,
        pres_aceite: 0,
        temp: 0,
        voltaje_bat: 0
    },
    nivel: 0,
    nombre_gen: '',
    temp: 0,
    voltaje: 0
  }

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <Generador 
        alternador = { generador.alternador }
        boton_estado = { generador.boton_estado }
        boton_gen = { generador.boton_gen }
        botones_Alarmas = { generador.botones_Alarmas }
        dataGeneral = { generador.dataGeneral }
        estado = { generador.estado }
        modoControl = { generador.modoControl }
        motor = { generador.motor }
        nivel = { generador.nivel }
        nombre_gen = { generador.nombre_gen }
        temp = { generador.temp }
        voltaje = { generador.voltaje }
      />
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
});
