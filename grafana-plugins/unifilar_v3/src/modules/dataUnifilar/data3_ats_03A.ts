import {DataAts03A} from 'components/variables_sist1/var3_ats_03A';
import estadosStyles from 'styles/estadosStyles';

const data_ats_03A = ( ) :DataAts03A=> {
    let ats_03A = {
        ats03A:{
          ats03A_F2:   estadosStyles.sinConexion ,
          ats03A_tri2:  estadosStyles.sinConexion,
          ats03A_F1:    estadosStyles.sinConexion,
          ats03A_tri1:  estadosStyles.sinConexion,
        }
      }
    return ats_03A
}
export default data_ats_03A

