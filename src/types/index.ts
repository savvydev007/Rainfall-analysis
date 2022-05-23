export interface SelectOptionProps {
    value: string;
    label: string;
};

export type ChartData = {
    name: string;
    data?: number[];
}[];

export type ISetSettingPayload = {
    site?: string;
    channel?: string;
    curve?: string;
    startDate?: string;
    startTime?: string;
    endDate?: string;
    endTime?: string;
};
