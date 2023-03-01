import {DataDieselS2} from 'components/variables_sist2/var16_combustible_s2';
import estadosStyles from 'styles/estadosStyles';

const dataCombustible2 = ():DataDieselS2 =>{
    
    let combustible2 = {
        diesels2: {
            diesels2_hi: estadosStyles.sinConexion,
            diesels2_low: estadosStyles.sinConexion,
            
          }
    }
    return combustible2

}

export default dataCombustible2