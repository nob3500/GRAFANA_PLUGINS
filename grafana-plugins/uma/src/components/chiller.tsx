import React from 'react'

import { Variables, Chiller } from './variables'

const Chiller = () => {
  let dataChiller: Chiller

  dataChiller = {
    Compresor1: {
      Estado: '',
      TemperaturaAceite: 0,
      PresionSuccion: 0,
      PresionDescarga: 0,
      HorasFunc: 0      
    },
    Compresor2: {
      Estado: '',
      TemperaturaAceite: 0,
      PresionSuccion: 0,
      PresionDescarga: 0,
      HorasFunc: 0  
    },
    DatosGenerales: {
      Etapa: 'A',
      Sistema: '1',
      Marca: 'YORK',
      Modelo: 'YVAA0263',
      Ubicacion: 'EXTERIORES'
    },
    Alarmas: {
      AlarmaGeneral: '',
      CodAlarmaS1: '',
      CodAlarmaS2: ''
    },
    ID: '',
    Estado: '',
    TemperaturaRetorno: 0,
    TemperaturaSuministro: 0,
    Corriente: 0
  }

  return (
    <svg
      id="svg8"
      viewBox="0 0 508 193.15"
    >
      <defs id="defs2">
        <linearGradient id="linearGradient1260">
          <stop id="stop1258" offset={0} />
          <stop id="stop1256" offset={1} stopColor="#ff0" />
        </linearGradient>
        <linearGradient
          id="linearGradient15377"
          x1={476.53}
          x2={524.95}
          y1={236.86}
          y2={237.26}
          gradientTransform="translate(-267.25 -59.588)"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop15371" offset={0} stopColor="#168498" />
          <stop id="stop15373" offset={1} stopColor="#168498" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="linearGradient14967"
          x1={79.873}
          x2={81.36}
          y1={114.53}
          y2={36.041}
          gradientTransform="matrix(-1.0781 0 0 .99767 319.77 -29.567)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient14947"
        />
        <linearGradient id="linearGradient14947">
          <stop id="stop14943" offset={0} stopColor="#002746" />
          <stop id="stop14945" offset={1} stopColor="#002746" stopOpacity={0} />
        </linearGradient>
        <filter
          id="filter21601"
          x={-0.032209}
          y={-0.040802}
          width={1.0644}
          height={1.0816}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur id="feGaussianBlur21603" stdDeviation={0.046267815} />
        </filter>
        <filter
          id="filter21611"
          x={-0.044324}
          y={-0.05234}
          width={1.0886}
          height={1.1047}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur id="feGaussianBlur21613" stdDeviation={0.05935181} />
        </filter>
        <clipPath id="clipPath1984">
          <path
            id="path1986"
            d="M371.5 79.284l5.412-6.682s11.36 3.475 11.693 3.475 9.087-6.548 9.087-6.548 3.408-7.016 3.542-7.35c.133-.334.334-5.813.334-5.813s-2.339-2.673-2.807-2.94-6.48-3.341-6.815-3.675c-.334-.334-4.009-3.809-4.276-4.076-.267-.267-.602-2.272-.602-2.272l.268-7.216 11.827 3.675 5.813 4.944s5.88 8.553 6.013 9.555c.134 1.002 2.205 8.486 1.404 10.424-.802 1.938-3.542 8.62-4.343 9.555-.802.935-6.75 6.28-7.284 6.615-.534.334-6.347 3.074-7.817 3.541-1.47.468-10.49 1.604-11.827 1.537-1.337-.067-5.68-2.806-6.548-3.14-.869-.334-3.074-3.608-3.074-3.608z"
            fill="none"
            strokeWidth=".26458px"
            stroke="#000"
          />
        </clipPath>
        <clipPath id="clipPath2072">
          <path
            id="path2074"
            d="M387.61 46.155l-.035-11.264 10.34 1.679 5.765 5.102s3.78 4.63 4.157 5.48c.378.851 3.875 6.332 3.875 6.332l1.606 13.229s-3.307 6.237-3.685 7.37c-.378 1.134-6.71 8.221-7.087 8.41-.378.19-12.757 1.796-13.891 2.268-1.134.473-7.37.945-7.37.945l-6.899-2.456-4.63-3.308 5.953-7.56s4.82-4.724 6.142-5.102c1.323-.378 6.898-.945 6.898-.945z"
            fill="none"
            strokeWidth=".26458px"
            stroke="#000"
          />
        </clipPath>
        <filter
          id="filter21601-3-5"
          x={-0.032209}
          y={-0.040802}
          width={1.0644}
          height={1.0816}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            id="feGaussianBlur21603-0-7"
            stdDeviation={0.046267815}
          />
        </filter>
        <filter
          id="filter21611-1-1"
          x={-0.044324}
          y={-0.05234}
          width={1.0886}
          height={1.1047}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            id="feGaussianBlur21613-4-0"
            stdDeviation={0.05935181}
          />
        </filter>
        <linearGradient
          id="linearGradient4374-9-7"
          x1={671.34}
          x2={587.39}
          y1={50.442}
          y2={50.084}
          gradientTransform="matrix(.89198 0 0 -.598 -110.77 66.461)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient1260"
        />
        <clipPath id="clipPath1163">
          <path
            id="path1165"
            d="M131.35 106.21v-6.426l-23.718 6.615s8.126 31.75 8.504 32.789c.162.444 21.545-1.323 21.261-.095-.283 1.229 10.016-4.819 9.639-4.819h-3.213l-5.197-6.614z"
            fill="none"
            strokeWidth=".26458px"
            stroke="#000"
          />
        </clipPath>
        <filter
          id="filter21611-1-1-4"
          x={-0.044324}
          y={-0.05234}
          width={1.0886}
          height={1.1047}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            id="feGaussianBlur21613-4-0-4"
            stdDeviation={0.05935181}
          />
        </filter>
        <filter
          id="filter21601-3-5-4"
          x={-0.032209}
          y={-0.040802}
          width={1.0644}
          height={1.0816}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            id="feGaussianBlur21603-0-7-9"
            stdDeviation={0.046267815}
          />
        </filter>
        <filter
          id="filter21611-1-1-4-7"
          x={-0.044324}
          y={-0.05234}
          width={1.0886}
          height={1.1047}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            id="feGaussianBlur21613-4-0-4-9"
            stdDeviation={0.05935181}
          />
        </filter>
        <filter
          id="filter21611-1-1-4-7-6"
          x={-0.044324}
          y={-0.05234}
          width={1.0886}
          height={1.1047}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            id="feGaussianBlur21613-4-0-4-9-9"
            stdDeviation={0.05935181}
          />
        </filter>
        <filter
          id="filter21611-4"
          x={-0.044324}
          y={-0.05234}
          width={1.0886}
          height={1.1047}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            id="feGaussianBlur21613-2"
            stdDeviation={0.05935181}
          />
        </filter>
        <filter
          id="filter21601-1"
          x={-0.032209}
          y={-0.040802}
          width={1.0644}
          height={1.0816}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            id="feGaussianBlur21603-9"
            stdDeviation={0.046267815}
          />
        </filter>
        <filter
          id="filter21601-1-7"
          x={-0.032209}
          y={-0.040802}
          width={1.0644}
          height={1.0816}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            id="feGaussianBlur21603-9-4"
            stdDeviation={0.046267815}
          />
        </filter>
        <filter
          id="filter21611-4-9"
          x={-0.044324}
          y={-0.05234}
          width={1.0886}
          height={1.1047}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            id="feGaussianBlur21613-2-1"
            stdDeviation={0.05935181}
          />
        </filter>
        <filter
          id="filter21324-6"
          x={-0.01272}
          y={-0.011357}
          width={1.0254}
          height={1.0227}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            id="feGaussianBlur21326-5"
            stdDeviation={0.008764315}
          />
        </filter>
        <filter
          id="filter21328-6"
          x={-0.10229}
          y={-0.013595}
          width={1.2046}
          height={1.0272}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            id="feGaussianBlur21330-7"
            stdDeviation={0.059200515}
          />
        </filter>
        <filter
          id="filter21336-5"
          x={-0.013959}
          y={-0.085517}
          width={1.0279}
          height={1.171}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            id="feGaussianBlur21338-9"
            stdDeviation={0.06344668}
          />
        </filter>
        <linearGradient
          id="linearGradient1567"
          x1={671.34}
          x2={587.39}
          y1={50.442}
          y2={50.084}
          gradientTransform="matrix(.93054 0 0 -.59796 -256.79 41.442)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient1260"
        />
        <linearGradient
          id="linearGradient1790"
          x1={671.34}
          x2={587.39}
          y1={50.442}
          y2={50.084}
          gradientTransform="matrix(.93054 0 0 -.59796 -256.79 123.29)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient1260"
        />
        <linearGradient
          id="linearGradient1820"
          x1={671.34}
          x2={587.39}
          y1={50.442}
          y2={50.084}
          gradientTransform="matrix(.93054 0 0 -.59796 -256.79 150.31)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient1260"
        />
        <linearGradient
          id="linearGradient1850"
          x1={671.34}
          x2={587.39}
          y1={50.442}
          y2={50.084}
          gradientTransform="matrix(.93054 0 0 -.59796 -256.79 177.33)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient1260"
        />
        <linearGradient
          id="linearGradient1880"
          x1={671.34}
          x2={587.39}
          y1={50.442}
          y2={50.084}
          gradientTransform="matrix(.89198 0 0 -.598 -110.77 126.3)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient1260"
        />
        <clipPath id="clipPath10102">
          <path
            id="path10104"
            d="M-288.97-78.374v-59.141l-121.17-31.734-41.554 11.134 2.607 53.296 125.01 52.41z"
            fill="none"
            strokeWidth=".26458px"
            stroke="#000"
          />
        </clipPath>
        <linearGradient
          id="linearGradient3292"
          x1={524.14}
          x2={525.07}
          y1={291.75}
          y2={216.73}
          gradientTransform="matrix(-1.016 0 0 1 568.93 -212.22)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient15175"
        />
        <linearGradient id="linearGradient15175">
          <stop id="stop15171" offset={0} stopColor="#178497" />
          <stop id="stop15173" offset={1} stopColor="#178497" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="linearGradient8841"
          x1={524.14}
          x2={525.07}
          y1={291.75}
          y2={216.73}
          gradientTransform="matrix(1.016 0 0 1 -303.33 -211.89)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient15175"
        />
        <clipPath id="clipPath835-87-6-6">
          <path
            id="path837-76-3-7"
            d="M96.618 96.281l-37.15-13.898V92.94H44.902l-4.96 27.807 32.334 7.638z"
            fill="none"
            opacity={0.75}
            paintOrder="markers stroke fill"
            strokeDashoffset={21.354}
            strokeLinecap="square"
            strokeLinejoin="round"
            strokeWidth={0.565}
            stroke="#fff"
          />
        </clipPath>
        <linearGradient
          id="linearGradient8863"
          x1={258.93}
          x2={258.93}
          y1={223.38}
          y2={273.52}
          gradientTransform="translate(-25.459 -124.4)"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop8857" offset={0} stopColor="#178299" />
          <stop id="stop8859" offset={1} stopColor="#178299" stopOpacity={0} />
        </linearGradient>
        <filter
          id="filter2963"
          x={-0.10655}
          y={-0.13087}
          width={1.2131}
          height={1.2617}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur id="feGaussianBlur2965" stdDeviation={0.16760617} />
        </filter>
        <filter
          id="filter2963-5"
          x={-0.10655}
          y={-0.13087}
          width={1.2131}
          height={1.2617}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur id="feGaussianBlur2965-0" stdDeviation={0.16760617} />
        </filter>
        <linearGradient
          id="linearGradient4474"
          x1={229.39}
          x2={229.39}
          y1={-116.55}
          y2={-98.557}
          gradientTransform="matrix(.99743 0 0 .98452 -98.88 126)"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop4468" offset={0} stopColor="#1aea78" />
          <stop id="stop4470" offset={1} stopColor="#1aea78" stopOpacity={0} />
        </linearGradient>
        <filter
          id="filter2703"
          x={-0.09327}
          y={-0.022304}
          width={1.1865}
          height={1.0446}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur id="feGaussianBlur2705" stdDeviation={0.10552047} />
        </filter>
        <filter
          id="filter2663"
          x={-0.011369}
          y={-0.012705}
          width={1.0227}
          height={1.0254}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur id="feGaussianBlur2665" stdDeviation={0.089972254} />
        </filter>
        <linearGradient
          id="linearGradient701"
          x1={67.936}
          x2={71.597}
          y1={9.2114}
          y2={267.28}
          gradientTransform="translate(81.318 300)"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="stop922-4" offset={0} stopColor="#162d50" />
          <stop id="stop924-4" offset={1} stopColor="#162d50" stopOpacity={0} />
        </linearGradient>
        <filter
          id="filter2963-5-3"
          x={-0.10655}
          y={-0.13087}
          width={1.2131}
          height={1.2617}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            id="feGaussianBlur2965-0-1"
            stdDeviation={0.16760617}
          />
        </filter>
        <linearGradient
          id="linearGradient3292-2"
          x1={524.14}
          x2={525.07}
          y1={291.75}
          y2={216.73}
          gradientTransform="matrix(-1.016 0 0 1 568.58 -212.01)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient15175"
        />
      </defs>
      <g id="layer11">
        <g id="g805" transform="matrix(1.0021 0 0 .88519 -618.63 -220.28)">
          <g id="g893" transform="matrix(.99511 0 0 1.1263 698.43 -14.395)">
            <g id="g699" transform="translate(-53.606 -208.6) scale(1.0002)">
              <g id="layer1-8" transform="matrix(1 0 0 .67486 -26.86 442.19)">
                <g
                  id="layer1-7-3"
                  transform="matrix(1 0 0 .98732 -5.896 -19.421)"
                  strokeWidth={0.83933}
                >
                  <rect
                    id="rect10510-0"
                    x={5.0649}
                    y={19.754}
                    width={510.27}
                    height={290.17}
                    rx={0.21864}
                    ry={0.15403}
                    opacity={0.95}
                  />
                </g>
              </g>
              <g id="layer2-1" transform="matrix(1 0 0 .68151 -108.06 237.74)">
                <path
                  id="rect818-4"
                  fillRule="evenodd"
                  fill="url(#linearGradient701)"
                  paintOrder="markers stroke fill"
                  d="M80.369 300.08H590.749V584.5H80.369z"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
      <g id="layer10">
        <image
          id="image2460"
          transform="matrix(-1.0334 0 0 1.0334 -263 236.63)"
          x={-516.64}
          y={-197.96}
          width={312.05}
          height={178.59}
          clipPath="url(#clipPath10102)"
          preserveAspectRatio="none"
          strokeWidth={4.3038}
        />
      </g>
      <g id="layer7" letterSpacing={0} wordSpacing={0}>
        <text
          id="text3596"
          x={301.92538}
          y={19.147991}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="3.5278px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3594"
            x={301.92538}
            y={19.147991}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"DATOS GENERALES"}
          </tspan>
        </text>
        <text
          id="text3600"
          transform="scale(.98529 1.0149)"
          x={291.89166}
          y={33.824543}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          strokeWidth={0.47057}
        >
          <tspan
            id="tspan3598"
            x={291.89166}
            y={33.824543}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.47057}
          >
            {"FASE:"}
          </tspan>
          <tspan
            id="tspan3602"
            x={291.89166}
            y={41.762043}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.47057}
          >
            {"SISTEMA:"}
          </tspan>
          <tspan
            id="tspan2416"
            x={291.89166}
            y={49.699543}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.47057}
          >
            {"MARCA:"}
          </tspan>
          <tspan
            id="tspan3606"
            x={291.89166}
            y={57.637043}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.47057}
          >
            {"MODELO:"}
          </tspan>
          <tspan
            id="tspan3608"
            x={291.89166}
            y={65.574539}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.47057}
          >
            {"UBICACI\xD3N:"}
          </tspan>
        </text>
        <text
          id="text3705"
          x={313.81149}
          y={101.26678}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="3.5278px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3703"
            x={313.81149}
            y={101.26678}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"ALARMAS"}
          </tspan>
        </text>
        <text
          id="text5731"
          x={428.97794}
          y={44.068928}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="3.5278px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan5729"
            x={428.97794}
            y={44.068928}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"COMPRESOR 1"}
          </tspan>
        </text>
        <text
          id="text825-6-5"
          transform="scale(.8204 1.2189)"
          x={495.59512}
          y={47.292946}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.0855px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan1153"
            x={495.59512}
            y={47.292946}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"ESTADO:"}
          </tspan>
          <tspan
            id="tspan3041"
            x={495.59512}
            y={54.899845}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"TEMPERATURA DE ACEITE: "}
          </tspan>
          <tspan
            id="tspan1157"
            x={495.59512}
            y={62.506744}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"PRESI\xD3N DE SUCCI\xD3N:"}
          </tspan>
          <tspan
            id="tspan3048"
            x={495.59512}
            y={70.113647}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"PRESI\xD3N DE DESCARGA:"}
          </tspan>
          <tspan
            id="tspan3050"
            x={495.59512}
            y={77.720543}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"HORAS FUNCIONAMIENTO:"}
          </tspan>
        </text>
        <text
          id="text825-6-5-5"
          transform="scale(.8204 1.2189)"
          x={496.38513}
          y={99.952553}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.0855px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan1153-0"
            x={496.38513}
            y={99.952553}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"ESTADO:"}
          </tspan>
          <tspan
            id="tspan3041-8"
            x={496.38513}
            y={107.55946}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"TEMPERATURA DE ACEITE: "}
          </tspan>
          <tspan
            id="tspan1157-1"
            x={496.38513}
            y={115.16635}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"PRESI\xD3N DE SUCCI\xD3N:"}
          </tspan>
          <tspan
            id="tspan3048-0"
            x={496.38513}
            y={122.77325}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"PRESI\xD3N DE DESCARGA:"}
          </tspan>
          <tspan
            id="tspan3050-3"
            x={496.38513}
            y={130.38016}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"HORAS FUNCIONAMIENTO:"}
          </tspan>
        </text>
        <text
          id="text5731-1"
          x={429.10059}
          y={104.33473}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="3.5278px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan5729-9"
            x={429.10059}
            y={104.33473}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"COMPRESOR 2"}
          </tspan>
        </text>
        <text
          id="text5731-15"
          x={307.50699}
          y={128.15457}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="3.5278px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan5729-0"
            x={307.50699}
            y={128.15457}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"COMPRESOR 1"}
          </tspan>
        </text>
        <text
          id="uma_ubicacion-4"
          transform="scale(.98529 1.0149)"
          x={288.80838}
          y={111.75874}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#00abd6"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          strokeWidth={0.47057}
        >
          <tspan
            id="tspan3614-8-8"
            x={288.80838}
            y={111.75874}
            fill="#00abd6"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.47057}
          >
            {"ALARMA GENERAL"}
          </tspan>
        </text>
        <text
          id="text10652"
          transform="scale(.98529 1.0149)"
          x={288.80838}
          y={137.30647}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#00abd6"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          strokeWidth={0.47057}
        >
          <tspan
            id="tspan10648"
            x={288.80838}
            y={137.30647}
            fill="#00abd6"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.47057}
          >
            {"COD. ALARMA S1"}
          </tspan>
        </text>
        <text
          id="text10679"
          transform="scale(.98529 1.0149)"
          x={288.80838}
          y={163.89673}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#00abd6"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          strokeWidth={0.47057}
        >
          <tspan
            id="tspan10675"
            x={288.80838}
            y={163.89673}
            fill="#00abd6"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.47057}
          >
            {"COD. ALARMA S2"}
          </tspan>
        </text>
        <text
          id="text3705-8"
          x={221.77753}
          y={183.29842}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="sans-serif"
          fontSize="3.5278px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3703-1"
            x={221.77753}
            y={183.29842}
            fill="#00aad4"
            fontFamily="BankGothic Lt BT"
            fontSize="4.9389px"
            strokeWidth={0.26458}
          >
            {"ESTADO"}
          </tspan>
        </text>
        <text
          id="text5947"
          x={221.14452}
          y={94.350647}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="sans-serif"
          fontSize="3.5278px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan5945"
            x={221.14452}
            y={94.350647}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.5861px"
            strokeWidth={0.26458}
          >
            {"CORRIENTE"}
          </tspan>
        </text>
        <text
          id="text5947-5"
          x={212.75645}
          y={22.636181}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="sans-serif"
          fontSize="3.5278px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan5945-5"
            x={212.75645}
            y={22.636181}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.5861px"
            strokeWidth={0.26458}
          >
            {"T. RETORNO"}
          </tspan>
        </text>
        <text
          id="text10914"
          x={24.374191}
          y={23.165348}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="sans-serif"
          fontSize="3.5278px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan10912"
            x={24.374191}
            y={23.165348}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.5861px"
            strokeWidth={0.26458}
          >
            {"T. SUMINISTRO"}
          </tspan>
        </text>
        <text
          id="temp_sum-5"
          transform="scale(1.0508 .95161)"
          x={41.305565}
          y={50.897282}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="9.8778px"
          fontWeight={700}
          strokeWidth={0.28918}
        >
          <tspan id="tspan1354" x={41.305565} y={50.897282}>
            {"\xB0C"}
          </tspan>
        </text>
        <text
          id="temp_sum-5-5"
          transform="scale(1.0508 .95161)"
          x={212.9017}
          y={58.357067}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="9.8778px"
          fontWeight={700}
          strokeWidth={0.28918}
        >
          <tspan
            id="tspan1354-5"
            x={212.9017}
            y={58.357067}
            strokeWidth={0.28918}
          >
            {"\xB0C"}
          </tspan>
        </text>
        <text
          id="text1940-4"
          x={433.91071}
          y={22.326086}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="sans-serif"
          fontSize="9.0334px"
          strokeWidth={0.33875}
        >
          <tspan
            id="tspan18521"
            x={433.91071}
            y={22.326086}
            style={{
              fontFeatureSettings: "normal",
              fontVariantCaps: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fontFamily="Franklin Gothic Medium"
            fontSize="9.8778px"
            strokeWidth={0.33875}
          >
            {"DC-GYE"}
          </tspan>
        </text>
        <text
          id="temp_aceite1-4"
          transform="scale(.98529 1.0149)"
          x={493.0639}
          y={65.721703}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          strokeWidth={0.47057}
        >
          <tspan
            id="tspan11013-9"
            x={493.0639}
            y={65.721703}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {"\xB0C"}
          </tspan>
        </text>
        <text
          id="horas_c1-4"
          transform="scale(.98529 1.0149)"
          x={496.43747}
          y={93.123329}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          strokeWidth={0.47057}
        >
          <tspan
            id="tspan11029-4"
            x={496.43747}
            y={93.123329}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {"H"}
          </tspan>
        </text>
        <text
          id="horas_c2-1"
          transform="scale(.98529 1.0149)"
          x={496.43747}
          y={156.73224}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          strokeWidth={0.47057}
        >
          <tspan
            id="tspan11045-8"
            x={496.43747}
            y={156.73224}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {"H"}
          </tspan>
        </text>
        <text
          id="temp_aceite2-1"
          transform="scale(.98529 1.0149)"
          x={493.18793}
          y={129.47676}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          strokeWidth={0.47057}
        >
          <tspan
            id="tspan11033-2"
            x={493.18793}
            y={129.47676}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {"\xB0C"}
          </tspan>
        </text>
        <text
          id="text5731-1-9"
          x={307.62964}
          y={155.78105}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="3.5278px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan5729-9-6"
            x={307.62964}
            y={155.78105}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"COMPRESOR 2"}
          </tspan>
        </text>
        <text
          id="text4527"
          x={229.79343}
          y={138.2471}
          style={{
            fontVariantCaps: "normal",
            fontVariantEastAsian: "normal",
            fontVariantLigatures: "normal",
            fontVariantNumeric: "normal",
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="sans-serif"
          fontSize="9.8778px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan4525"
            x={229.79343}
            y={138.2471}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="9.8778px"
            strokeWidth={0.26458}
          >
            {"A"}
          </tspan>
        </text>
        <text
          id="temp_aceite2-1-8"
          transform="scale(.98529 1.0149)"
          x={489.44519}
          y={138.62379}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          strokeWidth={0.47057}
        >
          <tspan
            id="tspan11033-2-3"
            x={489.44519}
            y={138.62379}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {"BAR"}
          </tspan>
        </text>
        <text
          id="temp_aceite2-1-8-1"
          transform="scale(.98529 1.0149)"
          x={489.44519}
          y={146.95631}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          strokeWidth={0.47057}
        >
          <tspan
            id="tspan11033-2-3-2"
            x={489.44519}
            y={146.95631}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {"BAR"}
          </tspan>
        </text>
        <text
          id="temp_aceite2-1-8-6"
          transform="scale(.98529 1.0149)"
          x={489.44519}
          y={74.614174}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          strokeWidth={0.47057}
        >
          <tspan
            id="tspan11033-2-3-9"
            x={489.44519}
            y={74.614174}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {"BAR"}
          </tspan>
        </text>
        <text
          id="temp_aceite2-1-8-6-4"
          transform="scale(.98529 1.0149)"
          x={489.44519}
          y={83.477715}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          strokeWidth={0.47057}
        >
          <tspan
            id="tspan11033-2-3-9-3"
            x={489.44519}
            y={83.477715}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {"BAR"}
          </tspan>
        </text>
      </g>
      <g id="layer9">
        <path
          id="path21607-0-0"
          d="M397.86 3.974h3.214v2.721h-3.15z"
          fill="none"
          filter="url(#filter21601-3-5)"
          opacity={0.8}
          strokeWidth={0.20153}
          stroke="#0deff7"
        />
        <path
          id="path21605-0-4"
          d="M402.09 3.974h3.214v2.721h-3.15z"
          fill="none"
          filter="url(#filter21601-3-5)"
          opacity={0.8}
          strokeWidth={0.20153}
          stroke="#0deff7"
        />
        <path
          id="path21609-4-0"
          transform="matrix(.91623 0 0 1 356.37 -209.19)"
          d="M54.82 213.16h3.214v2.721h-3.15z"
          fill="#00b1d4"
          filter="url(#filter21611-1-1)"
          opacity={0.8}
        />
        <path
          id="path21615-1-6-7-4"
          transform="matrix(23.887 0 0 .71592 -1131.7 -147.38)"
          d="M54.82 213.16h3.214v2.721h-3.15z"
          fill="#00b1d4"
          filter="url(#filter21611-1-1-4-7)"
          opacity={0.8}
        />
        <path
          id="path21615-1-6-7-4-5"
          transform="matrix(5.0576 0 0 .71592 212.67 -145.82)"
          d="M54.82 213.16h3.214v2.721h-3.15z"
          fill="#00b1d4"
          filter="url(#filter21611-1-1-4-7-6)"
          opacity={0.8}
        />
        <path
          id="path2425"
          d="M84.007 8.912l6.998-6.197h74.083l7.56 6.048 85.8.189 7.338-6.053 122.66-.022 5.152 4.911"
          fill="none"
          strokeWidth=".26458px"
          stroke="#00bec4"
        />
        <path
          id="path2610"
          d="M398.86 190.29v-3.59l16.631-12.663h75.484l11.225 7.715v9.89h-7.24l-6.047-4.092h-72.571l-3.78 3.213z"
          fillOpacity={0}
          strokeWidth=".26458px"
          stroke="#00fbff"
        />
        <path
          id="path2612"
          d="M489.57 186.89l5.764 4.063h3.969l-7.56-5.292h-78.336l-5.197 4.064h4.347l3.118-2.74z"
          fill="#168198"
          strokeWidth=".26458px"
          stroke="#00fbff"
        />
        <path
          id="rect2614-4"
          d="M405.65 183.06l2.773-.033-2.138 1.536-2.873.067z"
          fillRule="evenodd"
          fill="#168198"
          paintOrder="markers stroke fill"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={0.35}
          stroke="#00fbff"
        />
        <path
          id="rect2614-5"
          d="M409.57 180.16l2.773-.033-2.138 1.536-2.873.067z"
          fillRule="evenodd"
          fill="#04e6ed"
          opacity={0.75}
          paintOrder="markers stroke fill"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={0.35}
          stroke="#00fbff"
        />
        <path
          id="rect2614-53"
          d="M413.33 177.07l2.773-.033-2.138 1.536-2.873.067z"
          fillRule="evenodd"
          fill="#168198"
          paintOrder="markers stroke fill"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={0.35}
          stroke="#00fbff"
        />
        <g
          id="g2683"
          transform="translate(0 -1.587)"
          fillOpacity={0}
          stroke="#00fbff"
          paintOrder="markers stroke fill"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={0.35}
        >
          <path
            id="rect2644-7"
            opacity={0.25}
            d="M420.65 177.13H437.488V178.3327H420.65z"
          />
          <path
            id="rect2644-1"
            opacity={0.25}
            d="M420.68 179.54H477.742V180.74269999999999H420.68z"
          />
          <path
            id="rect2644-8"
            opacity={0.25}
            d="M420.68 182.08H484.424V183.2827H420.68z"
          />
          <path
            id="rect2644-17"
            opacity={0.25}
            d="M420.75 184.45H490.106V185.65269999999998H420.75z"
          />
        </g>
        <path
          id="path21615"
          transform="matrix(21.445 0 0 .66931 -969.56 45.899)"
          d="M54.82 213.16h3.214v2.721h-3.15z"
          fill="#00b1d4"
          filter="url(#filter21611)"
          opacity={0.8}
        />
        <path
          id="path21770"
          d="M96.562 188.99h88.427"
          fill="none"
          opacity={0.8}
          strokeWidth={0.4}
          stroke="#0deff7"
        />
        <path
          id="path2927"
          d="M7.551 182.97v-7.04l4.189-1.519v-31.398l-4.091-1.418v-66.19l3.117 1.317v60.315l1.85.912v-52.72l15.392 5.774v61.835l-3.994 1.114v-25.321L17 126.048v53.884z"
          fillOpacity={0.99216}
          fill="#123952"
          strokeWidth={0.265}
          stroke="#1bfff8"
        />
        <path
          id="path2931"
          d="M16.855 180.02l12.685 8.414 37.976.332"
          fill="none"
          strokeWidth={0.265}
          stroke="#1bfff8"
        />
        <path
          id="path3043"
          d="M12.528 85.169l2.94 1.136v52.919l-2.94-1.336z"
          fill="#1bfff8"
        />
        <g id="g1243" transform="translate(0 -1.058)">
          <path
            id="path21605-1"
            d="M78.889 188.57h3.214v2.721h-3.15z"
            fill="none"
            filter="url(#filter21601-1)"
            opacity={0.8}
            strokeWidth={0.20153}
            stroke="#0deff7"
          />
          <path
            id="path21607-2"
            d="M74.655 188.57h3.214v2.721h-3.15z"
            fill="none"
            filter="url(#filter21601-1)"
            opacity={0.8}
            strokeWidth={0.20153}
            stroke="#0deff7"
          />
          <path
            id="path21609-1"
            transform="matrix(.91623 0 0 1 33.163 -24.589)"
            d="M54.82 213.16h3.214v2.721h-3.15z"
            fill="#00b1d4"
            filter="url(#filter21611-4)"
            opacity={0.8}
          />
        </g>
        <g id="g21353-7" transform="matrix(1.1262 0 0 .99883 10.205 -4.055)">
          <path
            id="path21306-8"
            transform="matrix(.96447 0 0 .96923 .693 3.515)"
            d="M22.357 113.31v1.852h1.654v-1.852z"
            fill="#00aad4"
            filter="url(#filter21324-6)"
            opacity={0.8}
          />
          <path
            id="path21308-1"
            d="M21.657 122.7l-.094 10.451h1.39l-.047-10.443z"
            fill="#00aad4"
            filter="url(#filter21328-6)"
            opacity={0.8}
          />
          <path
            id="path21310-1"
            d="M22.357 115.16v7.508"
            fill="none"
            strokeWidth={0.2}
            stroke="#00aad4"
          />
          <path
            id="path21312-5"
            d="M22.423 133.15v25.927l-4.414 2.488v11.986l3.413 2.373.084 16.878h5.481"
            fill="none"
            strokeWidth={0.20031}
            stroke="#00aad4"
          />
          <path
            id="path21314-3"
            d="M37.899 192.02v1.78H26.99v-1.78z"
            fill="#00aad4"
            filter="url(#filter21336-5)"
            opacity={0.8}
          />
        </g>
        <g id="g1990" transform="matrix(.99976 0 0 1.1931 .077 -1.08)">
          <g id="g384" transform="matrix(1.0004 0 0 .77035 -3.293 .466)">
            <path
              id="path1746-1-7"
              d="M273.6 59.339V48.842l-2.71-3.137V19.039l-1.667-1.93V13.97l6.357-7.24h15.423l4.272 5.068h76.8l3.96-4.585h9.274l3.44 3.74v4.948l-5.42 6.153V43.18l5.447 6.4v15.143l-3.279 3.541v14.974l1.732 1.664-.074 2.389-5.416 6.143h-32.937l-3.242-3.584h-52.464l-1.842-2.303h-7.774l-1.879 2.346h-8.51l-1.88-2.346V61.78z"
              fill="none"
              strokeWidth={0.35}
              stroke="#3edce3"
            />
          </g>
          <path
            id="path1748-8-6"
            d="M267.25 64.999l-.959-1.41v-9.292l2.34-2.725h3.911v11.335L271.008 65z"
            fill="none"
            strokeWidth={0.30725}
            stroke="#3edce3"
          />
          <path
            id="path1750-1-8"
            d="M268.81 34.657V16.149l2.643 2.534v18.78z"
            fill="#168198"
            strokeWidth={0.30725}
            stroke="#3edce3"
          />
          <path
            id="path1752-7-2"
            d="M274.16 8.034l1.512-1.362h11.936l3.96 3.99h76.62l-.626.924h-89.754z"
            fill="none"
            strokeWidth={0.30725}
            stroke="#3edce3"
          />
          <path
            id="path1754-2-9"
            d="M296.57 66.264h60.67l5.547 5.488h-2.67l-3.815-3.64h-6.854v-.826H297.56z"
            fill="#168198"
            strokeWidth={0.30725}
            stroke="#3edce3"
          />
          <path
            id="path1756-0-8"
            d="M358.23 66.216h2.345l5.523 5.54-2.252.004z"
            fill="none"
            strokeWidth={0.30725}
            stroke="#3edce3"
          />
          <path
            id="path1781-2-2"
            d="M385.39 14.042v7.58l-4.426 4.13v-7.58z"
            fill="#168198"
            strokeWidth={0.30725}
            stroke="#3edce3"
          />
          <path
            id="path1783-9-6"
            d="M381.09 28.839v4.244l4.401 4.176v-4.426z"
            fill="none"
            strokeWidth={0.30725}
            stroke="#3edce3"
          />
          <path
            id="path1785-5-9"
            d="M380.99 26.434v1.748l4.571 4.017v-4.585l-2.845-2.61z"
            fill="none"
            strokeWidth={0.30725}
            stroke="#3edce3"
          />
          <path
            id="path1787-7-9"
            d="M385.56 26.865v-4.357l-2.383 2.156z"
            fill="none"
            strokeWidth={0.30725}
            stroke="#3edce3"
          />
          <path
            id="path1789-4-5"
            d="M384.04 64.68l-.994-.886v-10.08l1.433-1.108v1.617l-.393.244z"
            fill="none"
            strokeWidth={0.30725}
            stroke="#3edce3"
          />
          <path
            id="path1756-1-9-5"
            d="M361.88 66.216h2.345l5.523 5.54-2.252.004z"
            fill="#168198"
            strokeWidth={0.30725}
            stroke="#3edce3"
          />
          <path
            id="path1756-3-1-3"
            d="M365.25 66.216h2.345l5.523 5.54-2.252.004z"
            fill="none"
            strokeWidth={0.30725}
            stroke="#3edce3"
          />
          <path
            id="path1814-1-4"
            d="M381.95 51.7l2.768-2.194V39.062l-2.628-2.234z"
            fill="#168198"
            strokeWidth={0.30725}
            stroke="#3edce3"
          />
        </g>
        <path
          id="path6140"
          d="M283.99 189.47h111.8"
          fill="none"
          strokeWidth={0.5987}
          stroke="#00aad4"
        />
        <path
          id="path2446"
          d="M393.72 7.828h18.007l4.945-4.877 67.486-.134 4.944 8.954h18.174"
          fill="none"
          strokeWidth=".26458px"
          stroke="#00bec4"
        />
        <path
          id="path1746-1-7-4"
          d="M396.47 77.03v-9.32l-2.491-2.785V41.251l-1.533-1.714v-2.785l5.845-6.428h14.18l3.93 4.5h70.62l3.64-4.071h8.529l3.162 3.32v4.393l-4.983 5.463v18.755l5.008 5.681V81.81l-3.015 3.144v78.174l1.592 1.477-.067 2.12-4.98 5.455H465.62l-2.982-3.182h-48.242l-1.693-2.045h-7.149l-1.727 2.083H396l-1.728-2.083V79.196z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1748-8-6-8"
          d="M393.56 150.78l-.881-1.626v-10.708l2.15-3.14h3.596v13.063l-1.41 2.411z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1750-1-8-9"
          d="M395 63.753v-21.33l2.429 2.92v21.643z"
          fill="#168198"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1752-7-2-6"
          d="M399.92 33.071l1.39-1.57h10.97l3.642 4.597h70.428l-.575 1.066h-82.502z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1781-2-2-7"
          d="M502.16 39.995v8.736l-4.068 4.76v-8.736z"
          fill="#168198"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1783-9-6-6"
          d="M498.21 57.048v4.891l4.046 4.813v-5.1z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1785-5-9-9"
          d="M498.12 54.276v2.014l4.202 4.63v-5.284l-2.615-3.008z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1787-7-9-7"
          d="M502.32 54.772V49.75l-2.19 2.485z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1789-4-5-6"
          d="M500.85 163.81l-.914-1.021.067-77.074 1.318-1.277v1.864l-.362.28z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1754-2-7"
          d="M415.12 164.57h60.648l5.545 6.738h-2.67l-3.813-4.468h-6.851v-1.016h-51.87z"
          fill="#168198"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1756-0-5"
          d="M476.76 164.51h2.345l5.52 6.801-2.25.006z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1756-1-9-8"
          d="M480.4 164.51h2.345l5.52 6.801-2.25.006z"
          fill="#168198"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1756-3-1-8"
          d="M483.78 164.51h2.345l5.52 6.801-2.25.006z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <g id="g2016" strokeWidth={0.36376} stroke="#3edce3">
          <path
            id="path1746-1-7-4-7"
            d="M270.91 133.8v-9.319l-2.691-2.785V98.024l-1.657-1.713v-2.785l6.315-6.427h15.32l4.244 4.499h76.29l3.933-4.07h9.213l3.416 3.32v4.391l-5.383 5.463v18.753l5.41 5.68v13.445l-3.257 3.143v36.317l1.72 1.477-.073 2.12-5.38 5.454h-32.718l-3.22-3.181h-52.115l-1.83-2.045h-7.722l-1.867 2.082h-8.454l-1.866-2.082v-45.898z"
            fill="none"
          />
          <path
            id="path1748-8-6-8-5"
            d="M267.77 165.7l-.952-1.626v-10.707l2.323-3.139h3.884v13.062l-1.523 2.41z"
            fill="none"
          />
          <path
            id="path1750-1-8-9-2"
            d="M269.32 120.53V99.202l2.624 2.92v21.641z"
            fill="#168198"
          />
          <path
            id="path1752-7-2-6-9"
            d="M274.63 89.85l1.501-1.57h11.852l3.933 4.597h76.082l-.62 1.065h-89.126z"
            fill="none"
          />
          <path
            id="path1781-2-2-7-6"
            d="M385.09 96.773v8.735l-4.394 4.76v-8.735z"
            fill="#168198"
          />
          <path
            id="path1783-9-6-6-4"
            d="M380.81 113.82v4.89l4.37 4.813v-5.1z"
            fill="none"
          />
          <path
            id="path1785-5-9-9-5"
            d="M380.72 111.05v2.014l4.54 4.629v-5.283l-2.826-3.008z"
            fill="none"
          />
          <path
            id="path1787-7-9-7-1"
            d="M385.26 111.55v-5.021l-2.366 2.484z"
            fill="none"
          />
          <path
            id="path1789-4-5-6-6"
            d="M383.67 178.73l-.987-1.021.072-35.217 1.423-1.277v1.864l-.39.28z"
            fill="none"
          />
          <path
            id="path1814-1-4-8-3"
            d="M381.66 140.17l2.748-2.529v-12.036l-2.609-2.574z"
            fill="#168198"
          />
        </g>
        <path
          id="path1754-2-7-3"
          d="M291.06 179.49h65.517l5.99 6.737h-2.883l-4.12-4.468h-7.402v-1.015H292.13z"
          fill="#168198"
          strokeWidth={0.36376}
          stroke="#3edce3"
        />
        <path
          id="path1756-0-5-7"
          d="M357.64 179.43h2.533l5.963 6.8-2.43.007z"
          fill="none"
          strokeWidth={0.36376}
          stroke="#3edce3"
        />
        <path
          id="path1756-3-1-8-3"
          d="M365.23 179.43h2.533l5.963 6.8-2.43.007z"
          fill="none"
          strokeWidth={0.36376}
          stroke="#3edce3"
        />
        <path
          id="path21607-0-0-2"
          d="M11.187 3.728h3.214V6.45h-3.15z"
          fill="none"
          filter="url(#filter21601-3-5-4)"
          opacity={0.8}
          strokeWidth={0.20153}
          stroke="#0deff7"
        />
        <path
          id="path21615-1-6-7"
          transform="matrix(17.626 0 0 .71592 -940.28 -148.46)"
          d="M54.82 213.16h3.214v2.721h-3.15z"
          fill="#00b1d4"
          filter="url(#filter21611-1-1-4)"
          opacity={0.8}
        />
        <path
          id="path21605-0-4-8"
          d="M15.42 3.728h3.214V6.45h-3.15z"
          fill="none"
          filter="url(#filter21601-3-5-4)"
          opacity={0.8}
          strokeWidth={0.20153}
          stroke="#0deff7"
        />
        <path
          id="path21609-4-0-7"
          transform="matrix(.91623 0 0 1 -30.305 -209.43)"
          d="M54.82 213.16h3.214v2.721h-3.15z"
          fill="#00b1d4"
          filter="url(#filter21611-1-1-4)"
          opacity={0.8}
        />
        <path
          id="path2427"
          d="M84.096 8.877H4.632"
          fill="none"
          strokeWidth=".26458px"
          stroke="#00bec4"
        />
        <g
          id="g4030-4"
          transform="matrix(1.2189 0 0 1.2213 339.77 -19.354)"
          strokeWidth=".21686px"
          stroke="#00afd4"
        >
          <path
            id="path1448-8-2"
            d="M64.565 35.514v-8.67l-2.862-1.201v-2.579h55.263v2.89l-2.763 1.156v8.582l2.664 1.29v2.623H61.9v-2.846z"
            fill="none"
            opacity={0.75}
          />
          <path
            id="path1376-3-6-1"
            d="M63.117 38.894h1.623v-2.245l-1.731.585z"
            fill="none"
            opacity={0.75}
          />
          <path
            id="path1376-3-3-6-1"
            d="M115.65 38.894h-1.623v-2.245l1.731.585z"
            fill="none"
            opacity={0.75}
          />
          <path
            id="path1376-3-5-5-1"
            d="M63.117 23.783h1.623v2.245l-1.731-.585z"
            fill="#192e4f"
            opacity={0.75}
          />
          <path
            id="path1376-3-3-3-3-6"
            d="M115.65 23.783h-1.623v2.245l1.731-.585z"
            fill="none"
            opacity={0.75}
          />
          <path
            id="path1325-6-9-3"
            d="M62.272 35.384v-8.137"
            fill="#00e4e8"
            opacity={0.75}
          />
          <path
            id="path1325-6-3-1-9"
            d="M116.84 35.451v-8.137"
            fill="#00e4e8"
            opacity={0.75}
          />
        </g>
        <path
          id="rect4837-8"
          fill="none"
          opacity={0.25}
          paintOrder="markers stroke fill"
          strokeDashoffset={5.65}
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={0.565}
          stroke="#00fbff"
          d="M419.77 10.009H477.80499999999995V28.06H419.77z"
        />
        <ellipse
          id="path8847"
          cx={233.36}
          cy={124.12}
          rx={25.361}
          ry={25.427}
          fill="url(#linearGradient8863)"
          opacity={0.4}
          paintOrder="stroke fill markers"
        />
        <g
          id="g1170-0"
          transform="matrix(-1.0948 0 0 .99131 321.51 -28.208)"
          opacity={0.75}
          strokeWidth={1.0492}
        >
          <path
            id="path829-0"
            d="M55.846 66.713L74.839 45.83l30.144-.094 4.158 4.063v1.89l-4.063 3.59v24.663l1.7 1.89v2.363l-6.236 6.709v3.59l2.457 2.552v4.158h-14.93l-2.93-2.457-5.102 5.197h-18.71l-5.198-5.386z"
            fill="none"
            strokeWidth={0.27803}
            stroke="#04e6f4"
          />
          <path
            id="path831-8"
            d="M62.555 59.437l-.094-4.536 8.22-9.171 4.159-.017z"
            fill="#0cedf7"
          />
          <path
            id="path833-1"
            d="M106.64 53.909l.267 27.915-1.826-1.881V55.278z"
            fill="#0cedf7"
          />
        </g>
        <g
          id="g1170"
          transform="matrix(1.0781 0 0 .99767 -54.575 -28.816)"
          opacity={0.75}
          strokeWidth={1.0492}
          stroke="#0deff7"
        >
          <path
            id="path829"
            d="M55.846 66.713L74.839 45.83l30.144-.094 4.158 4.063v1.89l-4.063 3.59v24.663l1.7 1.89v2.363l-6.236 6.709v3.59l2.457 2.552v4.158h-14.93l-2.93-2.457-5.102 5.197h-18.71l-5.198-5.386z"
            fill="none"
            strokeWidth={0.27804}
          />
          <path
            id="path831"
            d="M62.555 59.437l-.094-4.536 8.22-9.171 4.159-.017z"
            fill="#0cedf7"
            strokeWidth=".2776px"
          />
          <path
            id="path833"
            d="M106.64 53.909l.267 27.915-1.826-1.881V55.278z"
            fill="#0cedf7"
            strokeWidth=".2776px"
          />
        </g>
        <path
          id="path8839"
          d="M260.19 38.319l-20.804-20.835-33.017-.094-4.554 4.054v1.885l4.45 3.582v24.605l-1.862 1.886v2.357l6.83 6.693v3.583l-2.69 2.545v4.148h16.352l3.21-2.451 5.588 5.185h20.493l5.693-5.374z"
          fill="url(#linearGradient8841)"
          opacity={0.3}
        />
        <path
          id="path14959"
          d="M252.61 30.463l.102-4.525-8.863-9.15-4.483-.017z"
          fill="url(#linearGradient14967)"
        />
        <path
          id="path14961"
          d="M205.08 24.948l-.288 27.85 1.969-1.877V26.316z"
          fill="url(#linearGradient14967)"
        />
        <path
          id="path884-8-0"
          transform="matrix(.69053 0 0 .62532 -33.927 10.142)"
          d="M386.1 38.143a22.249 22.248 0 01.495.026l-.025 4.723a17.518 17.517 0 00-.47-.018 17.518 17.517 0 00-17.519 17.517 17.518 17.517 0 006.337 13.466l-2.697 3.897a22.249 22.248 0 01-8.372-17.362 22.249 22.248 0 0122.25-22.248zm1.66.087a22.249 22.248 0 0112.97 5.444l-3.745 3.013a17.518 17.517 0 00-9.25-3.719zm13.831 6.248a22.249 22.248 0 016.125 10.751l-4.823.208a17.518 17.517 0 00-5.012-7.972zm6.385 11.906a22.249 22.248 0 01.374 4.007 22.249 22.248 0 01-1.587 8.152l-4.246-2.105a17.518 17.517 0 001.101-6.047 17.518 17.517 0 00-.43-3.8zm-5.899 11.137l4.226 2.094a22.249 22.248 0 01-7.293 8.852l-2.52-4a17.518 17.517 0 005.587-6.946zm-26.232 7.045a17.518 17.517 0 009.558 3.315l-.212 4.71a22.249 22.248 0 01-12.04-4.133zm19.675.55l2.536 4.025a22.249 22.248 0 01-11.699 3.488l.214-4.746a17.518 17.517 0 008.95-2.767z"
          clipPath="url(#clipPath1984)"
          fillRule="evenodd"
          fill="#fc0"
          opacity={0.75}
          paintOrder="markers stroke fill"
        />
        <g
          id="g6103"
          transform="translate(-2.382 -27.958)"
          fill="#168498"
          stroke="#0deff7"
        >
          <path
            id="path852-9"
            d="M260.44 88.374l-12.621 12.459"
            strokeWidth={0.61753}
          />
          <path
            id="path852-0-1"
            d="M255.17 89.828l-6.212 5.99"
            strokeWidth=".28918px"
          />
          <path
            id="path852-0-7-2"
            d="M257.86 94.466l-4.455 4.302"
            strokeWidth=".28918px"
          />
        </g>
        <path
          id="path2051"
          transform="matrix(.87806 0 0 .79515 -106.65 .418)"
          d="M386.21 36.256a23.653 23.651 0 00-23.653 23.651 23.653 23.651 0 0023.653 23.651 23.653 23.651 0 0023.652-23.651 23.653 23.651 0 00-23.652-23.651zm0 3.546a20.179 20.106 0 0120.178 20.105 20.179 20.106 0 01-20.178 20.106 20.179 20.106 0 01-20.179-20.106 20.179 20.106 0 0120.179-20.105z"
          clipPath="url(#clipPath2072)"
          fillRule="evenodd"
          fill="#168498"
          opacity={0.75}
          paintOrder="markers stroke fill"
        />
        <path
          id="rect2077"
          fillRule="evenodd"
          fill="#10677d"
          opacity={0.75}
          paintOrder="markers stroke fill"
          d="M209.94 52.835H217.3324V56.022800000000004H209.94z"
        />
        <path
          id="rect2077-1"
          fillRule="evenodd"
          fill="#10677d"
          opacity={0.75}
          paintOrder="markers stroke fill"
          d="M209.94 48.518H217.3324V51.7058H209.94z"
        />
        <path
          id="rect2077-7"
          fillRule="evenodd"
          fill="#10677d"
          opacity={0.75}
          paintOrder="markers stroke fill"
          d="M209.94 44.201H217.3324V47.3888H209.94z"
        />
        <path
          id="rect2077-1-2"
          fillRule="evenodd"
          fill="#10677d"
          opacity={0.75}
          paintOrder="markers stroke fill"
          d="M209.94 39.884H217.3324V43.0718H209.94z"
        />
        <path
          id="rect2077-9"
          fillRule="evenodd"
          fill="#10677d"
          opacity={0.75}
          paintOrder="markers stroke fill"
          d="M209.94 35.567H217.3324V38.7548H209.94z"
        />
        <path
          id="rect2077-1-5"
          fillRule="evenodd"
          fill="#10677d"
          opacity={0.75}
          paintOrder="markers stroke fill"
          d="M209.94 31.251H217.3324V34.4388H209.94z"
        />
        <path
          id="path15126"
          d="M242.1 31.227l2.14-2.07-5.196-4.953h-28.83l-3.768-4.591"
          fill="none"
          opacity={0.75}
          strokeDasharray=".84537,.84537"
          strokeWidth={0.28179}
          stroke="#fcfcfc"
        />
        <path
          id="path975"
          d="M20.667 32.085l-2.14-2.07 5.196-4.953h28.83l3.768-4.591"
          fill="none"
          opacity={0.75}
          strokeDasharray=".845371,.845371"
          strokeWidth={0.28179}
          stroke="#fcfcfc"
        />
        <path
          id="path884-8-0-4"
          transform="matrix(.99571 0 0 .96932 -98.878 -70.149)"
          d="M132.16 101.27a17.845 17.845 0 00-.397.02l.02 3.79a14.05 14.05 0 01.377-.015 14.05 14.05 0 0114.051 14.05 14.05 14.05 0 01-5.082 10.801l2.163 3.126a17.845 17.845 0 006.714-13.926 17.845 17.845 0 00-17.846-17.845zm-1.332.07a17.845 17.845 0 00-10.402 4.366l3.003 2.417a14.05 14.05 0 017.419-2.982zm-11.093 5.011a17.845 17.845 0 00-4.912 8.624l3.868.167a14.05 14.05 0 014.02-6.395zm-5.12 9.55a17.845 17.845 0 00-.3 3.215 17.845 17.845 0 001.272 6.539l3.406-1.69a14.05 14.05 0 01-.883-4.85 14.05 14.05 0 01.345-3.048zm4.73 8.934l-3.388 1.68a17.845 17.845 0 005.848 7.1l2.022-3.208a14.05 14.05 0 01-4.481-5.572zm21.04 5.65a14.05 14.05 0 01-7.666 2.66l.17 3.778a17.845 17.845 0 009.658-3.315zm-15.78.442l-2.033 3.228a17.845 17.845 0 009.383 2.798l-.171-3.806a14.05 14.05 0 01-7.178-2.22z"
          clipPath="url(#clipPath1163)"
          fillRule="evenodd"
          fill="#168498"
          opacity={0.75}
          paintOrder="markers stroke fill"
        />
        <path
          id="path2477"
          d="M31.469 33.316a12.042 12.042 0 00-1.47.238l.436 1.43a10.554 10.554 0 011.07-.175zm-2.013.375a12.042 12.042 0 00-1.477.512l.767 1.295a10.554 10.554 0 011.107-.372zm-1.994.745a12.042 12.042 0 00-1.565.898l1.017 1.113a10.554 10.554 0 011.274-.707zm-2.025 1.227a12.042 12.042 0 00-1.41 1.24l1.27.835a10.554 10.554 0 011.118-.947zm-1.796 1.656a12.042 12.042 0 00-1.166 1.553l.08-.087 1.273.735a10.554 10.554 0 011.043-1.343zm-1.395 1.932a12.042 12.042 0 00-.832 1.738l1.436.413a10.554 10.554 0 01.664-1.372zm-1.035 2.31a12.042 12.042 0 00-.445 1.842l1.48.176a10.554 10.554 0 01.41-1.644zm-.525 2.441a12.042 12.042 0 00-.07 1.298 12.042 12.042 0 00.014.592l1.485-.119a10.554 10.554 0 01-.01-.473 10.554 10.554 0 01.063-1.161zm1.47 2.332l-1.48.159a12.042 12.042 0 00.36 1.958l1.407-.5a10.554 10.554 0 01-.288-1.617zm.444 2.158l-1.392.536a12.042 12.042 0 00.68 1.658l1.285-.761a10.554 10.554 0 01-.573-1.433zm.832 1.931l-1.262.793a12.042 12.042 0 00.958 1.445l1.178-.911a10.554 10.554 0 01-.874-1.327zm1.23 1.762l-1.154.943a12.042 12.042 0 001.4 1.388l.872-1.212a10.554 10.554 0 01-1.119-1.119zm14.464 1.453a10.554 10.554 0 01-1.608 1.03l.711 1.308a12.042 12.042 0 001.78-1.138zm-12.907.023l-.837 1.234a12.042 12.042 0 001.505.974l.792-1.264a10.554 10.554 0 01-1.46-.944zm1.966 1.197l-.76 1.288a12.042 12.042 0 002.18.802l.388-1.437a10.554 10.554 0 01-1.807-.653zm8.837.05a10.554 10.554 0 01-1.798.628l.434 1.426a12.042 12.042 0 002.087-.747zm-6.479.731l-.348 1.448a12.042 12.042 0 002.04.247l.064-1.487a10.554 10.554 0 01-1.756-.208zm4.131.02a10.554 10.554 0 01-1.811.192l-.025 1.49a12.042 12.042 0 002.233-.244z"
          fillOpacity={0.98824}
          fillRule="evenodd"
          fill="#c29f05"
          paintOrder="markers stroke fill"
        />
        <path
          id="path21605"
          d="M195.54 188.09h3.214v2.721h-3.15z"
          fill="none"
          filter="url(#filter21601)"
          opacity={0.8}
          strokeWidth={0.20153}
          stroke="#0deff7"
        />
        <path
          id="path21607"
          d="M191.3 188.09h3.214v2.721h-3.15z"
          fill="none"
          filter="url(#filter21601)"
          opacity={0.8}
          strokeWidth={0.20153}
          stroke="#0deff7"
        />
        <path
          id="path21609"
          transform="matrix(.91623 0 0 1 149.81 -25.072)"
          d="M54.82 213.16h3.214v2.721h-3.15z"
          fill="#00b1d4"
          filter="url(#filter21611)"
          opacity={0.8}
        />
        <g id="g6676" transform="translate(12.835 -118.58)">
          <circle
            id="path829-8-9-1"
            transform="translate(151.51 129.65) scale(1.0715)"
            cx={64.011}
            cy={105.64}
            r={19.377}
            clipPath="url(#clipPath835-87-6-6)"
            fill="none"
            opacity={0.75}
            paintOrder="markers stroke fill"
            strokeDashoffset={5.65}
            strokeLinecap="square"
            strokeLinejoin="round"
            strokeWidth={0.5273}
            stroke="#3addfa"
          />
          <path
            id="path847-0-3"
            d="M194.71 248.77l-2.025.253c-.44-2.784-.603-5.569-.101-8.353l-1.013-.152c.274-2.826 1.192-5.265 2.126-7.695l2.38 1.013c-1.114 3.99-2.108 8.16-1.367 14.934z"
            fill="#168198"
          />
          <path
            id="path849-1-0"
            d="M212.78 268.06l-.557 2.278c1.54.534 3.236.816 5.113.81l.101-.911c4.896.08 9.75-.21 14.377-2.531l.608 1.012c7.14-2.812 11.056-8.473 14.124-14.884l-.658-.253c-.902 2.253-2.026 4.348-3.595 6.126l-1.923-1.367c-7.287 8.816-16.942 10.719-27.591 9.72z"
            fill="#168198"
          />
          <path
            id="path853-1-6"
            d="M227.92 218.65l.76-2.632c10.39 2.602 15.77 10.216 19.034 19.946l-.759.151a36.812 36.812 0 00-6.123-11.117l-1.673 1.549z"
            fill="#168198"
          />
          <circle
            id="path839-1-6"
            cx={220.05}
            cy={243.17}
            r={22.91}
            fill="none"
            opacity={0.75}
            paintOrder="markers stroke fill"
            strokeDasharray=".564999,3.39"
            strokeLinecap="square"
            strokeLinejoin="round"
            strokeWidth={0.565}
            stroke="#fc0"
          />
          <ellipse
            id="path843-5-8"
            cx={219.91}
            cy={243.27}
            rx={25.274}
            ry={25.274}
            fill="none"
            paintOrder="markers stroke fill"
            strokeLinecap="square"
            strokeLinejoin="round"
            strokeWidth={1.065}
            stroke="#168498"
          />
          <path
            id="path1180-1"
            d="M192.58 240.67l-1.012-.152c.22-2.619 1.112-5.164 2.126-7.695l1.152.467c-1.15 2.384-1.775 4.74-2.266 7.38z"
            fill="#bf9900"
          />
          <path
            id="path1184-4"
            d="M245.89 253.58c-1.022 1.937-2.122 4.038-3.617 6.129l.702.507c1.209-1.756 2.401-3.853 3.573-6.383z"
            fill="#bf9900"
          />
          <path
            id="path1194-0"
            d="M217.44 270.24l-.101.911c-1.758.101-3.444-.293-5.113-.81l.204-.834c1.645.347 3.54.743 5.01.733z"
            fill="#bf9900"
          />
        </g>
        <path
          id="path6142-3"
          d="M205.63 182.74h14.784"
          fill="none"
          strokeDasharray="1.20122,.300305"
          strokeWidth={0.3003}
          stroke="#00aad4"
        />
        <g id="g15358" transform="matrix(.52638 0 0 .48302 174.52 161.69)">
          <path
            id="path15352"
            d="M88.487 12.957l7.519.05-7.356 4.114z"
            fill="#17d8fb"
          />
          <path
            id="path15354"
            d="M89.194 17.992l8.133-4.504 59.298.132 5.214-.072.095 20.77-8.055-.036H88.982z"
            fill="none"
            strokeWidth={0.8844}
            stroke="#0deff7"
          />
          <path
            id="path15356"
            d="M89.27 30.147c-.136 0-.245.072-.245.16v3.618c0 .088.11.16.245.16h14.66l7.76.185-4.853-4.123-.072.047a.32.32 0 00-.173-.047z"
            fill="#17d8fb"
          />
        </g>
        <path
          id="path6144"
          d="M206.13 184.55h43.269"
          fill="#e3ff00"
          strokeDasharray=".2195,.2195"
          strokeWidth={0.2195}
          stroke="#b37c05"
        />
        <path
          id="path15362"
          d="M221.27 170.18l4.281-2.175 31.213.063 2.778 1.319v6.624l-4.224 2.037h-34.16z"
          fill="url(#linearGradient15377)"
          opacity={0.3}
        />
        <path
          id="path15285-8-5-8"
          d="M206.03 171.36l-.032-4.977 5.663.002"
          fill="none"
          strokeWidth={0.67831}
          stroke="#0deff7"
        />
        <path
          id="path15379"
          d="M206.03 176.57l-.032 4.977 5.663-.002"
          fill="none"
          strokeWidth={0.67831}
          stroke="#0deff7"
        />
        <g
          id="g4030-4-3"
          transform="matrix(1.2189 0 0 1.2213 21.54 -18.48)"
          strokeWidth=".21686px"
          stroke="#00afd4"
        >
          <path
            id="path1448-8-2-3"
            d="M64.565 35.514v-8.67l-2.862-1.201v-2.579h55.263v2.89l-2.763 1.156v8.582l2.664 1.29v2.623H61.9v-2.846z"
            fill="none"
            opacity={0.75}
          />
          <path
            id="path1376-3-6-1-7"
            d="M63.117 38.894h1.623v-2.245l-1.731.585z"
            fill="none"
            opacity={0.75}
          />
          <path
            id="path1376-3-3-6-1-1"
            d="M115.65 38.894h-1.623v-2.245l1.731.585z"
            fill="none"
            opacity={0.75}
          />
          <path
            id="path1376-3-5-5-1-2"
            d="M63.117 23.783h1.623v2.245l-1.731-.585z"
            fill="#192e4f"
            opacity={0.75}
          />
          <path
            id="path1376-3-3-3-3-6-6"
            d="M115.65 23.783h-1.623v2.245l1.731-.585z"
            fill="none"
            opacity={0.75}
          />
          <path
            id="path1325-6-9-3-2"
            d="M62.272 35.384v-8.137"
            fill="#00e4e8"
            opacity={0.75}
          />
          <path
            id="path1325-6-3-1-9-0"
            d="M116.84 35.451v-8.137"
            fill="#00e4e8"
            opacity={0.75}
          />
        </g>
        <path
          id="path2929"
          d="M24.082 153.21v18.143l10.392 6.221"
          fill="none"
          strokeWidth={0.265}
          stroke="#1bfff8"
        />
        <path
          id="path3045"
          d="M24.049 128.49v-16.017"
          fill="none"
          strokeWidth=".26458px"
          stroke="#00f8ed"
        />
        <g id="g1243-7" transform="rotate(-90 40.77 203.5)">
          <path
            id="path21605-1-5"
            d="M78.889 188.57h3.214v2.721h-3.15z"
            fill="none"
            filter="url(#filter21601-1-7)"
            opacity={0.8}
            strokeWidth={0.20153}
            stroke="#0deff7"
          />
          <path
            id="path21607-2-7"
            d="M74.655 188.57h3.214v2.721h-3.15z"
            fill="none"
            filter="url(#filter21601-1-7)"
            opacity={0.8}
            strokeWidth={0.20153}
            stroke="#0deff7"
          />
          <path
            id="path21609-1-9"
            transform="matrix(.91623 0 0 1 33.163 -24.589)"
            d="M54.82 213.16h3.214v2.721h-3.15z"
            fill="#00b1d4"
            filter="url(#filter21611-4-9)"
            opacity={0.8}
          />
        </g>
        <path
          id="path852"
          d="M10.336 60.12l12.428 11.974"
          fill="#168498"
          strokeWidth={0.6008}
          stroke="#0deff7"
        />
        <path
          id="path852-0"
          d="M15.529 61.518l6.118 5.757"
          fill="#168498"
          strokeWidth=".28135px"
          stroke="#0deff7"
        />
        <path
          id="path852-0-7"
          d="M12.879 65.975l4.388 4.135"
          fill="#168498"
          strokeWidth=".28135px"
          stroke="#0deff7"
        />
        <path
          id="path6170-7-8"
          d="M478.55 48.121l-3.052-.036-2.833-1.378 2.985.035zm-3.841-.045l-3.476-.04-2.833-1.38 3.409.04zm-4.263-.05l-3.258-.038-2.832-1.379 3.19.038zm-4.043-.048l-3.26-.038-2.832-1.378 3.192.037zm14.358-.044c-.01.007.008-.008.024-.024-.008.008-.014.017-.024.024zm-18.401-.003l-3.108-.036-2.832-1.379 3.04.036zm-3.893-.046l-3.005-.035-2.832-1.378 2.937.034zm-3.79-.044l-3.058-.036-2.832-1.378 2.99.035zm-3.844-.045l-2.685-.032-2.832-1.378 2.618.03zm29.28-.01c.006-.005.022-.014.028-.02.003.008.003.014.004.02h-.033zm-32.752-.031l-3.179-.037-2.831-1.38 3.11.038zm-3.96-.047l-2.956-.035-2.831-1.378 2.887.034zm-3.74-.044l-3.007-.035-2.832-1.378 2.939.034zm-3.792-.044l-2.995-.036-2.832-1.378 2.927.035zm-3.78-.045l-2.804-.033-2.832-1.378 2.736.032zm-3.591-.043l-2.526-.03-2.832-1.378 2.458.03zm-3.31-.039l-2.382-.028-2.832-1.378 2.314.027zm-3.168-.037l-2.394-.028-2.831-1.378 2.325.027zm-3.18-.038l-2.325-.027-2.833-1.378 2.259.026zm60.35-.413L479.18 47l.012.001v.004z"
          fillRule="evenodd"
          fill="url(#linearGradient4374-9-7)"
          paintOrder="markers stroke fill"
        />
        <path
          id="path6170-7-8-0"
          d="M358.01 23.103l-3.184-.036-2.955-1.378 3.114.035zm-4.007-.045l-3.626-.04-2.955-1.38 3.555.04zm-4.447-.05l-3.399-.038-2.955-1.379 3.329.038zm-4.218-.048l-3.4-.038-2.956-1.378 3.33.037zm14.979-.044c-.01.007.008-.008.025-.024-.008.008-.015.017-.025.024zm-19.197-.003l-3.243-.036-2.954-1.379 3.171.036zm-4.062-.046l-3.134-.035-2.955-1.378 3.065.034zm-3.954-.044l-3.19-.036-2.954-1.378 3.119.035zm-4.009-.045l-2.802-.032-2.954-1.378 2.731.03zm30.545-.01c.007-.005.024-.014.03-.02.003.008.003.014.004.02h-.034zm-34.167-.031l-3.317-.037-2.954-1.379 3.246.037zm-4.132-.047l-3.083-.035-2.954-1.378 3.012.034zm-3.902-.044l-3.137-.035-2.954-1.378 3.066.034zm-3.955-.045l-3.125-.035-2.954-1.378 3.053.035zm-3.944-.044l-2.925-.033-2.954-1.378 2.854.032zm-3.747-.043l-2.634-.03-2.954-1.378 2.563.03zm-3.453-.039l-2.484-.028-2.954-1.378 2.413.027zm-3.304-.037l-2.497-.028-2.954-1.379 2.426.028zm-3.317-.038l-2.426-.027-2.955-1.378 2.356.026zm62.959-.413l-.012-.005.013.001v.004z"
          fillRule="evenodd"
          fill="url(#linearGradient1567)"
          paintOrder="markers stroke fill"
        />
        <path
          id="path6170-7-8-0-4"
          d="M358.01 104.95l-3.184-.036-2.955-1.378 3.114.035zm-4.007-.045l-3.626-.04-2.955-1.38 3.555.04zm-4.447-.05l-3.399-.039-2.955-1.378 3.329.038zm-4.218-.048l-3.4-.038-2.956-1.378 3.33.037zm14.979-.044c-.01.007.008-.008.025-.024-.008.008-.015.017-.025.024zm-19.197-.003l-3.243-.037-2.954-1.378 3.171.036zm-4.062-.046l-3.134-.035-2.955-1.378 3.065.034zm-3.954-.044l-3.19-.036-2.954-1.378 3.119.035zm-4.009-.045l-2.802-.032-2.954-1.378 2.731.03zm30.545-.01c.007-.005.024-.014.03-.02.003.008.003.014.004.02h-.034zm-34.167-.031l-3.317-.038-2.954-1.378 3.246.037zm-4.132-.047l-3.083-.035-2.954-1.378 3.012.034zm-3.902-.044l-3.137-.035-2.954-1.378 3.066.034zm-3.955-.045l-3.125-.035-2.954-1.378 3.053.035zm-3.944-.044l-2.925-.033-2.954-1.378 2.854.032zm-3.747-.043l-2.634-.03-2.954-1.378 2.563.03zm-3.453-.039l-2.484-.028-2.954-1.378 2.413.027zm-3.304-.037l-2.497-.028-2.954-1.379 2.426.028zm-3.317-.038l-2.426-.027-2.955-1.378 2.356.026zm62.959-.413l-.012-.005.013.001v.004z"
          fillRule="evenodd"
          fill="url(#linearGradient1790)"
          paintOrder="markers stroke fill"
        />
        <path
          id="path6170-7-8-0-4-5"
          d="M358.01 131.97l-3.184-.036-2.955-1.378 3.114.035zm-4.007-.045l-3.626-.04-2.955-1.38 3.555.04zm-4.447-.05l-3.399-.038-2.955-1.379 3.329.038zm-4.218-.048l-3.4-.038-2.956-1.378 3.33.037zm14.979-.044c-.01.007.008-.008.025-.024-.008.008-.015.017-.025.024zm-19.197-.003l-3.243-.036-2.954-1.379 3.171.036zm-4.062-.046l-3.134-.035-2.955-1.378 3.065.034zm-3.954-.044l-3.19-.036-2.954-1.378 3.119.035zm-4.009-.045l-2.802-.032-2.954-1.378 2.731.03zm30.545-.01c.007-.005.024-.013.03-.02.003.008.003.014.004.02h-.034zm-34.167-.031l-3.317-.037-2.954-1.379 3.246.037zm-4.132-.047l-3.083-.035-2.954-1.378 3.012.034zm-3.902-.044l-3.137-.035-2.954-1.378 3.066.034zm-3.955-.044l-3.125-.036-2.954-1.378 3.053.035zm-3.944-.045l-2.925-.033-2.954-1.378 2.854.032zm-3.747-.043l-2.634-.03-2.954-1.378 2.563.03zm-3.453-.039l-2.484-.028-2.954-1.378 2.413.027zm-3.304-.037l-2.497-.028-2.954-1.378 2.426.027zm-3.317-.038l-2.426-.027-2.955-1.378 2.356.026zm62.959-.413l-.012-.005.013.001v.004z"
          fillRule="evenodd"
          fill="url(#linearGradient1820)"
          paintOrder="markers stroke fill"
        />
        <path
          id="path6170-7-8-0-4-5-3"
          d="M358.01 158.99l-3.184-.036-2.955-1.378 3.114.035zm-4.007-.045l-3.626-.04-2.955-1.38 3.555.04zm-4.447-.05l-3.399-.038-2.955-1.379 3.329.038zm-4.218-.048l-3.4-.038-2.956-1.378 3.33.037zm14.979-.044c-.01.007.008-.008.025-.024-.008.008-.015.017-.025.024zm-19.197-.003l-3.243-.036-2.954-1.379 3.171.036zm-4.062-.046l-3.134-.035-2.955-1.378 3.065.034zm-3.954-.044l-3.19-.036-2.954-1.378 3.119.035zm-4.009-.045l-2.802-.032-2.954-1.378 2.731.03zm30.545-.01c.007-.005.024-.013.03-.02.003.008.003.014.004.02h-.034zm-34.167-.031l-3.317-.037-2.954-1.379 3.246.037zm-4.132-.047l-3.083-.035-2.954-1.378 3.012.034zm-3.902-.044l-3.137-.035-2.954-1.378 3.066.034zm-3.955-.044l-3.125-.036-2.954-1.378 3.053.035zm-3.944-.045l-2.925-.033-2.954-1.378 2.854.032zm-3.747-.043l-2.634-.03-2.954-1.378 2.563.03zm-3.453-.039l-2.484-.028-2.954-1.378 2.413.027zm-3.304-.037l-2.497-.028-2.954-1.378 2.426.027zm-3.317-.038l-2.426-.027-2.955-1.378 2.356.026zm62.959-.413l-.012-.005.013.001v.004z"
          fillRule="evenodd"
          fill="url(#linearGradient1850)"
          paintOrder="markers stroke fill"
        />
        <path
          id="path6170-7-8-9"
          d="M478.55 107.96l-3.052-.036-2.833-1.378 2.985.035zm-3.841-.045l-3.476-.04-2.833-1.38 3.409.04zm-4.263-.05l-3.258-.039-2.832-1.378 3.19.038zm-4.043-.048l-3.26-.038-2.832-1.378 3.192.037zm14.358-.044c-.01.007.008-.008.024-.024-.008.008-.014.017-.024.024zm-18.401-.003l-3.108-.037-2.832-1.378 3.04.036zm-3.893-.046l-3.005-.035-2.832-1.378 2.937.034zm-3.79-.044l-3.058-.036-2.832-1.378 2.99.035zm-3.844-.045l-2.685-.032-2.832-1.378 2.618.03zm29.28-.01c.006-.005.022-.014.028-.02.003.008.003.014.004.02h-.033zm-32.752-.031l-3.179-.038-2.831-1.378 3.11.037zm-3.96-.047l-2.956-.035-2.831-1.378 2.887.034zm-3.74-.044l-3.007-.035-2.832-1.378 2.939.034zm-3.792-.045l-2.995-.035-2.832-1.378 2.927.035zm-3.78-.044l-2.804-.033-2.832-1.378 2.736.032zm-3.591-.043l-2.526-.03-2.832-1.378 2.458.03zm-3.31-.039l-2.382-.028-2.832-1.378 2.314.027zm-3.168-.037l-2.394-.028-2.831-1.379 2.325.028zm-3.18-.038l-2.325-.027-2.833-1.378 2.259.026zm60.35-.413l-.011-.005.012.001v.004z"
          fillRule="evenodd"
          fill="url(#linearGradient1880)"
          paintOrder="markers stroke fill"
        />
        <path
          id="path1756-1-9-8-1"
          d="M361.58 179.43h2.533l5.963 6.8-2.43.007z"
          fill="#168198"
          strokeWidth={0.36376}
          stroke="#3edce3"
        />
        <path
          id="path1814-1-4-8"
          d="M498.99 83.394l2.544-2.529V68.828l-2.415-2.574z"
          fill="#168198"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="rect4837-8-8"
          fill="none"
          opacity={0.25}
          paintOrder="markers stroke fill"
          strokeDashoffset={5.65}
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={0.565}
          stroke="#00fbff"
          d="M101.54 10.883H159.575V28.933999999999997H101.54z"
        />
        <path
          id="path3290-9"
          d="M5.055 38.2L25.86 17.365l33.017-.094 4.554 4.054v1.885l-4.45 3.582v24.605l1.863 1.886v2.357l-6.831 6.693v3.583l2.69 2.545v4.148H40.35l-3.209-2.451-5.589 5.185H11.06l-5.693-5.374z"
          fill="url(#linearGradient3292-2)"
          opacity={0.3}
        />
      </g>

      <Variables 
        ID= {dataChiller.ID}
        Estado={dataChiller.Estado}
        Compresor1={dataChiller.Compresor1}
        Compresor2={dataChiller.Compresor2}
        DatosGenerales={dataChiller.DatosGenerales}
        TemperaturaRetorno={dataChiller.TemperaturaRetorno}
        TemperaturaSuministro={dataChiller.TemperaturaSuministro}
        Corriente={dataChiller.Corriente}
        Alarmas={dataChiller.Alarmas}
      />
    </svg>
  )
}

export default Chiller