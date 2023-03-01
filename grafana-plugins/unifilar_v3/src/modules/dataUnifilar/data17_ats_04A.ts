 import {DataAts04A} from 'components/variables_sist2/var17_ats_04A'
 import estadosStyles from 'styles/estadosStyles';

 const data_ats_04A= ():DataAts04A => {
        let Ats_04A = {
            ats04A: {
                ats04A_F2:    estadosStyles.sinConexion,
                ats04A_tri2:  estadosStyles.sinConexion,
                ats04A_F1:    estadosStyles.sinConexion,
                ats04A_tri1:  estadosStyles.sinConexion,
              }
        }
        return Ats_04A
 }
 export default data_ats_04A