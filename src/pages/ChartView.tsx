import ChartViewForm from "components/ChartViewForm";
import ChartViewProvider from "context/ChartViewProvider";

const ChartView = () => {

    return (
        <ChartViewProvider>
            <ChartViewForm />
        </ChartViewProvider>
    )
};

export default ChartView;
