import { DataDieselS1 } from 'components/variables_sist1/var2_combustible_s1';
import estadosStyles from 'styles/estadosStyles';

const dataCombustible = ():DataDieselS1 => {
    let combustible = {
        diesels1: {
          diesels1_hi:  estadosStyles.sinConexion,
          diesels1_low: estadosStyles.sinConexion,
        }
      }

    return combustible
}
export default dataCombustible 

