import  {DataAtsantsat1A} from 'components/variables_sist1/var5_ats_ant_sat_1A'; 
import estadosStyles from 'styles/estadosStyles';

const data_atsantsat1A = () :DataAtsantsat1A => {

    let atssantsat_1A =  {
        atsantsat1A:{
          atsantsat1A_F2:    estadosStyles.sinConexion,
          atsantsat1A_tri2:  estadosStyles.sinConexion,
          atsantsat1A_F1:    estadosStyles.sinConexion,
          atsantsat1A_tri1:  estadosStyles.sinConexion,
        }
      }
    return atssantsat_1A

}

export default data_atsantsat1A;