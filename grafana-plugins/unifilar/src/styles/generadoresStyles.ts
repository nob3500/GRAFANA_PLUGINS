import { stylesFactory } from '@grafana/ui';
import { css, keyframes } from 'emotion';

const parpadeo = keyframes`
  0% { opacity: 1.0; };
  100% { opacity: 0.0; };
`;

const getStyles = stylesFactory(() => {
  return {
    sinConexion: css`
      fill: gray;
    `,
    encendido: css`
      fill: green;
    `,
    Standby: css`
      fill: #87CEEB;
    `,
    alarma: css`
      fill: red;
      animation: ${parpadeo} 1s ease infinite;
    `,
    umbrales: css`
      fill: yellow;
      animation: ${parpadeo} 1s ease infinite;
    `
  };
});

const styles = getStyles();

export default styles;
