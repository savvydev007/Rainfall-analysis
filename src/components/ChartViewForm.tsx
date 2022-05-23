import useChartViewContext from "hooks/useChartViewContext";
import { Table } from "react-bootstrap";
import { ChartData } from "types";
const ReactHighcharts = require("react-highcharts");

const ChartViewForm = () => {
    const { data } = useChartViewContext();

    const config = {
        title: {
            text: "Rainfall Aalysis Chart"
        },

        subtitle: {
            text: ""
        },

        credits: {
            text: "Source: thesolarfoundation.com"
        },

        yAxis: {
            title: {
                text: "Rainfall Intensity (mm / hr)"
            }
        },

        xAxis: {
            title: {
                text: "Duration"
            },
            categories: ['5 min', '10 min', '15 min', '30 min', '1 hr', '2 hr', '6 hr', '12 hr', '24 hr'],
        },

        series: data,

        exporting: {
            showTable: true
        }
    };

    const DrawTable = (cdata: ChartData) => {
        return (
            <Table>
                <thead>
                    <tr>
                        <th></th>
                        <th>5min</th>
                        <th>10min</th>
                        <th>15min</th>
                        <th>30min</th>
                        <th>1hr</th>
                        <th>2hr</th>
                        <th>6hr</th>
                        <th>12hr</th>
                        <th>24hr</th>
                    </tr>
                </thead>
                <tbody>
                    {cdata.map((datas, idx) => {
                        const { name, data } = datas;
                        return (
                            <tr key={idx}>
                                <th>{name}</th>
                                {
                                    data?.map((item, idx) => <td key={idx}>{item}</td>)
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    };

    return (
        <div
            className="mt-3 mx-auto"
            style={{
                width: "90%",
                height: "auto",
            }}>
            <ReactHighcharts config={config} />
            {DrawTable(data)}
        </div>
    )
};

export default ChartViewForm;
