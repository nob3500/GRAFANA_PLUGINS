import { DataPSG_1A_2A } from 'components/Variables_pincipales/var1_PSG_s1_s2'
import breakersStyles from 'styles/breakersStyles'
import generadoresStyles from 'styles/generadoresStyles';

const dataPSG_1A_2A = (): DataPSG_1A_2A => {
  let dataPSG_1A_2A: DataPSG_1A_2A = {
    psg_1A_2A:{
      psg01A_1: breakersStyles.sinConexion,
      psg01A_2: breakersStyles.sinConexion,
      psg01A_3: breakersStyles.sinConexion,
      gen1: generadoresStyles.Standby, 
      gen2: generadoresStyles.sinConexion, 
      gen3: generadoresStyles.sinConexion, 
      psg02A_1: breakersStyles.sinConexion,
      psg02A_2: breakersStyles.sinConexion,
      psg02A_3: breakersStyles.sinConexion,
      gen4: generadoresStyles.sinConexion, 
      gen5: generadoresStyles.sinConexion, 
      gen6: generadoresStyles.sinConexion, 
    }
  }

  return dataPSG_1A_2A
}

export default dataPSG_1A_2A

