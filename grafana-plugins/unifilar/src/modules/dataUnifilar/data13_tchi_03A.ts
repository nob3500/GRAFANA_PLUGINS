import {DataTchi03A} from 'components/variables_sist1/var13_tchi_03A'
import estadosStyles from 'styles/estadosStyles';
import breakersStyles from 'styles/breakersStyles';

const dataTchi03A = ():DataTchi03A => {

    let tchi03A = {
        tchi03A :{
            tchi03A_00: breakersStyles.sinConexion,
            tchi03A_01: breakersStyles.sinConexion,
            tchi03A_02: breakersStyles.sinConexion,
            tchi03A_03: breakersStyles.sinConexion,
            uno_EA3: estadosStyles.sinConexion,
            uno_EA4: estadosStyles.sinConexion, 
          }
    }
    return tchi03A
}

export default dataTchi03A