import { IChartViewData } from "adapters/types";

export type TChartViewContext = {
  data: IChartViewData;
  setData: (data: IChartViewData) => void;
};
