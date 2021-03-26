# Creación de Grafana Plugins para Elastic

Esta es una guia para comenzar la creación de plugins para elasticSearch usando Grafana.
Con este archivo creearan un ambiente de desarrollo local.

## Estructura de Archivos

Se tiene que replicar la misma estructura de archivos ya que la carpeta grafana-data tiene que ser creada

+--/GRAFANA_ELASTIC
    +-- /grafana-data
    +-- /grafana-plugins
    +-- docker-compose.yml
    +-- README.md

## Requisitos

- Se recomienda instalar nvm si usan windows (https://github.com/coreybutler/nvm-windows) y si usan linux (https://github.com/nvm-sh/nvm) o Node.js directamente si tienen problemas con la instalacion de nvm.
- Se tiene que instalar Yarn. https://yarnpkg.com/.
- Se tiene que instalad Docker. https://www.docker.com/.
  Si usan windows se sigue este documento: https://docs.docker.com/docker-for-windows/install/
  Si usan linux escojan la distribucion y sigan el documento: https://docs.docker.com/engine/install/

## Descargar Proyecto

- Ir a la siguiente direccion: https://github.com/nob3500/GRAFANA_PLUGINS.
- Hacer una cuenta en github.
- Realizar un Fork del proyecto.
- Hacer un directorio en la PC.
- Luego realizar un clon del proyecto con el siguiente comando: git clone https://github.com/[USER]/GRAFANA_PLUGINS.git

## Gestion de git

- crear un nuevo ramal (branch): 

## Arrancar grafana

- Dentro del directorio del proyecto ejecutar: docker-compose up -d

## Inicializacion del Plugin

- Ir dentro del directorio grafana-plugins
- Correr el comando: npx @grafana/toolkit plugin:create my-plugin
- Correr el comando: cd my-plugin
- Correr el comando: yarn install
- Correr el comando: yarn dev
- En el arvhivo .gitignore borrar la linea con el nombre: dist/

## Gestion de plugin

- Dentro de la carpeta del plugin.
- Cada vez que se haga un cambio correr el comando: yarn dev
- Para evitar compilar siempre y compilar automaticamente ejecutar: yarn watch
- Una vez concluido el plugin ejecutar: yarn build

## 
