import { IChartViewData } from "adapters/types";
import useChartView from "hooks/useChartView";
import { createContext, useEffect, useState } from "react";
import { TChartViewContext } from "./types";

export const ChartViewContext = createContext<TChartViewContext | null>(null);

const ChartViewProvider = (props: React.PropsWithChildren<{}>) => {
    const [data, _setData] = useState<IChartViewData>([]);

    const chartViewApi = useChartView();
    // const { mutate } = chartViewApi;

    const setData = (payload: IChartViewData) => {
        const _data = Array.isArray(payload) ? payload : [];
        _setData(_data);
    };

    useEffect(() => {
        /* initial fetch */
        // const SEARCH_DELAY = 300;

        // const query = setTimeout(
        //     () =>
        //         mutate(
        //             {},
        //             {
        //                 onSuccess: (response) => {
        //                     if (response) {
        //                         setData(response);
        //                     }
        //                 },
        //             }
        //         ),
        //     SEARCH_DELAY
        // );

        // return () => clearTimeout(query);
        setData(chartViewApi);
    }, []);

    return (
        <ChartViewContext.Provider
            value={{
                data,
                setData,
            }}
        >
            {props.children}
        </ChartViewContext.Provider>
    );
}

export default ChartViewProvider;