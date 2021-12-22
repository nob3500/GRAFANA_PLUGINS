import {  PanelData } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataGeneradores } from 'components/variables/variables';
//import modo_controlStyles from 'styles/modoControlStyles';
import alarmasStyles from 'styles/alarmsStyles';
import estadoStyles from 'styles/estadoStyles';
//import { QueryField } from '@grafana/ui';

const dataGeneradores = (data: PanelData, options: SimpleOptions, ): DataGeneradores => {
     
  console.log('data: ', data);
  console.log('options: ', options);
  

//-------------------------------------------VARIABLES DE ESTADOS----------------------------------------------    
//ESTADOS

let st_on = estadoStyles.ok;
let st_off = estadoStyles.sinConexion;

//ALARMS
let alarm_on = alarmasStyles.off;
let alarm_off = alarmasStyles.warn;


//WARNINGS
/*let warning_on = alarmasStyles.on1;
let warning_off = alarmasStyles.sinconexion;*/
//
//-----------------------------------------------------------------------------------------------------------
//----------------------------------------ESTADOS Y ALARMAS DE GENERADORES------------------------------------

let st_gen = [];
let al_gen = [];
for (let i = 1; i <= 6; i++) {
st_gen[i] = data.series.find(({ name }) => name?.includes('st_gen' + i))?.fields[1].state?.calcs?.lastNotNull;
al_gen[i] = data.series.find(({ name }) => name?.includes('al_gen' + i))?.fields[1].state?.calcs?.lastNotNull;
if (st_gen[i] === 1) {
    st_gen[i] = st_on;
    }   else {
    st_gen[i] = st_off;
    }
    if (al_gen[i] === 1) {
        al_gen[i] = alarm_on;
        }   else {
        al_gen[i] = alarm_off;
        }
}


//VARIABLES DEL GENERADOR 

/*let t_wats_gen = [];
let t_va_gen = [];
let kva_h_gen = [];
let kvar_h_gen = [];
let fuel_l_gen = [];
let cur_avg_gen = [];
let vol_avg_gen = [];





for (let i = 1; i <= 6; i++) {

    t_wats_gen[i] = data.series.find(({ name }) => name?.includes('DATA.TOT_WATTS.VALUE'))?.fields[1].state?.calcs?.lastNotNull; 

    t_va_gen[i] = data.series.find(({ name }) => name?.includes('DATA.TOT_VA.VALUE' + i))?.fields[1].state?.calcs?.lastNotNull;  
    
    kva_h_gen[i] = data.series.find(({ name }) => name?.includes('DATA.KVA_HOURS.VALUE' + i))?.fields[1].state?.calcs?.lastNotNull; 

    kvar_h_gen[i] = data.series.find(({ name }) => name?.includes('DATA.KVAR_HOURS.VALUE' + i))?.fields[1].state?.calcs?.lastNotNull; 

    fuel_l_gen[i] = data.series.find(({ name }) => name?.includes('DATA.FUEL_LEV.VALUE' + i))?.fields[1].state?.calcs?.lastNotNull; 

    cur_avg_gen[i] = data.series.find(({ name }) => name?.includes('DATA.CUR_AVG.VALUE' + i))?.fields[1].state?.calcs?.lastNotNull; 

    vol_avg_gen[i] = data.series.find(({ name }) => name?.includes('DATA.LL_VOL_AVG.VALUE'+ i))?.fields[1].state?.calcs?.lastNotNull;     
      

    if (t_wats_gen[i] === null || t_wats_gen[i] === 0) {
        t_wats_gen[i] = 0;
        }   else {
            t_wats_gen[i] = parseFloat(t_wats_gen[i]).toFixed(1);
        } 
    if (t_va_gen[i] === null || t_va_gen[i] === 0) {
        t_va_gen[i] = 0;
        }   else {
            t_va_gen[i] = parseFloat(t_va_gen[i]).toFixed(1);
        } 

    if (kva_h_gen[i] === null || kva_h_gen[i] === 0) {
      kva_h_gen[i] = 0;
          }   else {
            kva_h_gen[i] = parseFloat(kva_h_gen[i]).toFixed(1);
          } 
    
    if (kvar_h_gen[i] === null || kvar_h_gen[i] === 0) {
      kvar_h_gen[i] = 0;
        }   else {
          kvar_h_gen[i] = parseFloat(kvar_h_gen[i]).toFixed(1);
        } 
    if (fuel_l_gen[i] === null || fuel_l_gen[i] === 0) {
      fuel_l_gen[i] = 0;
        }   else {
          fuel_l_gen[i] = parseFloat(fuel_l_gen[i]).toFixed(1);
        } 

    if (cur_avg_gen[i] === null || cur_avg_gen[i] === 0) {
      cur_avg_gen[i] = 0;
          }   else {
            cur_avg_gen[i] = parseFloat(cur_avg_gen[i]).toFixed(1);
          }        
          
    if (vol_avg_gen[i] === null || vol_avg_gen[i] === 0) {
      vol_avg_gen[i] = 0;
          }   else {
            vol_avg_gen[i] = parseFloat(vol_avg_gen[i]).toFixed(1);
          } 

         
    }

*/
 

//-----------------------------------------------------ALARMAS----------------------------------------------------//


// ---------------------------------------------------------------
  let generadores: DataGeneradores = {


    gen1:{
        boton_gen1: estadoStyles.sinConexion,
        color_gen1: estadoStyles.alarma,
        barra1_gen1:estadoStyles.sinConexion,
        contacto_gen1: estadoStyles.sinConexion,
        barra2_gen1: estadoStyles.sinConexion,
        modo_gen1:'',
        volt_gen1: 0,
        amp_gen1: 0,
        kw_gen1: 0,
        carga_gen1: 0,
        diesel_gen1: 0,
    },

    gen2:{
      boton_gen2: estadoStyles.sinConexion,
      color_gen2: estadoStyles.alarma,
      barra1_gen2:estadoStyles.sinConexion,
      contacto_gen2: estadoStyles.sinConexion,
      barra2_gen2: estadoStyles.sinConexion,
      modo_gen2:'',
      volt_gen2: 0,
      amp_gen2: 0,
      kw_gen2: 0,
      carga_gen2: 0,
      diesel_gen2: 0,
  },

  gen3:{
    boton_gen3: estadoStyles.sinConexion,
    color_gen3: estadoStyles.alarma,
    barra1_gen3:estadoStyles.sinConexion,
    contacto_gen3: estadoStyles.sinConexion,
    barra2_gen3: estadoStyles.sinConexion,
    modo_gen3:'',
    volt_gen3: 0,
    amp_gen3: 0,
    kw_gen3: 0,
    carga_gen3: 0,
    diesel_gen3: 0,
},

gen4:{
  boton_gen4: estadoStyles.sinConexion,
  color_gen4: estadoStyles.alarma,
  barra1_gen4:estadoStyles.sinConexion,
  contacto_gen4: estadoStyles.sinConexion,
  barra2_gen4: estadoStyles.sinConexion,
  modo_gen4:'',
  volt_gen4: 0,
  amp_gen4: 0,
  kw_gen4: 0,
  carga_gen4: 0,
  diesel_gen4: 0,
},

gen5:{
  boton_gen5: estadoStyles.sinConexion,
  color_gen5: estadoStyles.alarma,
  barra1_gen5:estadoStyles.sinConexion,
  contacto_gen5: estadoStyles.sinConexion,
  barra2_gen5: estadoStyles.sinConexion,
  modo_gen5:'',
  volt_gen5: 0,
  amp_gen5: 0,
  kw_gen5: 0,
  carga_gen5: 0,
  diesel_gen5: 0,
},

gen6:{
  boton_gen6: estadoStyles.sinConexion,
  color_gen6: estadoStyles.alarma,
  barra1_gen6:estadoStyles.sinConexion,
  contacto_gen6: estadoStyles.sinConexion,
  barra2_gen6: estadoStyles.sinConexion,
  modo_gen6:'',
  volt_gen6: 0,
  amp_gen6: 0,
  kw_gen6: 0,
  carga_gen6: 0,
  diesel_gen6: 0,
},

tdlow_A0:{
    boton_tdlow_A0: estadoStyles.sinConexion,
    color_tdlow_A0_torre: estadoStyles.alarma,
    color_tdlow_A0_indust: estadoStyles.ok,
    modo_tdlow_A0:'',
    voltff_tdlow_A0: 0,
    voltfn_tdlow_A0: 0,
    amp_tdlow_A0: 0,
    kw_tdlow_A0: 0,
    carga_tdlow_A0: 0,
    kvar_tdlow_A0: 0,
},

tdlow_A1:{
    boton_tdlow_A1: estadoStyles.sinConexion,
    piloto_tdlow_A1: estadoStyles.ok,
    volt_tdlow_A1: 0,
    amp_tdlow_A1: 0,
    kw_tdlow_A1: 0,
    kva_tdlow_A1: 0,
},

tdlow_A2:{
    boton_tdlow_A2: estadoStyles.sinConexion,
    piloto_tdlow_A2: estadoStyles.ok,
    volt_tdlow_A2: 0,
    amp_tdlow_A2: 0,
    kw_tdlow_A2: 0,
    kva_tdlow_A2: 0,
},

tableros:{
    piloto1_ats3a: estadoStyles.sinConexion,
    piloto2_ats3a: estadoStyles.ok,
    piloto1_ats4a: estadoStyles.sinConexion,
    piloto2_ats4a: estadoStyles.ok,
    piloto1_tpdu1a: estadoStyles.sinConexion,
    piloto2_tpdu1a: estadoStyles.ok,
    piloto1_tpdu2a: estadoStyles.sinConexion,
    piloto2_tpdu2a: estadoStyles.ok,
},
    
}
  



  console.log(generadores);

  



    return generadores;
};

export default dataGeneradores;
