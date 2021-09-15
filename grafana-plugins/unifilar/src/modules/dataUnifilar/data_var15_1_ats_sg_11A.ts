import {DataAtssg11A} from 'components/variables_sist1/var15_1_ats_sg_11A';
import estadosStyles from 'styles/estadosStyles';

const data_ats_sg_11A = ( ) :DataAtssg11A=> {
    let ats_sg_11A = {
        ats_sg11A:{
            ats_sg11A_F2:   estadosStyles.sinConexion ,
            ats_sg11A_tri2:  estadosStyles.sinConexion,
            ats_sg11A_F1:    estadosStyles.sinConexion,
            ats_sg11A_tri1:  estadosStyles.sinConexion,
        }
      }
    return ats_sg_11A
}
export default data_ats_sg_11A

