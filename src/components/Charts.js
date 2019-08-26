
import React, { Component } from 'react';

import FusionCharts from 'fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';
 import World from 'fusioncharts/maps/fusioncharts.world';
 import FusionMaps from 'fusioncharts/fusioncharts.maps';
import Widgets from 'fusioncharts/fusioncharts.widgets';
charts(FusionCharts);
ReactFusioncharts.fcRoot(FusionCharts, FusionTheme, FusionMaps, World, Widgets);
export default class Charts extends Component {
    render() {
        const dataSource1 = {
            // Chart Configuration 
            "chart": {
                "caption": "Countries With Most Oil Reserves [2017-18]",
                "subCaption": "In MMbbl = One Million barrels",
                "xAxisName": "Country",
                "yAxisName": "Reserves (MMbbl)",
                "numberSuffix": "K",
                "theme": "fusion",
            },
            // Chart Data
            "data": [{
                "label": "Venezuela",
                "value": "290"
            }, {
                "label": "Saudi",
                "value": "260"
            }, {
                "label": "Canada",
                "value": "180"
            }, {
                "label": "Iran",
                "value": "140"
            }, {
                "label": "Russia",
                "value": "115"
            }, {
                "label": "UAE",
                "value": "100"
            }, {
                "label": "US",
                "value": "30"
            }, {
                "label": "China",
                "value": "30"
            }]

        };
        const dataSource2 = {
            "chart": {
                "caption": "Reach of Social Media Platforms amoung youth",
                "yaxisname": "% of youth on this platform",
                "subcaption": "2012-2016",
                "showhovereffect": "1",
                "numbersuffix": "%",
                "drawcrossline": "1",
                "plottooltext": "<b>$dataValue</b> of youth were on $seriesName",
                "theme": "fusion"
            },
            "categories": [
                {
                    "category": [
                        {
                            "label": "2012"
                        },
                        {
                            "label": "2013"
                        },
                        {
                            "label": "2014"
                        },
                        {
                            "label": "2015"
                        },
                        {
                            "label": "2016"
                        }
                    ]
                }
            ],
            "dataset": [
                {
                    "seriesname": "Facebook",
                    "data": [
                        {
                            "value": "62"
                        },
                        {
                            "value": "64"
                        },
                        {
                            "value": "64"
                        },
                        {
                            "value": "66"
                        },
                        {
                            "value": "78"
                        }
                    ]
                },
                {
                    "seriesname": "Instagram",
                    "data": [
                        {
                            "value": "16"
                        },
                        {
                            "value": "28"
                        },
                        {
                            "value": "34"
                        },
                        {
                            "value": "42"
                        },
                        {
                            "value": "54"
                        }
                    ]
                },
                {
                    "seriesname": "LinkedIn",
                    "data": [
                        {
                            "value": "20"
                        },
                        {
                            "value": "22"
                        },
                        {
                            "value": "27"
                        },
                        {
                            "value": "22"
                        },
                        {
                            "value": "29"
                        }
                    ]
                },
                {
                    "seriesname": "Twitter",
                    "data": [
                        {
                            "value": "18"
                        },
                        {
                            "value": "19"
                        },
                        {
                            "value": "21"
                        },
                        {
                            "value": "21"
                        },
                        {
                            "value": "24"
                        }
                    ]
                }
            ]
        };
        const dataSource = {
            "chart": {
                "caption": "Co-working Locations of WeWork in Different Countries",
                "nullentityfillcolor": "#007bff",
                "showmarkerlabels": "0",
                "showentitytooltip": "0",
                "showentityhovereffect": "0",
                "theme": "fusion"
            },
            "markers": {
                "items": [
                    {
                        "id": "lon",
                        "shapeid": "we-anchor",
                        "x": "190.23",
                        "y": "350.9",
                        "label": "Chile",
                        "value": "1",
                        "tooltext": "In Chile, WeWork has <b>$value</b> co-working location"
                    },
                    {
                        "id": "atl",
                        "shapeid": "we-anchor",
                        "x": "130.14",
                        "y": "140.9",
                        "label": "USA",
                        "value": "25",
                        "tooltext": "In USA, WeWork has <b>$value</b> co-working locations</b>",
                        "labelpos": "left"
                    },
                    {
                        "id": "ind",
                        "shapeid": "we-anchor",
                        "x": "500.14",
                        "y": "203.9",
                        "label": "India",
                        "value": "3",
                        "tooltext": "In India, WeWork has <b>$value</b> co-working locations",
                        "labelpos": "bottom"
                    },
                    {
                        "id": "Aus",
                        "shapeid": "we-anchor",
                        "x": "628.14",
                        "y": "305.9",
                        "label": "Autralia",
                        "value": "3",
                        "tooltext": "In Australia, WeWork has <b>$value</b> co-working locations"
                    },
                    {
                        "id": "china",
                        "shapeid": "we-anchor",
                        "x": "573.14",
                        "y": "161.9",
                        "label": "China",
                        "value": "6",
                        "tooltext": "In China, WeWork has <b>$value</b> co-working locations"
                    },
                    {
                        "id": "Thi",
                        "shapeid": "we-anchor",
                        "x": "553.14",
                        "y": "211.9",
                        "label": "Thailand",
                        "value": "1",
                        "tooltext": "In Thailand, WeWork has <b>$value</b> co-working location"
                    },
                    {
                        "id": "Sing",
                        "shapeid": "we-anchor",
                        "x": "560.14",
                        "y": "231.9",
                        "label": "Singapore",
                        "value": "1",
                        "tooltext": "In Singapore, WeWork has <b>$value</b> co-working location"
                    },
                    {
                        "id": "Indo",
                        "shapeid": "we-anchor",
                        "x": "570.14",
                        "y": "250.9",
                        "label": "Indonesia",
                        "value": "1",
                        "tooltext": "In Indonesia, WeWork has <b>$value</b> co-working location"
                    },
                    {
                        "id": "sKorea",
                        "shapeid": "we-anchor",
                        "x": "603.14",
                        "y": "155.9",
                        "label": "South Korea",
                        "value": "1",
                        "tooltext": "In South Korea, WeWork has <b>$value</b> co-working location"
                    },
                    {
                        "id": "jap",
                        "shapeid": "we-anchor",
                        "x": "633.14",
                        "y": "145.9",
                        "label": "Japan",
                        "value": "1",
                        "tooltext": "In Japan, WeWork has <b>$value</b> co-working location"
                    },
                    {
                        "id": "isrl",
                        "shapeid": "we-anchor",
                        "x": "445.14",
                        "y": "165.9",
                        "label": "Isreal",
                        "value": "5",
                        "tooltext": "In Israel, WeWork has <b>$value</b> co-working locations"
                    },
                    {
                        "id": "ire",
                        "shapeid": "we-anchor",
                        "x": "325.14",
                        "y": "105.9",
                        "label": "Ireland",
                        "value": "1",
                        "tooltext": "In Ireland, WeWork has <b>$value</b> co-working location",
                        "labelpos": "left"
                    },
                    {
                        "id": "pol",
                        "shapeid": "we-anchor",
                        "x": "365.14",
                        "y": "118.9",
                        "label": "Poland",
                        "value": "1",
                        "tooltext": "In Poland, WeWork has <b>$value</b> co-working location"
                    },
                    {
                        "id": "spain",
                        "shapeid": "we-anchor",
                        "x": "330.14",
                        "y": "145.9",
                        "label": "Spain",
                        "value": "2",
                        "tooltext": "In Spain, WeWork has <b>$value</b> co-working locations"
                    },
                    {
                        "id": "Mexico",
                        "shapeid": "we-anchor",
                        "x": "130.14",
                        "y": "190.9",
                        "label": "Mexico",
                        "value": "1",
                        "tooltext": "In Mexico, WeWork has <b>$value</b> co-working location"
                    },
                    {
                        "id": "Brazil",
                        "shapeid": "we-anchor",
                        "x": "250.14",
                        "y": "260.9",
                        "label": "Brazil",
                        "value": "3",
                        "tooltext": "In Brazil, WeWork has <b>$value</b> co-working locations"
                    }
                ],
                "shapes": [
                    {
                        "id": "we-anchor",
                        "type": "image",
                        "url": "https://cdn3.iconfinder.com/data/icons/iconic-1/32/map_pin_fill-512.png",
                        "xscale": "4",
                        "yscale": "4"
                    }
                ]
            }
        };
        const chartConfigs = {
            type: 'angulargauge', // The gauge type
            width: '300', // Width of the gauge
            height: '200', // Height of the gauge
            dataFormat: 'json', // Data type
            dataSource: {
                // Chart Configuration
                "chart": {
                
                    "lowerLimit": "0",
                    "upperLimit": "100",
                    "showValue": "0",
                    "FontSize": "10",
                    "numberSuffix": "",
                    "theme": "fusion",
                    "showToolTip": "0"
                },
                // Chart Data
                "colorRange": {
                    "color": [{
                        "minValue": "0",
                        "maxValue": "50",
                        "code": "#F2726F"
                    }, {
                        "minValue": "50",
                        "maxValue": "75",
                        "code": "#FFC533"
                    }, {
                        "minValue": "75",
                        "maxValue": "100",
                        "code": "#62B58F"
                    }]
                },
                "dials": {
                    "dial": [{
                        "value": "81"
                    }]
                }
            }
        };
        return (
            <div>
             
                <div className="container chenna">
                   
                   
                    <div className="row">
                        <div className="col-md-6 mt-5">
                            <div className="card shadow">
                                <div className="card-body">
                                    <ReactFusioncharts
                                        type="msline"
                                        type='column2d'
                                        width="100%"
                                        dataSource={dataSource1}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-5">
                            <div className="card shadow">
                                <div className="card-body">
                                    <ReactFusioncharts
                                        type="msline"
                                        width="100%"
                                        dataSource={dataSource2} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-5 mb-5">
                            <div className="card shadow">
                                <div className="card-body">
                                    <ReactFusioncharts
                                        type="world"
                                        width='100%'

                                        dataFormat="JSON"
                                        dataSource={dataSource} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ReactFusioncharts
                        {...chartConfigs} />
                </div>
              
            </div>
        );
    }
}

