import { PanelData } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataUnifilar } from 'components/uni'

const dataUnifilar = (data: PanelData, options: SimpleOptions): DataUnifilar => {
  let infoUnifilar: DataUnifilar = {
    unifilar: {
      dataIndicadores: {
        indicador: {
          t_suministro_chi1: 0,
          t_retorno_chi1: 0,
          t_retorno_chi2: 0,
          t_suministro_chi2: 0,
          vol_cmt: 0,
          vol_inups: 0,
          vol_outups: 0,
        }
      },
      dataPSG_1A_2A: {
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
          gen6: '', 
    
        }
      },
      dataDieselS1: {
    
        diesels1: {
          diesels1_hi:  '',
          diesels1_low: '',
        }
      },
      dataAts03A: {
        ats03A:{
          ats03A_F2:    '',
          ats03A_tri2:  '',
          ats03A_F1:    '',
          ats03A_tri1:  '',
        }
      },
      dataTdp01A:  {
        tdp01A:{
          tdp01A_0: '',
          tdp01A_1: '',
          tdp01A_2: '',
          tdp01A_3: '',
          tdp01A_4: '',
          tdp01A_5: '',
          tdp01A_6: '',
          tdp01A_7: '',
          tdp01A_8: '',
          tdp01A_9: '',
          tdp01A_10: '',
          tdp01A_11: '',
          tdp01A_12: '',
        }
      },
      dataAtsantsat1A: {
        atsantsat1A:{
          atsantsat1A_F2:    '',
          atsantsat1A_tri2:  '',
          atsantsat1A_F1:    '',
          atsantsat1A_tri1:  '',
        }
      },
      dataAtsrec05A: {
        atsrec05A:{
          atsrec05A_F2:   '',
          atsrec05A_tri2: '',
          atsrec05A_F1:   '',
          atsrec05A_tri1: '',
        }
      },
      dataRec01A: {
        rec01A:{
          tdc1A_1: '',
          tdc1A_2: '',
          tdc1A_3: '',
          tdc1A_4: '',
        }
      },
      dataTupsin01A: {
        tupsin01A:{
          tupsin01A_0: '',
          tupsin01A_1: '',
          tupsin01A_2: '',
          tupsin01A_3: '',
          tupsin01A_4: '',
          tupsin01A_5: '',
          tupsin01A_6: '',
        }
      },
      dataTupsout01A: {
        tupsout01A:{
          tupsout01A_0: '',
          tupsout01A_1: '',
          tupsout01A_2: '',
          tupsout01A_3: '',
          tupsout01A_4: '',
          tupsout01A_5: '',
          tupsout01A_6: '',
          tupsout01A_7: '',
        }
      },
      dataAtspdu09A: {
        atspdu09A:{
          atspdu09A_F2:    '',
          atspdu09A_tri2:  '',
          atspdu09A_F1:    '',
          atspdu09A_tri1:  '', 
        }
      },
      dataTpdu01A: {
        tpdu01A:{
          tpdu01A_0: '',
          tpdu01A_1: '',
          tpdu01A_2: '',
          tpdu01A_3: '',
          tpdu01A_4: '',
          tpdu01A_5: '',
          tpdu01A_6: '',
          tpdu01A_7: '',
          tpdu01A_8: '',
          tpdu01A_9: '',
          tpdu01A_10: '',
          tpdu01A_11: '',
          tpdu01A_12: '',
          pdu01AF1: '',
          pdu01AF2: '',
          pdu01AF3: '',
          pdu01AF4: '',
          pdu01AF5: '',
          pdu01AF6: '',
          pdu01AF7: '',
          pdu01AF8: '',
          pdu01AF9: '',
          pdu01AF10: '',
          pout1A: '',
        }
      },
      dataAtschi07A: {
        atschi07A :{
          atschi07A_F2:    '',
          atschi07A_tri2:  '',
          atschi07A_F1:    '',
          atschi07A_tri1:  '',   
            
        }
      },
      dataTchi03A: {
        tchi03A :{
          tchi03A_00: '',
          tchi03A_01: '',
          tchi03A_02: '',
          tchi03A_03: '',
          uno_EA3: '',
          uno_EA4: '', 
        }
      },
      dataTchi01A: {
        tchi01A :{
          tchi01A_00: '',
          tchi01A_01: '',
          tchi01A_02: '',
          tchi01A_03: '',
          tchi01A_04: '',
          tchi01A_05: '',
          tchi01A_06: '',
          tchi01A_07: '',
          tchi01A_08: '',
          tchi01A_09: '',
          tchi01A_10: '',
          tchi01A_11: '',
          tchi01A_12: '',
          tchi01A_13: '',
          tchi01A_14: '',
          tchi01A_15: '',
          tchi01A_16: '',
          tchi01A_17: '',
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
          unoB1_6: '',
          unoB1_4: '',
          unoB1_5: '',
          unoB2_3: '',
          unoB2_4: '',    
        }
      },
      dataLine_sist1: {
        lineas_sistema1:{
            l1_1: '',
            l1_2: '',
            l1_3: '',
            l1_4: '',
            l1_5: '',
            l1_6: '',
            l1_7: '',
            l1_8: '',
            l1_9: '',
            l1_10: '',
            l1_11: '',
            l1_12: '',
            l1_13: '',
            l1_14: '',
            l1_15: '',  
            l1_16: '',
            l1_17: '',
            l1_18: '',
            l1_19: '',
            l1_20: '',
            l1_21: '',
            l1_22: '',
            l1_23: '',
            l1_24: '',
            l1_25: '',
            l1_26: '',
            l1_27: '',
            l1_28: '',
            l1_29: '',
            l1_30: '',
            l1_31: '',
            l1_32: '',
            l1_33: '',
            l1_34: '',
            l1_35: '',
            l1_36: '',
            l1_37: '',
            l1_38: '',
            l1_39: '',
            l1_40: '',
            l1_41: '',
            l1_42: '',
            //l1_43: '',  
        }
      },
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
