import { stylesFactory } from '@grafana/ui';
import { css, keyframes } from 'emotion';

const parpadeo = keyframes`
  0% { opacity: 1.0; };
  100% { opacity: 0.0; };
`;

const getStyles = stylesFactory(() => {
  return {
    sinConexion: css`
      fill: black;
      
    `,
    cerrado: css`
      fill: #0f0;
    `,
    abierto: css`
      fill: #666;
    `,
    alarma: css`
      fill: red;
      animation: ${parpadeo} 1s ease infinite;
    `,
    umbrales: css`
      fill: orange;
      animation: ${parpadeo} 1s ease infinite;
    `
  };
});

const styles = getStyles();

export default styles;
