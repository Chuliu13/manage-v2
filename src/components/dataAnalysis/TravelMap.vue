<template>
    <div class="travel-view">
        <div id="main"></div>
    </div>
</template>

<script>
import geoJson from '@/assets/data.json'
import { travel } from '@/api/api.js'
export default {

    data() {
        return {};
    },

    created(){
        travel().then(res => {
            if(res.data.status === 200) {
                let { points, linesData } = res.data.data
                this.draw(points, linesData)
            }
        })
    },

    methods: {
        draw(points, linesData) {
                    let myChart =this.$echarts.init(document.getElementById('main'))
        this.$echarts.registerMap('china', geoJson) // 注册可用的地图,必须包括geo组件或者map图标类型的时候才可以使用
        // console.log(geoJson)
        let option = {
            backgroundColor: 'rgb(121, 145, 209)',
            // 地理坐标系
            geo: {
                map: 'china',   //  = =小写是认真的吗
                aspectScale: 0.75, // scale地图长宽比
                zoom: 1.1,
                itemStyle: {
                    // 状态
                    normal: {
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            // 镜像渐变
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#09132c' // 0%处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#274d68' // 100%处的颜色
                                },
                            ],
                            globalCoord: true
                        },
                        shadowColor: 'rgb(58, 115, 192)',
                        // 偏移值
                        shadowOffsetX: 10,
                        shadowOffsetY: 11
                    }
                },
                regions: [{
                    name: '南海诸岛',
                    itemStyle: {
                        opacity: 0,
                    }
                    
                }]
            },
            series: [
                { // 配置地图相关参数,绘制地图,这个对象是关于地图图标的相关设置
                type: 'map',
                label: {
                    // 默认显示文字标签
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#1DE9B6'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: 'black'
                        }
                    }
                },
                zoom: 1.1,
                map: 'china',
                itemStyle: {
                    normal: {
                        backgroundColor: 'rgb(147, 235, 248)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'rgb(31, 54, 150)' // 0%处的颜色
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(89, 128, 142)' // 100%处的颜色
                                },
                            ],
                            globalCoord: true
                        }
                    },
                     // 高亮 更改鼠标放上去颜色显示?
                        emphasis: {
                            areaColor: 'rgb(46, 229, 206)',
                            borderWidth: 0.1
                        }
                },
                },
                // 关于地图中散点图的配置
                {
                    type: 'effectScatter', // 散点图
                    coordinateSystem: 'geo',
                    // 什么时候显示
                    shadowEffectOn: 'render',
                    symbolSize: 10,   //散点大小
                    zlevel: '1',
                    data: points,
                    rippleEffect: {  // 涟漪特效相关配置
                        period: 15,
                        scale: 4,
                        brushType:'fill'
                    }
                },
                // 关于地图中线路动画效果设置
                {
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 4,
                        symbol: 'arrow',  // 箭头样式
                        symbolSize: 7,
                        trailLength: 0.4    // 拖尾效果
                    },
                    lineStyle: {
                        normal: {
                            color: '#1DE9B6',
                            width: 1,
                            opacity: 0.3,
                            curveness: 0.3 // 弯曲程度
                        }
                    },
                    data: linesData,
                }
            ]
        }
        myChart.setOption(option)
        }
    },
};
</script>

<style lang="scss">
.travel-view{
    width: 100%;
    #main{
        width: 100%;
        height: 600px;
    }
}
</style>