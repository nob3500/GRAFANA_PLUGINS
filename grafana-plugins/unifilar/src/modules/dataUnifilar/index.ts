import { PanelData } from '@grafana/data';
import { SimpleOptions } from 'types';

import dataLine_sist1 from './data15_lienas_sist1';
import dataTchi01A from './data14_tchi_01A';
import dataTchi03A from './data13_tchi_03A';
import dataAtschi07A from './data12_ats_chi_07A';
import dataTpdu01A from './data11_tpdu_01A';
import dataAtspdu09A from './data10_ats_pdu_09A';
import dataTupsout01A from './data9_tups_out_01A';
import dataTupsin01A from './data8_tups_in_01A';
import datarec01A from './data7_rec01A';
import data_atsrec05A from './data6_ats_rec_05A';
import data_atsantsat1A from './data5_ats_ant_sat_1A';
import dataTdp_01A from './data4_tdp_01A';
import data_ats_03A from './data3_ats_03A';
import dataIndicadores from './data0_indicadores';
import dataPSG_1A_2A from './data1_psg_s1_s2';
import dataCombustible from './data2_combustible_s1';

import { DataUnifilar } from 'components/uni'

const dataUnifilar = (data: PanelData, options: SimpleOptions): DataUnifilar => {
  let indicadores = dataIndicadores();
  let psg_1A_2A = dataPSG_1A_2A();
  let combustible = dataCombustible();
  let ats_03A = data_ats_03A();
  let tdp_01A = dataTdp_01A () ;
  let atsantsat1A = data_atsantsat1A ();
  let atsrec05A = data_atsrec05A ();
  let rec01A = datarec01A ();
  let tupsin01A = dataTupsin01A();
  let tupsout01A= dataTupsout01A();
  let atspdu09A = dataAtspdu09A ();
  let tpdu01A = dataTpdu01A ();
  let atschi07A = dataAtschi07A ();
  let tchi03A = dataTchi03A();
  let tchi01A = dataTchi01A ();
  let lineas_sistema1 = dataLine_sist1 ();
  

  let infoUnifilar: DataUnifilar = {
    unifilar: {
      dataIndicadores: indicadores,
      dataPSG_1A_2A: psg_1A_2A,
      dataDieselS1: combustible,
      dataAts03A: ats_03A,
      dataTdp01A: tdp_01A,
      dataAtsantsat1A: atsantsat1A,
      dataAtsrec05A: atsrec05A,
      dataRec01A: rec01A,
      dataTupsin01A: tupsin01A,
      dataTupsout01A: tupsout01A,
      dataAtspdu09A: atspdu09A,
      dataTpdu01A: tpdu01A,
      dataAtschi07A: atschi07A,
      dataTchi03A: tchi03A,
      dataTchi01A: tchi01A,
      dataLine_sist1: lineas_sistema1,



     
     
      dataDieselS2: {
        diesels2: {
          diesels2_hi: '',
          diesels2_low: '',
        }
      },
      dataAts04A: {
        ats04A: {
          ats04A_F2:    '',
          ats04A_tri2:  '',
          ats04A_F1:    '',
          ats04A_tri1:  '',
        }
      },
      dataTdp02A: {
        tdp02A:{
          tdp02A_0: '',
          tdp02A_1: '',
          tdp02A_2: '',
          tdp02A_3: '',
          tdp02A_4: '',
          tdp02A_5: '',
          tdp02A_6: '',
          tdp02A_7: '',
          tdp02A_8: '',
          tdp02A_9: '',
          tdp02A_10: '',
          tdp02A_11: '',
          tdp02A_12: '',
        }
      },
      dataAtsantsat2A: {
        atsantsat2A:{
          atsantsat2A_F2:    '',
          atsantsat2A_tri2:  '',
          atsantsat2A_F1:    '',
          atsantsat2A_tri1:  '',
        }
      },
      dataAtsrec06A: {
        atsrec06A: {
          atsrec06A_F2:    '',
          atsrec06A_tri2:  '',
          atsrec06A_F1:    '',
          atsrec06A_tri1:  '',
        }
      },
      dataRec02A: {
        rec02A: {
          tdc2A_1: '',
          tdc2A_2: '',
          tdc2A_3: '',
          tdc2A_4: '',
        }
      },
      dataTupsin02A: {
        tupsin02A: {
          tupsin02A_0: '',
          tupsin02A_1: '',
          tupsin02A_2: '',
          tupsin02A_3: '',
          tupsin02A_4: '',
          tupsin02A_5: '',
          tupsin02A_6: '',
        }
      },
      dataTupsout02A: {
        tupsout02A: {
          tupsout02A_0: '',
          tupsout02A_1: '',
          tupsout02A_2: '',
          tupsout02A_3: '',
          tupsout02A_4: '',
          tupsout02A_5: '',
          tupsout02A_6: '',
          tupsout02A_7: '',
        }
      },
      dataAtspdu10A: {
        atspdu10A: {
          atspdu10A_F2:    '',
          atspdu10A_tri2:  '',
          atspdu10A_F1:    '',
          atspdu10A_tri1:  '',
        }
      },
      dataTpdu02A: {
        tpdu02A: {
          tpdu02A_0: '',
          tpdu02A_1: '',
          tpdu02A_2: '',
          tpdu02A_3: '',
          tpdu02A_4: '',
          tpdu02A_5: '',
          tpdu02A_6: '',
          tpdu02A_7: '',
          tpdu02A_8: '',
          tpdu02A_9: '',
          tpdu02A_10: '',
          tpdu02A_11: '', 
          pdu02AF1: '',
          pdu02AF2: '',
          pdu02AF3: '',
          pdu02AF4: '',
          pdu02AF5: '',
          pdu02AF6: '',
          pdu02AF7: '',
          pdu02AF8: '',
          pdu02AF9: '',
          pdu02AF10: '',
          pout2A: '',
        }
      },
      dataAtschi08A: {
        atschi08A:{
          atschi08A_F2:    '',
          atschi08A_tri2:  '',
          atschi08A_F1:    '',
          atschi08A_tri1:  '',
        }
      },
      dataTchi04A: {
        tchi04A: {
          tchi04A_00: '',
          tchi04A_01: '',
          tchi04A_02: '',
          tchi04A_03: '',
          uno_EA3: '',
          uno_EA4: '',
        }
      },
      dataTchi02A: {
        tchi02A: {
          tchi02A_00: '',
          tchi02A_01: '',
          tchi02A_02: '',
          tchi02A_03: '',
          tchi02A_04: '',
          tchi02A_05: '',
          tchi02A_06: '',
          tchi02A_07: '',
          tchi02A_08: '',
          tchi02A_09: '',
          tchi02A_10: '',
          tchi02A_11: '',
          tchi02A_12: '',
          tchi02A_13: '',
          tchi02A_14: '',
          tchi02A_15: '',
          tchi02A_16: '',
          tchi02A_17: '',
          uma01: '',
          uma02: '',
          uma03: '',
          uma04: '',
          uma05: '',
          uma06: '',
          uma07: '',
          uma08: '',
          uma09: '',
          uma10: '',
          uma11: '',
          uma12: '',
          unoB1_3: '',
          unoB1_1: '',
          unoB1_2: '',
          unoB2_1: '',
          unoB2_2: '', 
        }
      },
      dataLine_sist2: {
        lineas_sistema2:{
          l2_1: '',
          l2_2: '',
          l2_3: '',
          l2_4: '',
          l2_5: '',
          l2_6: '',
          l2_7: '',
          l2_8: '',
          l2_9: '',
          l2_10: '',
          l2_11: '',
          l2_12: '',
          l2_13: '',
          l2_14: '',
          l2_15: '',  
          l2_16: '',
          l2_17: '',
          l2_18: '',
          l2_19: '',
          l2_20: '',
          l2_21: '',
          l2_22: '',
          l2_23: '',
          l2_24: '',
          l2_25: '',
          l2_26: '',
          l2_27: '',
          l2_28: '',
          l2_29: '',
          l2_30: '',
          l2_31: '',
          l2_32: '',
          l2_33: '',
          l2_34: '',
          l2_35: '',
          l2_36: '',
          l2_37: '',
          l2_38: '',
          l2_39: '',
          //l2_40: '',
          //l2_41: '',
          //l2_42: '',   
        }
      }
    }
  }

  return infoUnifilar
}

export default dataUnifilar
