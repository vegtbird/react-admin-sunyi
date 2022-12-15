import { useTheme } from "@mui/material"
import { ResponsiveChoropleth } from '@nivo/geo'

import { tokens } from "../theme"
import { mockGeographyData as data } from '../data/mockData'
import { geoFeatures } from "../data/mockGeoFeatures"


const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveChoropleth
        data={data}
        theme={{
            axis: {
            domain: {
                line: {
                stroke: colors.grey[100],
                },
            },
            legend: {
                text: {
                fill: colors.grey[100],
                },
            },
            ticks: {
                line: {
                stroke: colors.grey[100],
                strokeWidth: 1,
                },
                text: {
                fill: colors.grey[100],
                },
            },
            },
            legends: {
            text: {
                fill: colors.grey[100],
            },
            },
        }}
        features={geoFeatures.features}  //必须要设置features数组
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        // colors="nivo"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={ isDashboard ? 40: 150} //地图部分放大比例
        projectionTranslation={ isDashboard ? [0.5, 0.6] : [0.5, 0.5] } //地图显示部分左右、上下平移
        projectionRotation={[ 0, 0, 0 ]}
        // enableGraticule={true} //隐藏背景网格/交叉线
        // graticuleLineColor="#dddddd"
        borderWidth={1.5}
        borderColor="#fff" //更改图形轮廓颜色
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            },
            {
                id: 'gradient',
                type: 'linearGradient',
                colors: [
                    {
                        offset: 0,
                        color: '#000'
                    },
                    {
                        offset: 100,
                        color: 'inherit'
                    }
                ]
            }
        ]}
        // fill={[
        //     {
        //         match: {
        //             id: 'CAN'
        //         },
        //         id: 'dots'
        //     },
        //     {
        //         match: {
        //             id: 'CHN'
        //         },
        //         id: 'lines'
        //     },
        //     {
        //         match: {
        //             id: 'ATA'
        //         },
        //         id: 'gradient'
        //     }
        // ]}
        legends={
            isDashboard ? 
            undefined: 
            [
                {
                    anchor: 'bottom-left',
                    direction: 'column',
                    justify: true,
                    translateX: 20,
                    translateY: -100,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: 'left-to-right',
                    itemTextColor:  colors.grey[100], //系列文字颜色改变
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#fff', //changed，鼠标移上变色
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
/>
  )
}

export default GeographyChart