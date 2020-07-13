import React from 'react';

const style: any = {
  legendContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    maxWidth: '210px'
  },
  legendRow: {
    display: 'flex',
    width: '100%',
  },
  colorSquare: {
    width: '1rem',
    height: '1rem',
    backgroundColor: 'red',
    padding: '.25rem'
  },
  legendLabel: {
    fontSize: '1rem',
    padding: '.25rem',
    whiteSpace: 'nowrap'
  },
  legendCard: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'lightgray',
    borderRadius: '.25rem',
    padding: '.5rem',
    margin: '.5rem',
    opacity: '.9'
  },
  title: {
    marginTop: '0px'
  }
}

interface LegendProps {
  colorMap: string[],
  colorScaleQuantiles: any,
  label: string,
  title: string
}

export const Legend: React.FC<LegendProps> = ({ colorMap, colorScaleQuantiles, label, title }) => {
  return (
    <div style={style.legendContainer}>
      <div style={style.legendCard}>
        <h4 style={style.title}>{title}</h4>
        {colorMap.map((color, i) =>
          <div style={style.legendRow} key={i.toString()}>
            <div style={{ ...style.colorSquare, backgroundColor: color }} ></div>
        {colorScaleQuantiles && <div style={style.legendLabel}>{i === 0 ? "less than " : ""}{colorScaleQuantiles[i]} {label}</div> }
          </div>
        )}
      </div>
    </div>
  );
}