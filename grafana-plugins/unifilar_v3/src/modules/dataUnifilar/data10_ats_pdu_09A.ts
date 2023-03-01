import {DataAtspdu09A} from 'components/variables_sist1/var10_ats_pdu_09A';
import estadosStyles from 'styles/estadosStyles';

const dataAtspdu09A  = ():DataAtspdu09A => {

    let atspdu09A = {
        atspdu09A:{
            atspdu09A_F2:    estadosStyles.sinConexion,
            atspdu09A_tri2:  estadosStyles.sinConexion,
            atspdu09A_F1:    estadosStyles.sinConexion,
            atspdu09A_tri1:  estadosStyles.sinConexion, 
          }
    }
    return atspdu09A
}

export default dataAtspdu09A