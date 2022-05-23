import ChartViewAdapter from "adapters/chartView";
import chartView, { mockupData } from "api/chartView"
import { useMutation } from "react-query";

const useChartView = () => {
    // return useMutation(chartView);
    const chartViewAdapter = new ChartViewAdapter();
    return chartViewAdapter.parseResponse(mockupData);
}

export default useChartView;