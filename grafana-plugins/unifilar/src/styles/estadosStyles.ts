
import { stylesFactory } from '@grafana/ui';
import { css } from 'emotion';

const getStyles = stylesFactory(() => {
  return {
    sinConexion: css`
      fill: #999;
    `,
    On: css`
      fill: green;
    `,
    Off: css`
      fill: red;
    `,
  };
});

const styles = getStyles();

export default styles;
