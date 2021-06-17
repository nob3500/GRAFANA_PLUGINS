import { DataPSG_1A_2A } from 'components/Variables_pincipales/var1_PSG_s1_s2'

const dataPSG_1A_2A = (): DataPSG_1A_2A => {
  let dataPSG_1A_2A: DataPSG_1A_2A = {
    psg_1A_2A:{
      psg01A_1: '',
      psg01A_2: '',
      psg01A_3: '',
      gen1: '', 
      gen2: '', 
      gen3: '', 
      psg02A_1: '',
      psg02A_2: '',
      psg02A_3: '',
      gen4: '', 
      gen5: '', 
      gen6: ''
    }
  }

  return dataPSG_1A_2A
}

export default dataPSG_1A_2A

