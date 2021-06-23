import {DataRec01A} from 'components/variables_sist1/var7_rec_01A'
import estadosStyles from 'styles/estadosStyles'; 


    const  datarec01A = ():DataRec01A =>{

        let rec01A ={
            rec01A:{
                tdc1A_1: estadosStyles.sinConexion,
                tdc1A_2: estadosStyles.sinConexion,
                tdc1A_3: estadosStyles.sinConexion,
                tdc1A_4: estadosStyles.sinConexion,
              }

        }
        return rec01A
}
export default datarec01A