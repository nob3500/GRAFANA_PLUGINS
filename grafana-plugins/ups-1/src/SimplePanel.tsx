import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
//import { stylesFactory, useTheme } from '@grafana/ui';
import { stylesFactory } from '@grafana/ui';
import Ups from './components/ups1';
import { DataUps } from 'components/variables';

// import { DataUps } from 'components/variables'
//import dataUps from 'modules/dataUps';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  //const theme = useTheme();
  const styles = getStyles();

  console.log("data: ", data)
  console.log("options: ", options)

  let dataUps : DataUps
  dataUps={
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
      <Ups
        Parametros={dataUps.Parametros}
        Principal={dataUps.Principal}
        DatosGenerales={dataUps.DatosGenerales}
        Alarmas={dataUps.Alarmas}    
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
