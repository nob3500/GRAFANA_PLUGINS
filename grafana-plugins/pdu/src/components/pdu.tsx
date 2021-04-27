import React from 'react'
import { Variables, DataPdu } from './variables/variables';

const pdu = () =>{
    let pdu: DataPdu ={
      
    fases:{
        in1_AB: 0,
        in1_BC: 0,
        in1_CA: 0,
        out1_AB: 0,
        out1_BC: 0,
        out1_CA: 0,
        out1_A: 0,
        out1_B: 0,
        out1_C: 0,
        corriente_N: 0
    },
    botones_alarmas:{
        alarma_general:{
            on:'',
            off:''
        },
        puerta_abierta:{
            on:'',
            off:''
        },
        falla_breaker:{
            on:'',
            off:''
        },
        red_modbus:{
            on:'',
            off:''
        },
    },
    datos_generales: {
        fase: '1',
        marca: '',
        modelo: '',
        sistema: '',
        ubicacion: ''

    },
    volt_corr:{
        in_volt: 0,
        out_volt: 0,
        corr_total: 0,
        boton_estado: '',
        boton_pdu:'',
        nombre_pdu:'',
        estado: ''
    

    } 

    }
    return (
        
        
    <svg
    id="svg840"
    viewBox="0 0 508 198.44"
    
  >
    <defs id="defs834">
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
        id="linearGradient15377"
        x1={476.53}
        x2={524.95}
        y1={236.86}
        y2={237.26}
        gradientTransform="translate(-274.43 -54.713)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop15371" offset={0} stopColor="#168498" />
        <stop id="stop15373" offset={1} stopColor="#168498" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="linearGradient4374"
        x1={582.48}
        x2={650.34}
        y1={50.318}
        y2={50.325}
        gradientTransform="matrix(1 0 0 .598 -274.3 3.191)"
        gradientUnits="userSpaceOnUse"
        xlinkHref="#linearGradient4372"
      />
      <linearGradient id="linearGradient4372">
        <stop id="stop4368" offset={0} stopColor="#ff0" />
        <stop id="stop4370" offset={1} />
      </linearGradient>
      <linearGradient
        id="linearGradient4374-9"
        x1={582.48}
        x2={650.34}
        y1={50.318}
        y2={50.325}
        gradientTransform="matrix(1 0 0 .598 -274.7 90.245)"
        gradientUnits="userSpaceOnUse"
        xlinkHref="#linearGradient4372"
      />
      <linearGradient
        id="linearGradient4374-9-7"
        x1={671.34}
        x2={587.39}
        y1={50.442}
        y2={50.084}
        gradientTransform="matrix(.89198 0 0 -.598 -108.13 75.418)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop1258" offset={0} />
        <stop id="stop1256" offset={1} stopColor="#ff0" />
      </linearGradient>
      <linearGradient
        id="linearGradient14967"
        x1={79.873}
        x2={81.36}
        y1={114.53}
        y2={36.041}
        gradientTransform="matrix(-1.0781 0 0 .99767 312.59 -24.693)"
        gradientUnits="userSpaceOnUse"
        xlinkHref="#linearGradient14947"
      />
      <linearGradient id="linearGradient14947">
        <stop id="stop14943" offset={0} stopColor="#002746" />
        <stop id="stop14945" offset={1} stopColor="#002746" stopOpacity={0} />
      </linearGradient>
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
      <clipPath id="clipPath1163">
        <path
          id="path1165"
          d="M131.35 106.21v-6.426l-23.718 6.615s8.126 31.75 8.504 32.789c.162.444 21.545-1.323 21.261-.095-.283 1.229 10.016-4.819 9.639-4.819h-3.213l-5.197-6.614z"
          fill="none"
          strokeWidth=".26458px"
          stroke="#000"
        />
      </clipPath>
      <clipPath id="clipPath5591">
        <path
          id="path5593"
          d="M217.71-323.55l-13.607-435.43 130.02-34.774 226.79 21.167-22.679 436.94-101.3 86.179z"
          fill="none"
          strokeWidth=".26458px"
          stroke="#000"
        />
      </clipPath>
      <clipPath id="clipPath835-87-6">
        <path
          id="path837-76-3"
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
        id="linearGradient4474"
        x1={229.39}
        x2={229.39}
        y1={-116.55}
        y2={-98.557}
        gradientTransform="matrix(.99743 0 0 .98452 -102.33 130.64)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop4468" offset={0} stopColor="#1aea78" />
        <stop id="stop4470" offset={1} stopColor="#1aea78" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="linearGradient3292"
        x1={524.14}
        x2={525.07}
        y1={291.75}
        y2={216.73}
        gradientTransform="matrix(-1.016 0 0 1 564.9 -207.59)"
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
        gradientTransform="matrix(1.016 0 0 1 -310.31 -207.61)"
        gradientUnits="userSpaceOnUse"
        xlinkHref="#linearGradient15175"
      />
      <linearGradient
        id="linearGradient8863"
        x1={258.93}
        x2={258.93}
        y1={223.38}
        y2={273.52}
        gradientTransform="translate(-33.274 -120.51)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop8857" offset={0} stopColor="#178299" />
        <stop id="stop8859" offset={1} stopColor="#178299" stopOpacity={0} />
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
        <stop id="stop922" offset={0} stopColor="#162d50" />
        <stop id="stop924" offset={1} stopColor="#162d50" stopOpacity={0} />
      </linearGradient>
    </defs>
    <g id="layer2">
      <g id="g893" transform="matrix(.99513 0 0 1.0235 80.907 -239.24)">
        <g id="g699" transform="translate(-53.606 -208.6) scale(1.0002)">
          <g id="layer1-8" transform="matrix(1 0 0 .67486 -26.86 442.19)">
            <g
              id="layer1-7"
              transform="matrix(1 0 0 .98732 -5.896 -19.421)"
              strokeWidth={0.83933}
            >
              <rect
                id="rect10510"
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
              id="rect818"
              fillRule="evenodd"
              fill="url(#linearGradient701)"
              paintOrder="markers stroke fill"
              d="M80.369 300.08H590.749V584.5H80.369z"
            />
          </g>
        </g>
      </g>
    </g>
    <g id="layer5" letterSpacing={0} wordSpacing={0}>
      <g id="g12333">
        <text
          id="text1940-4"
          x={431.68903}
          y={26.789129}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="9.0334px"
          strokeWidth={0.33875}
        >
          <tspan
            id="tspan18521"
            x={431.68903}
            y={26.789129}
            dy="0 0 0"
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
          id="text3596"
          x={299.50732}
          y={25.576529}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="3.5278px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3594"
            x={299.50732}
            y={25.576529}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"DATOS GENERALES"}
          </tspan>
        </text>
        <text
          id="text3705"
          x={312.53397}
          y={114.04533}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="3.5278px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3703"
            x={312.53397}
            y={114.04533}
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
          x={432.33109}
          y={53.143303}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="sans-serif"
          fontSize="3.5278px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan5729"
            x={432.33109}
            y={53.143303}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"FASES"}
          </tspan>
        </text>
        <text
          id="text3705-8"
          x={214.3609}
          y={188.67584}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="sans-serif"
          fontSize="3.5278px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3703-1"
            x={214.3609}
            y={188.67584}
            fill="#00aad4"
            fontFamily="BankGothic Lt BT"
            fontSize="4.9389px"
            strokeWidth={0.26458}
          >
            {"ESTADO"}
          </tspan>
        </text>
        <text
          id="text3600-1"
          transform="scale(.98529 1.0149)"
          x={279.4426}
          y={45.509361}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          strokeWidth={0.47057}
        >
          <tspan
            id="tspan3598-2"
            x={279.4426}
            y={45.509361}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.47057}
          >
            {"FASE:"}
          </tspan>
          <tspan
            id="tspan3602-5"
            x={279.4426}
            y={53.446861}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.47057}
          >
            {"SISTEMA:"}
          </tspan>
          <tspan
            id="tspan3604-0"
            x={279.4426}
            y={61.384361}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.47057}
          >
            {"MARCA:"}
          </tspan>
          <tspan
            id="tspan3606-4"
            x={279.4426}
            y={69.321861}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.47057}
          >
            {"MODELO:"}
          </tspan>
          <tspan
            id="tspan3608-9"
            x={279.4426}
            y={77.259361}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.47057}
          >
            {"UBICACI\xD3N:"}
          </tspan>
        </text>
        <text
          id="text9359"
          x={27.095032}
          y={59.160267}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="sans-serif"
          fontSize="6.35px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan9357"
            x={27.095032}
            y={59.160267}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.7611px"
            fontWeight={700}
            strokeWidth={0.26458}
          >
            {"V"}
          </tspan>
        </text>
        <text
          id="text21801"
          x={25.012157}
          y={28.408953}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="3.5278px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan21799"
            x={25.012157}
            y={28.408953}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.5861px"
            strokeWidth={0.26458}
          >
            {"IN VOLT."}
          </tspan>
        </text>
        <text
          id="text3573"
          x={205.84644}
          y={27.564878}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="sans-serif"
          fontSize="3.5278px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan3571"
            x={205.84644}
            y={27.564878}
            fill="#00aad4"
            fontFamily="BankGothic Lt BT"
            fontSize="4.5861px"
            strokeWidth={0.26458}
          >
            <tspan id="tspan4517" fontFamily="Franklin Gothic Medium">
              {"OUT VOLT. "}
            </tspan>
          </tspan>
        </text>
        <text
          id="text3659"
          transform="scale(.98529 1.0149)"
          x={279.43573}
          y={131.87044}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          strokeWidth={0.47057}
        >
          <tspan
            id="tspan3679"
            x={279.43573}
            y={131.87044}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {"ALARMA GENERAL"}
          </tspan>
          <tspan
            id="tspan3681"
            x={279.43573}
            y={139.71321}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {"PUERTA ABIERTA"}
          </tspan>
          <tspan
            id="tspan3683"
            x={279.43573}
            y={147.55598}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {"FALLA BREAKER PRINC."}
          </tspan>
          <tspan
            id="tspan3687"
            x={279.43573}
            y={155.39876}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {"RED MODBUS"}
          </tspan>
        </text>
        <text
          id="text825-6-5"
          transform="scale(.8204 1.2189)"
          x={499.5748}
          y={56.290901}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.0855px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan1153"
            x={499.5748}
            y={56.290901}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"IN1 AB:"}
          </tspan>
          <tspan
            id="tspan3041"
            x={499.5748}
            y={63.8978}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"IN1 BC: "}
          </tspan>
          <tspan
            id="tspan1157"
            x={499.5748}
            y={71.5047}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"IN1 CA:"}
          </tspan>
          <tspan
            id="tspan5817"
            x={499.5748}
            y={79.111603}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"OUT1 AB:"}
          </tspan>
          <tspan
            id="tspan5821"
            x={499.5748}
            y={86.718498}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"OUT1 BC:"}
          </tspan>
          <tspan
            id="tspan1165"
            x={499.5748}
            y={94.325401}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"OUT1 CA:"}
          </tspan>
          <tspan
            id="tspan6821"
            x={499.5748}
            y={101.9323}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"OUT1 A:"}
          </tspan>
          <tspan
            id="tspan6823"
            x={499.5748}
            y={109.5392}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"OUT1 B:"}
          </tspan>
          <tspan
            id="tspan6825"
            x={499.5748}
            y={117.1461}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"OUT1 C:"}
          </tspan>
          <tspan
            id="tspan3050"
            x={499.5748}
            y={124.753}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {"CORRIENTE N.:"}
          </tspan>
        </text>
        <text
          id="text4521"
          x={223.35106}
          y={61.592419}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="sans-serif"
          fontSize="7.7611px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan4519"
            x={223.35106}
            y={61.592419}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.7611px"
            fontWeight={700}
            strokeWidth={0.26458}
          >
            {"V"}
          </tspan>
        </text>
        <text
          id="text4527"
          x={223.10641}
          y={138.86681}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="sans-serif"
          fontSize="7.7611px"
          strokeWidth={0.26458}
        >
          <tspan
            id="tspan4525"
            x={223.10641}
            y={138.86681}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.7611px"
            fontWeight={700}
            strokeWidth={0.26458}
          >
            {"A"}
          </tspan>
        </text>
      </g>
      <text
        id="out1_a_cur"
        transform="scale(.8204 1.2189)"
        x={589.08545}
        y={101.18526}
        style={{ lineHeight: 1.25 }}
        xmlSpace="preserve"
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="6.0855px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan6827"
          x={589.08545}
          y={101.18526}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="4.9389px"
          strokeWidth={0.26458}
        >
          {"A"}
        </tspan>
      </text>
      <text
        id="in1_ab_vol-1"
        transform="scale(.8204 1.2189)"
        x={589.49774}
        y={56.598137}
        style={{ lineHeight: 1.25 }}
        xmlSpace="preserve"
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="6.0855px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan1409-9"
          x={589.49774}
          y={56.598137}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="4.9389px"
          strokeWidth={0.26458}
        >
          {"V"}
        </tspan>
      </text>
      <text
        id="in1_bc_vol-5"
        transform="scale(.8204 1.2189)"
        x={589.7522}
        y={63.734932}
        style={{ lineHeight: 1.25 }}
        xmlSpace="preserve"
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="6.0855px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan15444-0"
          x={589.7522}
          y={63.734932}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="4.9389px"
          strokeWidth={0.26458}
        >
          {"V"}
        </tspan>
      </text>
      <text
        id="in1_ca_vol-1"
        transform="scale(.8204 1.2189)"
        x={589.72565}
        y={71.332199}
        style={{ lineHeight: 1.25 }}
        xmlSpace="preserve"
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="6.0855px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan15500-8"
          x={589.72565}
          y={71.332199}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="4.9389px"
          strokeWidth={0.26458}
        >
          {"V"}
        </tspan>
      </text>
      <text
        id="out1_ab_vol-5"
        transform="scale(.8204 1.2189)"
        x={589.54962}
        y={78.929474}
        style={{ lineHeight: 1.25 }}
        xmlSpace="preserve"
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="6.0855px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan15522-9"
          x={589.54962}
          y={78.929474}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="4.9389px"
          strokeWidth={0.26458}
        >
          {"V"}
        </tspan>
      </text>
      <text
        id="out1_bc_vol-3"
        transform="scale(.8204 1.2189)"
        x={589.54962}
        y={86.526733}
        style={{ lineHeight: 1.25 }}
        xmlSpace="preserve"
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="6.0855px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan15530-2"
          x={589.54962}
          y={86.526733}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="4.9389px"
          strokeWidth={0.26458}
        >
          {"V"}
        </tspan>
      </text>
      <text
        id="out1_ca_vol-6"
        transform="scale(.8204 1.2189)"
        x={589.54962}
        y={93.906975}
        style={{ lineHeight: 1.25 }}
        xmlSpace="preserve"
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="6.0855px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan15552-7"
          x={589.54962}
          y={93.906975}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="4.9389px"
          strokeWidth={0.26458}
        >
          {"V"}
        </tspan>
      </text>
      <text
        id="neut_cur-9"
        transform="scale(.8204 1.2189)"
        x={589.25537}
        y={124.11607}
        style={{ lineHeight: 1.25 }}
        xmlSpace="preserve"
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="6.0855px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan15579-5"
          x={589.25537}
          y={124.11607}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="4.9389px"
          strokeWidth={0.26458}
        >
          {"A"}
        </tspan>
      </text>
      <text
        id="out1_b_cur-5"
        transform="scale(.8204 1.2189)"
        x={589.33264}
        y={109.10142}
        style={{ lineHeight: 1.25 }}
        xmlSpace="preserve"
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="6.0855px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan6833-1"
          x={589.33264}
          y={109.10142}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="4.9389px"
          strokeWidth={0.26458}
        >
          {"A"}
        </tspan>
      </text>
      <text
        id="out1_c_cur-4"
        transform="scale(.8204 1.2189)"
        x={589.33264}
        y={116.48161}
        style={{ lineHeight: 1.25 }}
        xmlSpace="preserve"
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="6.0855px"
        strokeWidth={0.26458}
      >
        <tspan
          id="tspan6839-5"
          x={589.33264}
          y={116.48161}
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="4.9389px"
          strokeWidth={0.26458}
        >
          {"A"}
        </tspan>
      </text>
    </g>
    <g id="layer1">
      <g id="g14038">
        <ellipse
          id="path8847"
          cx={225.54}
          cy={128.01}
          rx={25.361}
          ry={25.427}
          fill="url(#linearGradient8863)"
          opacity={0.4}
          paintOrder="stroke fill markers"
        />
        <path
          id="path8839"
          d="M253.21 42.596l-20.804-20.835-33.017-.094-4.554 4.053v1.886l4.45 3.582v24.605l-1.862 1.886v2.357l6.83 6.693v3.582l-2.69 2.546v4.148h16.353l3.208-2.451 5.59 5.185h20.492l5.693-5.374z"
          fill="url(#linearGradient8841)"
          opacity={0.3}
        />
        <path
          id="path3290"
          d="M1.382 42.616l20.804-20.835 33.017-.094 4.554 4.053v1.886l-4.45 3.582v24.605L57.17 57.7v2.357l-6.831 6.693v3.583l2.69 2.545v4.148H36.678l-3.209-2.451-5.589 5.185H7.386l-5.693-5.374z"
          fill="url(#linearGradient3292)"
          opacity={0.3}
        />
        <path
          id="path2477-4"
          d="M27.993 38.492a12.042 12.042 0 00-1.47.238l.436 1.43a10.554 10.554 0 011.07-.175zm-2.013.375a12.042 12.042 0 00-1.477.512l.767 1.295a10.554 10.554 0 011.107-.372zm-1.994.745a12.042 12.042 0 00-1.565.898l1.017 1.113a10.554 10.554 0 011.274-.707zm-2.025 1.227a12.042 12.042 0 00-1.41 1.24l1.27.835a10.554 10.554 0 011.118-.947zm-1.796 1.656a12.042 12.042 0 00-1.166 1.553l.08-.087 1.273.735a10.554 10.554 0 011.043-1.343zm-1.395 1.932a12.042 12.042 0 00-.832 1.738l1.436.413a10.554 10.554 0 01.664-1.372zm-1.035 2.31a12.042 12.042 0 00-.445 1.842l1.48.176a10.554 10.554 0 01.409-1.644zm-.525 2.441a12.042 12.042 0 00-.07 1.298 12.042 12.042 0 00.014.592l1.485-.119a10.554 10.554 0 01-.01-.473 10.554 10.554 0 01.063-1.161zm1.47 2.332l-1.48.159a12.042 12.042 0 00.36 1.958l1.407-.5a10.554 10.554 0 01-.288-1.617zm.444 2.158l-1.392.536a12.042 12.042 0 00.68 1.658l1.285-.761a10.554 10.554 0 01-.573-1.433zm.832 1.931l-1.262.793a12.042 12.042 0 00.958 1.445l1.178-.911a10.554 10.554 0 01-.874-1.327zm1.23 1.762l-1.154.943a12.042 12.042 0 001.4 1.388l.872-1.212a10.554 10.554 0 01-1.119-1.119zm14.464 1.453a10.554 10.554 0 01-1.608 1.03l.71 1.308a12.042 12.042 0 001.78-1.138zm-12.907.023l-.838 1.234a12.042 12.042 0 001.506.974l.792-1.264a10.554 10.554 0 01-1.46-.944zm1.966 1.197l-.76 1.288a12.042 12.042 0 002.18.802l.387-1.437a10.554 10.554 0 01-1.807-.653zm8.837.05a10.554 10.554 0 01-1.798.628l.434 1.426a12.042 12.042 0 002.087-.747zm-6.48.731l-.347 1.448a12.042 12.042 0 002.04.247l.064-1.487a10.554 10.554 0 01-1.756-.208zm4.132.02a10.554 10.554 0 01-1.811.192l-.025 1.49a12.042 12.042 0 002.233-.244z"
          fillOpacity={0.98824}
          fillRule="evenodd"
          fill="#c29f05"
          paintOrder="markers stroke fill"
        />
        <path
          id="path1746-1"
          d="M267.82 155.77v-11.184l-2.71-3.342v-28.41l-1.667-2.057v-3.342l6.357-7.713h15.423l4.272 5.399h76.8l3.96-4.885h9.275l3.438 3.985v5.27l-5.418 6.557v22.507l5.446 6.817v16.135l-3.279 3.772v15.953l1.732 1.773-.074 2.545-5.416 6.545h-32.937l-3.242-3.818h-52.464l-1.842-2.454H277.7l-1.879 2.5h-8.51l-1.88-2.5V158.37z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1748-8"
          d="M264.66 181.8l-.958-1.951v-12.85l2.338-3.768h3.91v15.676l-1.533 2.893z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1750-1"
          d="M266.22 139.83v-25.597l2.642 3.505v25.972z"
          fill="#168198"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1752-7"
          d="M271.57 103.02l1.511-1.884h11.932l3.96 5.517h76.592l-.625 1.278h-89.722z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1754-2"
          d="M293.98 183.55h60.648l5.545 7.59h-2.67l-3.813-5.033h-6.851v-1.144h-51.87z"
          fill="#168198"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1756-0"
          d="M355.61 183.48h2.345l5.52 7.66-2.25.008z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1781-2"
          d="M382.76 111.32v10.483l-4.424 5.712v-10.483z"
          fill="#168198"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1783-9"
          d="M378.46 131.79v5.87l4.4 5.775v-6.12z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1785-5"
          d="M378.36 128.46v2.417l4.57 5.555v-6.34l-2.844-3.61z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1787-7"
          d="M382.93 129.06v-6.026l-2.382 2.981z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1789-4"
          d="M381.41 181.36l-.994-1.226v-13.94l1.433-1.533v2.237l-.393.337z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1756-1-9"
          d="M359.26 183.48h2.345l5.52 7.66-2.25.008z"
          fill="#168198"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1756-3-1"
          d="M362.63 183.48h2.345l5.52 7.66-2.25.008z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1814-1"
          d="M379.32 163.4l2.767-3.035V145.92l-2.627-3.089z"
          fill="#168198"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1746-1-7"
          d="M268.01 63.155V52.658l-2.71-3.137V22.855l-1.667-1.93v-3.138l6.357-7.24h15.423l4.272 5.068h76.8l3.96-4.585h9.275l3.438 3.74v4.948l-5.418 6.153v21.125l5.446 6.4v15.143l-3.279 3.541v14.974l1.732 1.664-.074 2.389-5.416 6.143h-32.937l-3.242-3.584h-52.464l-1.842-2.303h-7.774l-1.879 2.346h-8.51l-1.88-2.346V65.596z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1748-8-6"
          d="M264.85 87.588l-.958-1.831V73.696l2.338-3.537h3.91v14.714l-1.533 2.716z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1750-1-8"
          d="M266.41 48.2V24.174l2.642 3.29v24.378z"
          fill="#168198"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1752-7-2"
          d="M271.76 13.641l1.511-1.768h11.932l3.96 5.178h76.592l-.625 1.2h-89.722z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1754-2-9"
          d="M294.16 89.23h60.648l5.545 7.124h-2.67l-3.813-4.724h-6.851v-1.074h-51.87z"
          fill="#168198"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1756-0-8"
          d="M355.8 89.167h2.345l5.52 7.19-2.25.008z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1781-2-2"
          d="M382.95 21.44v9.84l-4.424 5.362v-9.84z"
          fill="#168198"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1783-9-6"
          d="M378.65 40.648v5.51l4.4 5.42v-5.745z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1785-5-9"
          d="M378.55 37.525v2.268l4.57 5.215v-5.951l-2.844-3.388z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1787-7-9"
          d="M383.12 38.085v-5.656l-2.382 2.798z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1789-4-5"
          d="M381.6 87.173l-.994-1.15V72.937l1.433-1.438v2.099l-.393.316z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1756-1-9-5"
          d="M359.45 89.167h2.345l5.52 7.19-2.25.008z"
          fill="#168198"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1756-3-1-3"
          d="M362.82 89.167h2.345l5.52 7.19-2.25.008z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1814-1-4"
          d="M379.51 70.323l2.767-2.848V53.917l-2.627-2.9z"
          fill="#168198"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1746-1-7-4"
          d="M392.99 82.963v-9.32l-2.491-2.785V47.184l-1.533-1.714v-2.785l5.845-6.428h14.18l3.93 4.5h70.62l3.64-4.071h8.529l3.162 3.32V44.4l-4.983 5.463v18.755l5.008 5.681v13.445l-3.015 3.144v71.683l1.592 1.477-.067 2.12-4.98 5.455H462.14l-2.982-3.182h-48.242l-1.693-2.045h-7.149l-1.727 2.083h-7.826l-1.728-2.083V85.13z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1748-8-6-8"
          d="M390.09 150.23l-.881-1.626v-10.708l2.15-3.14h3.596v13.063l-1.41 2.411z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1750-1-8-9"
          d="M391.53 69.686v-21.33l2.429 2.92V72.92z"
          fill="#168198"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1752-7-2-6"
          d="M396.44 39.004l1.39-1.57h10.97l3.642 4.597h70.428l-.575 1.066h-82.502z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1781-2-2-7"
          d="M498.68 45.928v8.736l-4.068 4.76v-8.736z"
          fill="#168198"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1783-9-6-6"
          d="M494.73 62.981v4.891l4.046 4.813v-5.1z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1785-5-9-9"
          d="M494.64 60.208v2.014l4.202 4.63v-5.284l-2.615-3.008z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1787-7-9-7"
          d="M498.84 60.705v-5.022l-2.19 2.485z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1789-4-5-6"
          d="M497.38 163.25l-.914-1.021.067-70.583 1.318-1.277v1.864l-.362.28z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1814-1-4-8"
          d="M495.52 89.327l2.544-2.529V74.761l-2.415-2.574z"
          fill="#168198"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1754-2-7"
          d="M411.64 164.01h60.648l5.545 6.738h-2.67l-3.813-4.468h-6.852v-1.016H412.63z"
          fill="#168198"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1756-0-5"
          d="M473.28 163.95h2.345l5.52 6.801-2.25.006z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1756-1-9-8"
          d="M476.92 163.95h2.345l5.52 6.801-2.25.006z"
          fill="#168198"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <path
          id="path1756-3-1-8"
          d="M480.3 163.95h2.345l5.52 6.801-2.25.006z"
          fill="none"
          strokeWidth={0.35}
          stroke="#3edce3"
        />
        <g
          id="g4030-4"
          transform="matrix(1.2189 0 0 1.2213 336.29 -14.479)"
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
          d="M416.3 14.883H474.33500000000004V32.934H416.3z"
        />
        <g
          id="g4030-4-3"
          transform="matrix(1.2189 0 0 1.2213 18.064 -13.605)"
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
          id="rect4837-8-8"
          fill="none"
          opacity={0.25}
          paintOrder="markers stroke fill"
          strokeDashoffset={5.65}
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={0.565}
          stroke="#00fbff"
          d="M98.066 15.757H156.101V33.808H98.066z"
        />
        <path
          id="path21607-0-0"
          d="M394.38 8.848h3.214v2.721h-3.15z"
          fill="none"
          filter="url(#filter21601-3-5)"
          opacity={0.8}
          strokeWidth={0.20153}
          stroke="#0deff7"
        />
        <path
          id="path21605-0-4"
          d="M398.61 8.848h3.214v2.721h-3.15z"
          fill="none"
          filter="url(#filter21601-3-5)"
          opacity={0.8}
          strokeWidth={0.20153}
          stroke="#0deff7"
        />
        <path
          id="path21609-4-0"
          transform="matrix(.91623 0 0 1 352.89 -204.31)"
          d="M54.82 213.16h3.214v2.721h-3.15z"
          fill="#00b1d4"
          filter="url(#filter21611-1-1)"
          opacity={0.8}
        />
        <path
          id="path21607-0-0-2"
          d="M7.71 8.603h3.214v2.721h-3.15z"
          fill="none"
          filter="url(#filter21601-3-5-4)"
          opacity={0.8}
          strokeWidth={0.20153}
          stroke="#0deff7"
        />
        <path
          id="path21615-1-6-7"
          transform="matrix(17.626 0 0 .71592 -943.75 -143.59)"
          d="M54.82 213.16h3.214v2.721h-3.15z"
          fill="#00b1d4"
          filter="url(#filter21611-1-1-4)"
          opacity={0.8}
        />
        <path
          id="path21605-0-4-8"
          d="M11.944 8.603h3.214v2.721h-3.15z"
          fill="none"
          filter="url(#filter21601-3-5-4)"
          opacity={0.8}
          strokeWidth={0.20153}
          stroke="#0deff7"
        />
        <path
          id="path21609-4-0-7"
          transform="matrix(.91623 0 0 1 -33.782 -204.56)"
          d="M54.82 213.16h3.214v2.721h-3.15z"
          fill="#00b1d4"
          filter="url(#filter21611-1-1-4)"
          opacity={0.8}
        />
        <path
          id="path21615-1-6-7-4"
          transform="matrix(23.887 0 0 .71592 -1135.1 -142.51)"
          d="M54.82 213.16h3.214v2.721h-3.15z"
          fill="#00b1d4"
          filter="url(#filter21611-1-1-4-7)"
          opacity={0.8}
        />
        <path
          id="path21615-1-6-7-4-5"
          transform="matrix(5.0576 0 0 .71592 209.19 -140.94)"
          d="M54.82 213.16h3.214v2.721h-3.15z"
          fill="#00b1d4"
          filter="url(#filter21611-1-1-4-7-6)"
          opacity={0.8}
        />
        <path
          id="path2425"
          d="M80.531 13.786l6.998-6.196h74.083l7.56 6.047 85.8.19 7.338-6.053 122.66-.022 5.152 4.911"
          fill="none"
          strokeWidth=".26458px"
          stroke="#00bec4"
        />
        <path
          id="path2427"
          d="M80.639 13.478H1.175"
          fill="none"
          strokeWidth=".26458px"
          stroke="#00bec4"
        />
        <path
          id="path2610"
          d="M395.38 195.17v-3.59l16.631-12.663h75.484l11.225 7.715v9.89h-7.24l-6.047-4.092h-72.571l-3.78 3.213z"
          fillOpacity={0}
          strokeWidth=".26458px"
          stroke="#00fbff"
        />
        <path
          id="path2612"
          d="M486.1 191.76l5.764 4.063h3.969l-7.56-5.292h-78.336l-5.197 4.064h4.347l3.118-2.74z"
          fill="#168198"
          strokeWidth=".26458px"
          stroke="#00fbff"
        />
        <path
          id="rect2614-4"
          d="M402.17 187.93l2.773-.033-2.138 1.536-2.873.067z"
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
          d="M406.09 185.04l2.773-.033-2.138 1.536-2.873.067z"
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
          d="M409.85 181.95l2.773-.033-2.138 1.536-2.873.067z"
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
          transform="translate(-3.476 3.287)"
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
          id="path21605"
          d="M192.06 192.96h3.214v2.721h-3.15z"
          fill="none"
          filter="url(#filter21601)"
          opacity={0.8}
          strokeWidth={0.20153}
          stroke="#0deff7"
        />
        <path
          id="path21607"
          d="M187.83 192.96h3.214v2.721h-3.15z"
          fill="none"
          filter="url(#filter21601)"
          opacity={0.8}
          strokeWidth={0.20153}
          stroke="#0deff7"
        />
        <path
          id="path21609"
          transform="matrix(.91623 0 0 1 146.34 -20.198)"
          d="M54.82 213.16h3.214v2.721h-3.15z"
          fill="#00b1d4"
          filter="url(#filter21611)"
          opacity={0.8}
        />
        <path
          id="path21615"
          transform="matrix(21.445 0 0 .66931 -973.03 50.773)"
          d="M54.82 213.16h3.214v2.721h-3.15z"
          fill="#00b1d4"
          filter="url(#filter21611)"
          opacity={0.8}
        />
        <path
          id="path21770"
          d="M93.085 193.87h88.427"
          fill="none"
          opacity={0.8}
          strokeWidth={0.4}
          stroke="#0deff7"
        />
        <path
          id="path2927"
          d="M4.075 187.84v-7.04l4.188-1.519v-31.398l-4.09-1.418v-66.19l3.116 1.317v60.315l1.851.912v-52.72l15.391 5.774v61.835l-3.994 1.114v-25.321l-7.013-2.583v53.884z"
          fillOpacity={0.99216}
          fill="#123952"
          strokeWidth={0.265}
          stroke="#1bfff8"
        />
        <path
          id="path2929"
          d="M20.606 158.08v18.143l10.392 6.221"
          fill="none"
          strokeWidth={0.265}
          stroke="#1bfff8"
        />
        <path
          id="path2931"
          d="M13.378 184.89l12.685 8.414 37.976.332"
          fill="none"
          strokeWidth={0.265}
          stroke="#1bfff8"
        />
        <path
          id="path3043"
          d="M9.052 90.044l2.94 1.136v52.919l-2.94-1.336z"
          fill="#1bfff8"
        />
        <g id="g1243" transform="translate(-3.476 3.816)">
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
        <path
          id="path3045"
          d="M20.572 133.37v-16.017"
          fill="none"
          strokeWidth=".26458px"
          stroke="#00f8ed"
        />
        <g id="g1243-7" transform="rotate(-90 41.469 207.68)">
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
        <g id="g21353-7" transform="matrix(1.1262 0 0 .99883 6.729 .82)">
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
        <path
          id="path15362"
          d="M214.08 175.06l4.281-2.175 31.213.063 2.778 1.319v6.624l-4.224 2.037h-34.16z"
          fill="url(#linearGradient15377)"
          opacity={0.3}
        />
        <path
          id="path6170"
          d="M359.36 27.257l-3.422.036-3.175 1.378 3.346-.035zm-4.306.045l-3.897.04-3.176 1.38 3.821-.04zm-4.78.05l-3.652.039-3.175 1.378 3.577-.038zm-4.532.048l-3.654.038-3.176 1.378 3.579-.037zm16.097.044c-.011-.007.009.008.027.024-.009-.008-.016-.017-.027-.024zm-20.63.003l-3.485.037-3.175 1.378 3.409-.036zm-4.365.046l-3.368.035-3.175 1.378 3.293-.034zm-4.25.044l-3.427.036-3.174 1.378 3.35-.035zm-4.307.045l-3.012.032-3.175 1.378 2.936-.03zm32.825.01c.008.005.025.014.032.02l.005-.02h-.037zm-36.718.031l-3.565.038-3.174 1.378 3.488-.037zm-4.44.047l-3.314.035-3.174 1.378 3.237-.034zm-4.194.044l-3.37.035-3.175 1.378 3.294-.034zm-4.25.045l-3.358.035-3.175 1.378 3.281-.035zm-4.238.044l-3.144.033-3.175 1.378 3.067-.032zm-4.027.043l-2.831.03-3.175 1.378 2.755-.03zm-3.71.039l-2.671.028-3.174 1.378 2.593-.027zm-3.552.037l-2.684.028-3.174 1.379 2.607-.028zm-3.565.038l-2.607.027-3.175 1.378 2.532-.026zm67.658.413l-.013.005.014-.001v-.004z"
          fillRule="evenodd"
          fill="url(#linearGradient4374)"
          paintOrder="markers stroke fill"
        />
        <path
          id="path6140"
          d="M280.51 194.34h111.8"
          fill="none"
          strokeWidth={0.5987}
          stroke="#00aad4"
        />
        <path
          id="path6144"
          d="M199 189.93h43.269"
          fill="#e3ff00"
          strokeDasharray=".2195,.2195"
          strokeWidth={0.2195}
          stroke="#b37c05"
        />
        <path
          id="path6170-7"
          d="M361.08 115.37l-3.422.036-3.176 1.378 3.347-.035zm-4.306.045l-3.897.04-3.176 1.38 3.821-.04zm-4.78.05l-3.652.039-3.175 1.378 3.577-.038zm-4.532.048l-3.654.038-3.176 1.378 3.579-.037zm16.097.044c-.011-.007.009.008.027.024-.009-.008-.016-.017-.027-.024zm-20.63.003l-3.485.037-3.175 1.378 3.409-.036zm-4.365.046l-3.368.035-3.175 1.378 3.293-.034zm-4.25.044l-3.427.036-3.174 1.378 3.35-.035zm-4.307.045l-3.012.032-3.175 1.378 2.936-.03zm32.825.01c.008.005.025.014.032.02l.005-.02h-.037zm-36.718.031l-3.565.038-3.174 1.378 3.488-.037zm-4.44.047l-3.314.035-3.174 1.378 3.237-.034zm-4.194.044l-3.37.035-3.175 1.379 3.294-.035zm-4.25.045l-3.358.035-3.175 1.378 3.281-.035zm-4.238.044l-3.144.033-3.175 1.378 3.067-.032zm-4.027.043l-2.831.03-3.175 1.378 2.755-.03zm-3.71.039l-2.67.028-3.175 1.378 2.593-.027zm-3.552.037l-2.684.028-3.174 1.379 2.607-.028zm-3.565.038l-2.607.027-3.175 1.378 2.532-.026zm67.658.413l-.013.005.014-.001v-.004z"
          fillRule="evenodd"
          fill="url(#linearGradient4374-9)"
          paintOrder="markers stroke fill"
        />
        <path
          id="path6170-7-8"
          d="M481.19 57.078l-3.052-.036-2.833-1.378 2.985.035zm-3.841-.045l-3.476-.04-2.833-1.38 3.409.04zm-4.263-.05l-3.258-.038-2.832-1.379 3.19.038zm-4.043-.048l-3.26-.038-2.832-1.378 3.192.037zm14.358-.044c-.01.007.008-.008.024-.024-.008.008-.014.017-.024.024zM465 56.888l-3.108-.036-2.832-1.379 3.04.036zm-3.893-.046l-3.005-.035-2.832-1.378 2.937.034zm-3.79-.044l-3.058-.036-2.832-1.378 2.99.035zm-3.844-.045l-2.685-.032-2.832-1.378 2.618.03zm29.28-.01c.006-.005.022-.014.028-.02.003.008.003.014.004.02h-.033zM450 56.713l-3.179-.037-2.831-1.38 3.11.038zm-3.96-.047l-2.956-.035-2.831-1.378 2.887.034zm-3.74-.044l-3.007-.035-2.832-1.378 2.939.034zm-3.792-.044l-2.995-.036-2.832-1.378 2.927.035zm-3.78-.045l-2.804-.033-2.832-1.378 2.736.032zm-3.592-.043l-2.525-.03-2.832-1.378 2.458.03zm-3.31-.039l-2.381-.028-2.832-1.378 2.314.027zm-3.167-.037l-2.394-.028-2.832-1.378 2.326.027zm-3.18-.038l-2.325-.027-2.833-1.378 2.259.026zm60.35-.413l-.011-.005.012.001v.004z"
          fillRule="evenodd"
          fill="url(#linearGradient4374-9-7)"
          paintOrder="markers stroke fill"
        />
        <path
          id="path15285-8-5-8"
          d="M198.85 176.24l-.032-4.977 5.663.002"
          fill="none"
          strokeWidth={0.67831}
          stroke="#0deff7"
        />
        <path
          id="path6142-3"
          d="M198.45 187.62h14.784"
          fill="none"
          strokeDasharray="1.20122,.300305"
          strokeWidth={0.3003}
          stroke="#00aad4"
        />
        <g id="g15358" transform="matrix(.52638 0 0 .48302 167.34 166.57)">
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
          id="path14959"
          d="M245.43 35.338l.102-4.525-8.863-9.15-4.483-.017z"
          fill="url(#linearGradient14967)"
        />
        <path
          id="path14961"
          d="M197.9 29.823l-.288 27.85 1.969-1.877V31.19z"
          fill="url(#linearGradient14967)"
        />
        <path
          id="path884-8-0"
          transform="matrix(.69053 0 0 .62532 -41.108 15.016)"
          d="M386.1 38.143a22.249 22.248 0 01.495.026l-.025 4.723a17.518 17.517 0 00-.47-.018 17.518 17.517 0 00-17.519 17.517 17.518 17.517 0 006.337 13.466l-2.697 3.897a22.249 22.248 0 01-8.372-17.362 22.249 22.248 0 0122.25-22.248zm1.66.087a22.249 22.248 0 0112.97 5.444l-3.745 3.013a17.518 17.517 0 00-9.25-3.719zm13.831 6.248a22.249 22.248 0 016.125 10.751l-4.823.208a17.518 17.517 0 00-5.012-7.972zm6.385 11.906a22.249 22.248 0 01.374 4.007 22.249 22.248 0 01-1.587 8.152l-4.246-2.105a17.518 17.517 0 001.101-6.047 17.518 17.517 0 00-.43-3.8zm-5.899 11.137l4.226 2.094a22.249 22.248 0 01-7.293 8.852l-2.52-4a17.518 17.517 0 005.587-6.946zm-26.232 7.045a17.518 17.517 0 009.558 3.315l-.212 4.71a22.249 22.248 0 01-12.04-4.133zm19.675.55l2.536 4.025a22.249 22.248 0 01-11.699 3.488l.214-4.746a17.518 17.517 0 008.95-2.767z"
          clipPath="url(#clipPath1984)"
          fillRule="evenodd"
          fill="#fc0"
          opacity={0.75}
          paintOrder="markers stroke fill"
        />
        <g
          id="g1170-0"
          transform="matrix(-1.0948 0 0 .99131 314.33 -23.334)"
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
          id="g6103"
          transform="translate(-9.563 -23.083)"
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
          transform="matrix(.87806 0 0 .79515 -113.83 5.293)"
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
          d="M202.76 57.709H206.9719V60.896800000000006H202.76z"
        />
        <path
          id="rect2077-1"
          fillRule="evenodd"
          fill="#10677d"
          opacity={0.75}
          paintOrder="markers stroke fill"
          d="M202.76 53.393H206.9719V56.5808H202.76z"
        />
        <path
          id="rect2077-7"
          fillRule="evenodd"
          fill="#10677d"
          opacity={0.75}
          paintOrder="markers stroke fill"
          d="M202.76 49.076H206.9719V52.2638H202.76z"
        />
        <path
          id="rect2077-1-2"
          fillRule="evenodd"
          fill="#10677d"
          opacity={0.75}
          paintOrder="markers stroke fill"
          d="M202.76 44.759H206.9719V47.9468H202.76z"
        />
        <path
          id="rect2077-9"
          fillRule="evenodd"
          fill="#10677d"
          opacity={0.75}
          paintOrder="markers stroke fill"
          d="M202.76 40.442H206.9719V43.6298H202.76z"
        />
        <path
          id="rect2077-1-5"
          fillRule="evenodd"
          fill="#10677d"
          opacity={0.75}
          paintOrder="markers stroke fill"
          d="M202.76 36.125H206.9719V39.3128H202.76z"
        />
        <path
          id="path15126"
          d="M234.92 36.102l2.14-2.07-5.196-4.953h-28.83l-3.768-4.591"
          fill="none"
          opacity={0.75}
          strokeDasharray=".84537,.84537"
          strokeWidth={0.28179}
          stroke="#fcfcfc"
        />
        <path
          id="path15379"
          d="M199.19 181.45l-.032 4.977 5.663-.002"
          fill="none"
          strokeWidth={0.67831}
          stroke="#0deff7"
        />
        <g
          id="g1170"
          transform="matrix(1.0781 0 0 .99767 -58.051 -23.941)"
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
          id="path852"
          d="M6.86 64.995l12.428 11.974"
          fill="#168498"
          strokeWidth={0.6008}
          stroke="#0deff7"
        />
        <path
          id="path852-0"
          d="M12.052 66.392l6.118 5.757"
          fill="#168498"
          strokeWidth=".28135px"
          stroke="#0deff7"
        />
        <path
          id="path852-0-7"
          d="M9.403 70.85l4.388 4.135"
          fill="#168498"
          strokeWidth=".28135px"
          stroke="#0deff7"
        />
        <path
          id="path975"
          d="M17.191 36.959l-2.14-2.07 5.196-4.953h28.83l3.768-4.591"
          fill="none"
          opacity={0.75}
          strokeDasharray=".84537,.84537"
          strokeWidth={0.28179}
          stroke="#fcfcfc"
        />
        <path
          id="path884-8-0-4"
          transform="matrix(.99571 0 0 .96932 -102.35 -65.275)"
          d="M132.16 101.27a17.845 17.845 0 00-.397.02l.02 3.79a14.05 14.05 0 01.377-.015 14.05 14.05 0 0114.051 14.05 14.05 14.05 0 01-5.082 10.801l2.163 3.126a17.845 17.845 0 006.714-13.926 17.845 17.845 0 00-17.846-17.845zm-1.332.07a17.845 17.845 0 00-10.402 4.366l3.003 2.417a14.05 14.05 0 017.419-2.982zm-11.093 5.011a17.845 17.845 0 00-4.912 8.624l3.868.167a14.05 14.05 0 014.02-6.395zm-5.12 9.55a17.845 17.845 0 00-.3 3.215 17.845 17.845 0 001.272 6.539l3.406-1.69a14.05 14.05 0 01-.883-4.85 14.05 14.05 0 01.345-3.048zm4.73 8.934l-3.388 1.68a17.845 17.845 0 005.848 7.1l2.022-3.208a14.05 14.05 0 01-4.481-5.572zm21.04 5.65a14.05 14.05 0 01-7.666 2.66l.17 3.778a17.845 17.845 0 009.658-3.315zm-15.78.442l-2.033 3.228a17.845 17.845 0 009.383 2.798l-.171-3.806a14.05 14.05 0 01-7.178-2.22z"
          clipPath="url(#clipPath1163)"
          fillRule="evenodd"
          fill="#168498"
          opacity={0.75}
          paintOrder="markers stroke fill"
        />
        <path
          id="path2639"
          d="M26.319 39.142c11.975-5.162 23.5 14.12 8.674 21.222"
          fill="none"
        />
        <path
          id="path2446"
          d="M390.25 12.703h18.007l4.944-4.878 67.486-.133 4.945 8.953h18.174"
          fill="none"
          strokeWidth=".26458px"
          stroke="#00bec4"
        />
        <text
          id="text5947"
          x={210.66203}
          y={96.363808}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="sans-serif"
          fontSize="3.5278px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan5945"
            x={210.66203}
            y={96.363808}
            style={{
              fontVariantCaps: "normal",
              fontVariantEastAsian: "normal",
              fontVariantLigatures: "normal",
              fontVariantNumeric: "normal"
            }}
            fill="#00aad4"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.5861px"
            strokeWidth={0.26458}
          >
            {"CORRIENTE TOTAL"}
          </tspan>
        </text>
        <circle
          id="path829-8-9"
          transform="translate(157.22 13.891) scale(1.0715)"
          cx={64.011}
          cy={105.64}
          r={19.377}
          clipPath="url(#clipPath835-87-6)"
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
          id="path847-0"
          d="M200.42 133.01l-2.025.253c-.44-2.784-.603-5.569-.101-8.353l-1.013-.152c.274-2.826 1.192-5.265 2.126-7.695l2.38 1.013c-1.114 3.99-2.108 8.16-1.367 14.934z"
          fill="#168198"
        />
        <path
          id="path849-1"
          d="M218.49 152.3l-.557 2.278c1.54.534 3.236.816 5.113.81l.101-.911c4.896.08 9.75-.21 14.377-2.531l.608 1.012c7.14-2.812 11.056-8.473 14.124-14.884l-.658-.253c-.902 2.253-2.026 4.348-3.595 6.126l-1.923-1.367c-7.287 8.816-16.942 10.719-27.591 9.72z"
          fill="#168198"
        />
        <path
          id="path853-1"
          d="M233.63 102.89l.76-2.632c10.39 2.602 15.77 10.216 19.034 19.946l-.759.151a36.812 36.812 0 00-6.123-11.117l-1.673 1.549z"
          fill="#168198"
        />
        <circle
          id="path839-1"
          cx={225.76}
          cy={127.41}
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
          id="path843-5"
          cx={225.62}
          cy={127.51}
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
          id="path1180"
          d="M198.29 124.91l-1.012-.152c.22-2.619 1.112-5.164 2.126-7.695l1.152.467c-1.15 2.384-1.775 4.74-2.266 7.38z"
          fill="#bf9900"
        />
        <path
          id="path1184"
          d="M251.6 137.82c-1.022 1.937-2.122 4.038-3.617 6.129l.702.507c1.209-1.756 2.401-3.853 3.573-6.383z"
          fill="#bf9900"
        />
        <path
          id="path1194"
          d="M223.15 154.48l-.101.911c-1.758.101-3.444-.293-5.113-.81l.204-.834c1.645.347 3.54.743 5.01.733z"
          fill="#bf9900"
        />
      </g>
    </g>
    <g id="layer3">
      <image
        id="image5585"
        transform="matrix(.28236 0 0 .27542 21.605 259.84)"
        x={-308.43}
        y={-923.02}
        width={1354.7}
        height={762}
        clipPath="url(#clipPath5591)"
        preserveAspectRatio="none"
      />
    </g>
  <Variables
    fases = {pdu.fases}
    botones_alarmas=  {pdu.botones_alarmas}
    datos_generales= {pdu.datos_generales}
    volt_corr = {pdu.volt_corr}
  
  /> 
  </svg>

        

    )
} 

export default pdu;