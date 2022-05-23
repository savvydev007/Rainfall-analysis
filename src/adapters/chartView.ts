import { IChartViewData } from "./types";

type IChartViewAPIResponse = {
    name: string;
    data: number[];
}[];

class ChartViewAdapter {
  parseResponse = (apiResponse: IChartViewAPIResponse): IChartViewData => {
    const data: IChartViewData = apiResponse.map((item) => ({
      name: item.name,
      data: item.data,
    }));

    return data;
  };
}

export default ChartViewAdapter;
