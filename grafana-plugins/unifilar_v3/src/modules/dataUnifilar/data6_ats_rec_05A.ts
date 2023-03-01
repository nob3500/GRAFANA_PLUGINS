import {DataAtsrec05A} from 'components/variables_sist1/var6_ats_rec_05A'
import estadosStyles from 'styles/estadosStyles'


const data_atsrec05A = ():DataAtsrec05A =>{

    let atsrec05A =  {
        atsrec05A:{
          atsrec05A_F2:   estadosStyles.sinConexion,
          atsrec05A_tri2: estadosStyles.sinConexion,
          atsrec05A_F1:   estadosStyles.sinConexion,
          atsrec05A_tri1: estadosStyles.sinConexion,
        }
    }
    return atsrec05A
}

export default data_atsrec05A 