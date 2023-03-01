import {DataAtspdu10A} from 'components/variables_sist2/var24_ats_pdu_10A';
import estadosStyles from 'styles/estadosStyles'

const dataAtspdu10A = ():DataAtspdu10A =>{
    let atspdu10A = {
        atspdu10A: {
            atspdu10A_F2:    estadosStyles.sinConexion,
            atspdu10A_tri2:  estadosStyles.sinConexion,
            atspdu10A_F1:    estadosStyles.sinConexion,
            atspdu10A_tri1:  estadosStyles.sinConexion,
          }
    }
    return atspdu10A
}
export default dataAtspdu10A