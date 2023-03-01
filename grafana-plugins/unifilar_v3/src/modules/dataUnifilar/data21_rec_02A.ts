import {DataRec02A} from 'components/variables_sist2/var21_rec_02A';
import estadosStyles from 'styles/estadosStyles';

const dataRec02A = ():DataRec02A => {

    let rec02A ={ 
        rec02A: {
            tdc2A_1: estadosStyles.sinConexion,
            tdc2A_2: estadosStyles.sinConexion,
            tdc2A_3: estadosStyles.sinConexion,
            tdc2A_4: estadosStyles.sinConexion,
      }
    }
      return rec02A
}
export default dataRec02A