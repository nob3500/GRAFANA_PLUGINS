import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
// import { stylesFactory, useTheme } from '@grafana/ui';
import { stylesFactory } from '@grafana/ui';

import Chiller from 'components/chiller'
import { DataChiller } from 'components/variables'

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  // const theme = useTheme();
  const styles = getStyles();

  console.log("data: ", data)
  console.log("options: ", options)
  
  let dataChiller: DataChiller

  dataChiller = {
    Compresor1: {
      Estado: '',
      TemperaturaAceite: 0,
      PresionSuccion: 0,
      PresionDescarga: 0,
      HorasFunc: 0      
    },
    Compresor2: {
      Estado: '',
      TemperaturaAceite: 0,
      PresionSuccion: 0,
      PresionDescarga: 0,
      HorasFunc: 0  
    },
    DatosGenerales: {
      Etapa: 'A',
      Sistema: '1',
      Marca: 'YORK',
      Modelo: 'YVAA0263',
      Ubicacion: 'EXTERIORES'
    },
    Alarmas: {
      AlarmaGeneral: '',
      CodAlarmaS1: '',
      CodAlarmaS2: ''
    },
    ID: '',
    Estado: '',
    TemperaturaRetorno: 0,
    TemperaturaSuministro: 0,
    Corriente: 0
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
      <Chiller
        Alarmas={dataChiller.Alarmas}
        Compresor1={dataChiller.Compresor1}
        Compresor2={dataChiller.Compresor2}
        Corriente={dataChiller.Corriente}
        Estado={dataChiller.Estado}
        DatosGenerales={dataChiller.DatosGenerales}
        ID={dataChiller.ID}
        TemperaturaRetorno={dataChiller.TemperaturaRetorno}
        TemperaturaSuministro={dataChiller.TemperaturaSuministro}
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
