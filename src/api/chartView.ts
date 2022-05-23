// import { privateAPI } from "shared/api";
import { IChartViewData } from "adapters/types";
import ChartViewAdapter from "../adapters/chartView";

const chartViewAdapter = new ChartViewAdapter();
const URL = "";

export const mockupData: IChartViewData = [
    {
        name: "2 Year Event",
        data: [90, 90, 85, 70, 50, 40, 35, 25, 20]
    },
    {
        name: "5 Year Event",
        data: [95, 85, 75, 65, 55, 35, 25, 20, 18]
    },
    {
        name: "10 Year Event",
        data: [90, 80, 70, 60, 50, 30, 20, 18, 15]
    },
    {
        name: "25 Year Event",
        data: [85, 75, 65, 55, 45, 35, 15, 12, 7]
    },
    {
        name: "50 Year Event",
        data: [80, 70, 60, 50, 40, 20, 17, 12, 5]
    },
    {
        name: "100 Year Event",
        data: [75, 65, 55, 50, 18, 12, 9, 5, 1]
    }
]

const chartView = async (payload: any) => {
  try {
    // const { data } = await privateAPI(URL, {});
    return chartViewAdapter.parseResponse(mockupData);
  } catch (e) {
    console.log(e);
  }
};

export default chartView;
