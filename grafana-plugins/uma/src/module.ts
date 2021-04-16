import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions(builder => {
  return builder
    .addTextInput({
      path: 'id',
      name: 'ID EQUIPO',
      //description: 'Description of panel option',
      //defaultValue: 'Default value of text input option',
    })
    .addTextInput({
      path: 'fase',
      name: 'FASE',
    })
    .addTextInput({
      path: 'sistema',
      name: 'SISTEMA',
    })
    .addTextInput({
      path: 'marca',
      name: 'MARCA',
    })
    .addTextInput({
      path: 'modelo',
      name: 'MODELO',
    })
    .addTextInput({
      path: 'ubicacion',
      name: 'UBICACION',
    })
});
