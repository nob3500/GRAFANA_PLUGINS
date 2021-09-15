import { PanelData } from '@grafana/data';
import { SimpleOptions } from 'types';
import { DataUnifilar } from 'components/uni';

//principales
import dataTdlowA from './data_tdlowA';
import dataIndicadores from './data0_indicadores';
import dataPSG_1A_2A from './data1_psg_s1_s2';
// Data sismtema 1 
import dataCombustible from './data2_combustible_s1';
import data_ats_03A from './data3_ats_03A';
import dataTdp_01A from './data4_tdp_01A';
import data_atsantsat1A from './data5_ats_ant_sat_1A';
import data_atsrec05A from './data6_ats_rec_05A';
import datarec01A from './data7_rec01A';
import dataTupsin01A from './data8_tups_in_01A';
import dataTupsout01A from './data9_tups_out_01A';
import dataAtspdu09A from './data10_ats_pdu_09A';
import dataTpdu01A from './data11_tpdu_01A';
import dataAtschi07A from './data12_ats_chi_07A';
import dataTchi03A from './data13_tchi_03A';
import dataTchi01A from './data14_tchi_01A';
import dataLine_sist1 from './data15_lienas_sist1';
import data_Ats_sg_11A from './data_var15_1_ats_sg_11A';
import datatsg1A from './data15_2tsg1A';

//Data sistema 2
import dataCombustible2 from './data16_combustible_s2';
import data_ats_04A from './data17_ats_04A';
import dataTdp_02A from './data18_tdp_02A';
import dataAtsantsat2A  from './data19_ats_ant_sat_2A';
import dataAtsrec06A from './data20_ats_rec_06A';
import dataRec02A from './data21_rec_02A';
import dataTupsin02A from './data22_tups_in_02A';
import dataTupsout02A from './data23_tups_out_02A';
import dataAtspdu10A from './data24_ats_pdu_10A';
import dataTpdu02A from './data25_tpdu_02A';
import dataAtschi08A from './data26_ats_chi_08A';
import dataTchi04A from './data27_tchi_04A';
import dataTchi02A from './data28_tchi_02A';
import dataLine_sist2 from './data29_lineas_sist2';



const dataUnifilar = (data: PanelData, options: SimpleOptions): DataUnifilar => {


  //principales
  let tdlowA = dataTdlowA();
  let indicadores = dataIndicadores();
  let psg_1A_2A = dataPSG_1A_2A();
  //sistema 1 
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
  let ats_sg11A = data_Ats_sg_11A ();
  let tsg1A = datatsg1A ();
  //sistema 2
  let combustible_s2 = dataCombustible2 ();
  let ats04A = data_ats_04A ();
  let tdp02A = dataTdp_02A ();
  let atsantsat2A = dataAtsantsat2A ();
  let atsrec06A = dataAtsrec06A ();
  let rec02A = dataRec02A();
  let tupsin02A = dataTupsin02A ();
  let tupsout02A = dataTupsout02A ();
  let atspdu10A = dataAtspdu10A ();
  let tpdu02A = dataTpdu02A ();
  let atschi08A = dataAtschi08A ();
  let tchi04A = dataTchi04A();
  let tchi02A = dataTchi02A ();
  let lineas_sistema2 = dataLine_sist2();


  let infoUnifilar: DataUnifilar = {
    unifilar: {

      //principal
      dataTdlowA:tdlowA,
      dataIndicadores: indicadores,
      dataPSG_1A_2A: psg_1A_2A,
      //sistema1
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
      dataatssg11A: ats_sg11A,
      datatsg1A: tsg1A,
      //sistema2
      dataDieselS2: combustible_s2,
      dataAts04A : ats04A,
      dataTdp02A: tdp02A,
      dataAtsantsat2A: atsantsat2A,
      dataAtsrec06A: atsrec06A,
      dataRec02A: rec02A,
      dataTupsin02A: tupsin02A,
      dataTupsout02A: tupsout02A,
      dataAtspdu10A: atspdu10A,
      dataTpdu02A: tpdu02A,
      dataAtschi08A:atschi08A,
      dataTchi04A: tchi04A,
      dataTchi02A: tchi02A,
      dataLine_sist2: lineas_sistema2 
   
      
    }
  }

  return infoUnifilar
}

export default dataUnifilar
