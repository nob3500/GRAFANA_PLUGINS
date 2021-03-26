# Creación de Grafana Plugins para Elastic

Esta es una guia para comenzar la creación de plugins para elasticSearch usando Grafana.
Con este archivo creearan un ambiente de desarrollo local.

## Estructura de Archivos

Se tiene que replicar la misma estructura de archivos ya que la carpeta grafana-data tiene que ser creada

+   ./GRAFANA_ELASTIC
    +   grafana-data
    +   grafana-plugins
    ./  docker-compose.yml
    ./  README.md

## Requisitos

- Se recomienda instalar nvm si usan windows (https://github.com/coreybutler/nvm-windows) y si usan linux (https://github.com/nvm-sh/nvm) o Node.js directamente si tienen problemas con la instalacion de nvm.
- Se tiene que instalar Yarn. https://yarnpkg.com/.
- Se tiene que instalad Docker. https://www.docker.com/.
  Si usan windows se sigue este documento: https://docs.docker.com/docker-for-windows/install/
  Si usan linux escojan la distribucion y sigan el documento: https://docs.docker.com/engine/install/

## 
