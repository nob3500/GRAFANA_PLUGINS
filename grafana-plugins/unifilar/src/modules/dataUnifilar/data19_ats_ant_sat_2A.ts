import {DataAtsantsat2A} from 'components/variables_sist2/var19_ats_ant_sat_2A';
import estadosStyles from 'styles/estadosStyles';

const dataAtsantsat2A = ( ):DataAtsantsat2A =>{
    
    let atsantsat2A = {

        atsantsat2A:{
            atsantsat2A_F2:    estadosStyles.sinConexion,
            atsantsat2A_tri2:  estadosStyles.sinConexion,
            atsantsat2A_F1:    estadosStyles.sinConexion,
            atsantsat2A_tri1:  estadosStyles.sinConexion,
          }
    }
    return atsantsat2A

}

export default dataAtsantsat2A