
import { stylesFactory } from '@grafana/ui';
import { css } from 'emotion';

const getStyles = stylesFactory(() => {
  return {
    
    On: css`
      stroke: #ff00de;
    `,
    Off: css`
      stroke: #999;
    `,
  };
});

const styles = getStyles();

export default styles;
