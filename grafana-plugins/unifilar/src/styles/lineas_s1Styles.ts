
import { stylesFactory } from '@grafana/ui';
import { css } from 'emotion';

const getStyles = stylesFactory(() => {
  return {
    
    On: css`
      fill: #ff00de;
    `,
    Off: css`
      fill: #999;
    `,
  };
});

const styles = getStyles();

export default styles;
