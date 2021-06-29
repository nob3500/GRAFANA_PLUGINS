import React from 'react';

type SistemaElectricoTotal = {
  Costo: number;
  Energia: number;
}

type SistaAACC = {
  Costo: number;
  Eneriga: number;
}

type ServiciosGenerales = {
  Costo: number;
  Energia: number;
}

type ConsumoUPS = {
  Costo: number;
  Energia: number;
}

type CuartoTI = {
  Costo: number;
  Energia: number;
}

type PreHot = {
  Costo: number;
  Energia: number;
}

type Temperatuta = {
  Minima: number;
  Promedio: number;
  Maxima: number;
}

type Humedad = {
  Minima: number;
  Promedio: number;
  Maxima: number;
}

export type InfoReporte = {
  sistemaElectrico: SistemaElectricoTotal;
  serviciosGenerales: ServiciosGenerales;
  sistemaAACC: SistaAACC;
  cuartoTI: CuartoTI;
  consumoUPS: ConsumoUPS;
  preHOT: PreHot;
  temperatura: Temperatuta;
  humedad: Humedad;
  pue: number;
  dcie: number;
  costoRack: number;
  EnergiaRack: number;
}

interface Data {
  data: InfoReporte
}

const Variables = ({ data }: Data) => {
  return (
    <g id="g763" fill="#fff" fontFamily="Franklin Gothic Medium" letterSpacing={0} wordSpacing={0}>
      <text
        id="tmin"
        x={395.95575}
        y={202.34538}
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: 1.25,
        }}
        xmlSpace="preserve"
        fontSize="7.7611px"
        strokeWidth={0.28478}
      >
        <tspan
          id="tspan3239-1-9-7"
          x={395.95575}
          y={202.34538}
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="7.7611px"
          strokeWidth={0.28478}
        >
          {`${data.temperatura.Minima} \xB0`}
        </tspan>
      </text>
      <text
        id="tpro"
        x={432.78073}
        y={202.06061}
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: 1.25,
        }}
        xmlSpace="preserve"
        fontSize="7.7611px"
        strokeWidth={0.28478}
      >
        <tspan
          id="tspan3239-1-9-1"
          x={432.78073}
          y={202.06061}
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="7.7611px"
          strokeWidth={0.28478}
        >
          {`${data.temperatura.Promedio} \xB0`}
        </tspan>
      </text>
      <text
        id="tmax"
        x={469.14563}
        y={202.86748}
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: 1.25,
        }}
        xmlSpace="preserve"
        fontSize="7.7611px"
        strokeWidth={0.28478}
      >
        <tspan
          id="tspan3239-1-9-9"
          x={469.14563}
          y={202.86748}
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="7.7611px"
          strokeWidth={0.28478}
        >
          {`${data.temperatura.Maxima} \xB0`}
        </tspan>
      </text>
      <text
        id="hmin"
        x={395.03088}
        y={235.22319}
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: 1.25,
        }}
        xmlSpace="preserve"
        fontSize="7.7611px"
        strokeWidth={0.28478}
      >
        <tspan
          id="tspan3239-1-9-5"
          x={395.03088}
          y={235.22319}
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="7.7611px"
          strokeWidth={0.28478}
        >
          {`${data.humedad.Minima} %`}
        </tspan>
      </text>
      <text
        id="hpro"
        x={431.15317}
        y={234.3629}
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: 1.25,
        }}
        xmlSpace="preserve"
        fontSize="7.7611px"
        strokeWidth={0.28478}
      >
        <tspan
          id="tspan3239-1-9-10"
          x={431.15317}
          y={234.3629}
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="7.7611px"
          strokeWidth={0.28478}
        >
          {`${data.humedad.Promedio} %`}
        </tspan>
      </text>
      <text
        id="hmax"
        x={467.69159}
        y={234.13152}
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: 1.25,
        }}
        xmlSpace="preserve"
        fontSize="7.7611px"
        strokeWidth={0.28478}
      >
        <tspan
          id="tspan3239-1-9-3"
          x={467.69159}
          y={234.13152}
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="7.7611px"
          strokeWidth={0.28478}
        >
          {`${data.humedad.Maxima} %`}
        </tspan>
      </text>
      <text
        id="pue"
        x={44.246849}
        y={183.47972}
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: 1.25,
        }}
        xmlSpace="preserve"
        fontSize="7.0556px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan3239-1-9-7-9"
          x={44.246849}
          y={183.47972}
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
            textAlign: 'center',
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="7.0556px"
          strokeWidth={0.26458}
          textAnchor="middle"
        >
          { `${data.pue}` }
        </tspan>
      </text>
      <text
        id="dcie"
        x={122.18771}
        y={183.47972}
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: 1.25,
        }}
        xmlSpace="preserve"
        fontSize="7.0556px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan3239-1-9-7-9-2"
          x={122.18771}
          y={183.47972}
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
            textAlign: 'center',
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="7.0556px"
          strokeWidth={0.26458}
          textAnchor="middle"
        >
          {`${data.dcie} %`}
        </tspan>
      </text>
      <text
        id="elec_gasto"
        x={86.910439}
        y={50.915413}
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: 1.25,
        }}
        xmlSpace="preserve"
        fontSize="7.0556px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan3239-1-9-0-0-7-8"
          x={86.910439}
          y={50.915413}
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          {`${data.sistemaElectrico.Costo} $` }
        </tspan>
      </text>
      <text
        id="elec_consumo"
        x={179.60794}
        y={50.434822}
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: 1.25,
        }}
        xmlSpace="preserve"
        fontSize="7.0556px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan3239-1-9-0-0-7-8-1"
          x={179.60794}
          y={50.434822}
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
            textAlign: 'end',
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="7.0556px"
          strokeWidth={0.26458}
          textAnchor="end"
        >
          {`${data.sistemaElectrico.Energia} Kw/h`}
        </tspan>
      </text>
      <text
        id="ilu_gasto"
        x={35.524597}
        y={97.530655}
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: 1.25,
        }}
        xmlSpace="preserve"
        fontSize="7.0556px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan3239-1-9-0-0-7-8-2"
          x={35.524597}
          y={97.530655}
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          {`${data.serviciosGenerales.Costo} $`}
        </tspan>
      </text>
      <text
        id="ilu_consumo"
        x={127.16381}
        y={97.050064}
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: 1.25,
        }}
        xmlSpace="preserve"
        fontSize="7.0556px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan3239-1-9-0-0-7-8-1-7"
          x={127.16381}
          y={97.050064}
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
            textAlign: 'end',
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="7.0556px"
          strokeWidth={0.26458}
          textAnchor="end"
        >
          {`${data.serviciosGenerales.Energia} Kw/h`}
        </tspan>
      </text>
      <text
        id="ups_gasto"
        x={5.0975118}
        y={143.56815}
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: 1.25,
        }}
        xmlSpace="preserve"
        fontSize="7.0556px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan3239-1-9-0-0-7-8-4"
          x={5.0975118}
          y={143.56815}
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          {`${data.consumoUPS.Costo} $`}
        </tspan>
      </text>
      <text
        id="ups_consumo"
        x={97.26593}
        y={143.08755}
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: 1.25,
        }}
        xmlSpace="preserve"
        fontSize="7.0556px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan3239-1-9-0-0-7-8-1-6"
          x={97.26593}
          y={143.08755}
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
            textAlign: 'end',
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="7.0556px"
          strokeWidth={0.26458}
          textAnchor="end"
        >
          {`${data.consumoUPS.Energia} $`}
        </tspan>
      </text>
      <text
        id="aacc_gasto"
        x={337.32474}
        y={51.198753}
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: 1.25,
        }}
        xmlSpace="preserve"
        fontSize="7.0556px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan3239-1-9-0-0-7-8-7"
          x={337.32474}
          y={51.198753}
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          {`${data.sistemaAACC.Costo} $`}
        </tspan>
      </text>
      <text
        id="aacc_consumo"
        x={428.43484}
        y={50.718163}
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: 1.25,
        }}
        xmlSpace="preserve"
        fontSize="7.0556px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan3239-1-9-0-0-7-8-1-1"
          x={428.43484}
          y={50.718163}
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
            textAlign: 'end',
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="7.0556px"
          strokeWidth={0.26458}
          textAnchor="end"
        >
          {`${data.sistemaAACC.Eneriga} Kw/h`}
        </tspan>
      </text>
      <text
        id="ti_gasto"
        x={390.53583}
        y={95.958733}
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: 1.25,
        }}
        xmlSpace="preserve"
        fontSize="7.0556px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan3239-1-9-0-0-7-8-8"
          x={390.53583}
          y={95.958733}
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          {`${data.cuartoTI.Costo}`}
        </tspan>
      </text>
      <text
        id="ti_consumo"
        x={481.64594}
        y={95.478142}
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: 1.25,
        }}
        xmlSpace="preserve"
        fontSize="7.0556px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan3239-1-9-0-0-7-8-1-4"
          x={481.64594}
          y={95.478142}
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
            textAlign: 'end',
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="7.0556px"
          strokeWidth={0.26458}
          textAnchor="end"
        >
          {`${data.cuartoTI.Energia} Kw/h`}
        </tspan>
      </text>
      <text
        id="gen_gasto-3"
        x={29.753948}
        y={226.15852}
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: 1.25,
        }}
        xmlSpace="preserve"
        fontSize="7.0556px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan3239-1-9-0-0-7-8-4-8-9-67"
          x={29.753948}
          y={226.15852}
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          {`${data.costoRack}`}
        </tspan>
      </text>
      <text
        id="gen_consumo-6"
        x={138.35677}
        y={228.09958}
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: 1.25,
        }}
        xmlSpace="preserve"
        fontSize="7.0556px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan3239-1-9-0-0-7-8-1-6-0-4-2"
          x={138.35677}
          y={228.09958}
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
            textAlign: 'end',
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="7.0556px"
          strokeWidth={0.26458}
          textAnchor="end"
        >
          {`${data.EnergiaRack}`}
        </tspan>
      </text>
      <text
        id="hot_gasto"
        x={399.88214}
        y={151.33698}
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: 1.25,
        }}
        xmlSpace="preserve"
        fontSize="7.0556px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan3239-1-9-0-0-7-8-8-3"
          x={399.88214}
          y={151.33698}
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="7.0556px"
          strokeWidth={0.26458}
        >
          {`${data.preHOT.Costo} $`}
        </tspan>
      </text>
      <text
        id="hot_consumo"
        x={490.99225}
        y={150.85638}
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: 1.25,
        }}
        xmlSpace="preserve"
        fontSize="7.0556px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan3239-1-9-0-0-7-8-1-4-7"
          x={490.99225}
          y={150.85638}
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
            textAlign: 'end',
          }}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="7.0556px"
          strokeWidth={0.26458}
          textAnchor="end"
        >
          {`${data.preHOT.Energia} Kw/h`}
        </tspan>
      </text>
    </g>
  );
};

export default Variables;
