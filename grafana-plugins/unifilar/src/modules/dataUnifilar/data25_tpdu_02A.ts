import {DataTpdu02A} from 'components/variables_sist2/var25_tpdu_02A';
import breakersStyles from 'styles/breakersStyles';
import estadosStyles from 'styles/estadosStyles';

const dataTpdu02A = (): DataTpdu02A => {

    let tpdu02A ={
        tpdu02A: {
            tpdu02A_0: breakersStyles.sinConexion,
            tpdu02A_1: breakersStyles.sinConexion,
            tpdu02A_2: breakersStyles.sinConexion,
            tpdu02A_3: breakersStyles.sinConexion,
            tpdu02A_4: breakersStyles.sinConexion,
            tpdu02A_5: breakersStyles.sinConexion,
            tpdu02A_6: breakersStyles.sinConexion,
            tpdu02A_7: breakersStyles.sinConexion,
            tpdu02A_8: breakersStyles.sinConexion,
            tpdu02A_9: breakersStyles.sinConexion,
            tpdu02A_10: breakersStyles.sinConexion,
            tpdu02A_11: breakersStyles.sinConexion, 
            tpdu02A_12: breakersStyles.sinConexion,

            pdu02AF1: estadosStyles.cerrado,
            pdu02AF2: estadosStyles.sinConexion,
            pdu02AF3: estadosStyles.sinConexion,
            pdu02AF4: estadosStyles.sinConexion,
            pdu02AF5: estadosStyles.sinConexion,
            pdu02AF6: estadosStyles.sinConexion,
            pdu02AF7: estadosStyles.sinConexion,
            pdu02AF8: estadosStyles.sinConexion,
            pdu02AF9: estadosStyles.sinConexion,
            pdu02AF10: estadosStyles.sinConexion,
            pout2A: estadosStyles.sinConexion,
          }
    }
    return tpdu02A
}
export default dataTpdu02A