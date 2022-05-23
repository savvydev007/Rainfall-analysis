import { ChartViewContext } from "context/ChartViewProvider/ChartViewProvider";
import useContextOrError from "./useContextOrError";

const useChartViewContext = () => {
    return useContextOrError(ChartViewContext);
};

export default useChartViewContext;