import { ArcElement, Chart as ChartJS } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement);

const centerTextPlugin = {
  id: 'textCenterPlugin',
  beforeDraw: function (chart) {
    if (chart?.config?.options?.elements?.center?.length > 0) {
      // Get ctx from chart
      let ctx = chart.ctx;
      // let centerYGlob;

      const configs = chart.config.options.elements.center.map((config) => {
        // Get options from the center object in options
        let centerConfig = config;
        let fontStyle = centerConfig.fontStyle || 'Arial';
        let txt = centerConfig.text;
        let color = centerConfig.color || '#000';
        let maxFontSize = centerConfig.maxFontSize || 75;
        let sidePadding = centerConfig.sidePadding || 20;
        let fontWeight = centerConfig.fontWeight || 'normal';
        let sidePaddingCalculated = (sidePadding / 100) * chart.width;
        // Start with a base font of 30px
        ctx.font = 'normal 1.25rem ' + fontStyle;

        // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
        let stringWidth = ctx.measureText(txt).width;
        let elementWidth = chart.width - sidePaddingCalculated;

        // Find out how much the font can grow in width.
        let widthRatio = elementWidth / stringWidth;
        let newFontSize = Math.floor(30 * widthRatio);
        let elementHeight = chart.height;

        // Pick a new font size so it will not be larger than the height of label.
        let fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
        let minFontSize = centerConfig.minFontSize;
        let lineHeight = centerConfig.lineHeight || 25;
        let wrapText = false;

        if (minFontSize === undefined) {
          minFontSize = 20;
        }

        if (minFontSize && fontSizeToUse < minFontSize) {
          fontSizeToUse = minFontSize;
          wrapText = true;
        }

        // Set font settings to draw it correctly.
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        let centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
        let centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
        // ctx.font = fontSizeToUse + 'px ' + fontStyle;
        // ctx.fillStyle = color;

        if (!wrapText) {
          // ctx.fillText(txt, centerX, centerY);
          return {
            ...config,
            ctx: {
              font: fontWeight + ' ' + fontSizeToUse + 'rem ' + fontStyle,
              fillStyle: color,
            },
            lines: [],
            line: txt,
            lineHeight,
            fontSizeToUse,
            wrapText,
          };
        }

        let words = txt.split(' ');
        let line = '';
        let lines = [];

        // Break words up into multiple lines if necessary
        for (let n = 0; n < words.length; n++) {
          let testLine = line + words[n] + ' ';
          let metrics = ctx.measureText(testLine);
          let testWidth = metrics.width;
          if (testWidth > elementWidth && n > 0) {
            lines.push(line);
            line = words[n] + ' ';
          } else {
            line = testLine;
          }
        }

        return {
          ...config,
          lines,
          line,
          fontSizeToUse,
          lineHeight,
          ctx: {
            font: fontWeight + ' ' + fontSizeToUse + 'rem ' + fontStyle,
            fillStyle: color,
          },
          wrapText,
        };
      });

      let centerX = chart.width / 2;
      let centerYGlob = chart.height / 2;

      // Move the center up depending on line height and number of lines
      for (const config of configs) {
        centerYGlob -= config.lineHeight;
      }

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (const config of configs) {
        // for (let n = 0; n < config.lines.length; n++) {
        //   ctx.fillText(config.lines[n], centerX, centerYGlob);
        //   centerYGlob += config.lineHeight;
        // }

        ctx.font = config.ctx.font;
        ctx.fillStyle = config.ctx.fillStyle;

        //Draw text in center
        ctx.fillText(config.line, centerX, centerYGlob);
        centerYGlob += config.lineHeight;
      }
    }
  },
};

ChartJS.register(centerTextPlugin);

export default function DonutCalorias({ calorias, meta }) {
  const chartData = useMemo(() => {
    return {
      datasets: [
        {
          data: [meta - calorias + 30, calorias - 30],
          backgroundColor: ['#f2f2f2', '#1ebe6a'],
          borderWidth: 0,
          borderRadius: 100,
        },
      ],
    };
  }, [meta, calorias]);

  const chartOptions = useMemo(() => {
    return {
      cutout: '85%',
      rotation: 80,
      spacing: -10,
      responsive: true,
      plugins: [centerTextPlugin],
      elements: {
        center: [
          {
            text: (meta - calorias).toString(),
            color: '#00', // Default is #000000
            fontStyle: 'Helvetica', // Default is Arial
            fontWeight: 500,
            sidePadding: 1, // Default is 20 (as a percentage)
            minFontSize: 1.25, // Default is 20 (in px), set to false and text will not wrap.
            maxFontSize: 1.5, // Default is 20 (in px), set to false and text will not wrap.
            lineHeight: 1, // Default is 25 (in px), used for when text wraps
          },
          {
            text: '',
            color: '#000', // Default is #000000
            // fontStyle: 'Arial', // Default is Arial
            lineHeight: 20,
          },
          {
            text: 'kcal',
            color: '#000', // Default is #000000
            // fontStyle: 'Arial', // Default is Arial
            fontWeight: 500,
            sidePadding: 10, // Default is 20 (as a percentage)
            minFontSize: 0.7, // Default is 20 (in px), set to false and text will not wrap.
            maxFontSize: 0.7, // Default is 20 (in px), set to false and text will not wrap.
            lineHeight: 12, // Default is 25 (in px), used for when text wraps
          },
          {
            text: 'restantes',
            color: '#000', // Default is #000000
            // fontStyle: 'Arial', // Default is Arial
            fontWeight: 500,
            sidePadding: 10, // Default is 20 (as a percentage)
            minFontSize: 0.7, // Default is 20 (in px), set to false and text will not wrap.
            maxFontSize: 0.7, // Default is 20 (in px), set to false and text will not wrap.
            lineHeight: -30, // Default is 25 (in px), used for when text wraps
          },
        ],
      },
    };
  }, [calorias]);

  return <Doughnut data={chartData} options={chartOptions} />;
}
