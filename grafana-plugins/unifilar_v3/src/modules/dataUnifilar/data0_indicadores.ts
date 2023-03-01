import { DataIndicadores } from 'components/Variables_pincipales/var0_indicadores';

const dataIndicadores = (): DataIndicadores => {
  let varindicadores: DataIndicadores = {
    indicador: {
      t_suministro_chi1: 0,
      t_retorno_chi1: 0,
      t_retorno_chi2: 0,
      t_suministro_chi2: 0,
      vol_cmt: 0,
      vol_inups: 0,
      vol_outups: 0,
    }
  }
   
  return varindicadores
}

export default dataIndicadores
