import { ISetSettingPayload } from "types";

type TAPIResponse = {
  /* type for API response returned from server */
};

type TAPIPayload = {
  site?: string;
  chnnel?: string;
  curve?: string;
  startDate?: string;
  startTime?: string;
  endDate?: string;
  endTime?: string;
};

class SetSettingsAdapter {
  parsePayload = (payload: ISetSettingPayload): TAPIPayload => {
    const { site, channel, curve, startDate,startTime, endDate, endTime } = payload;
    /* Any data transformation related to form values goes here, return the transformed data */
    return {
        site: site,
        chnnel: channel,
        curve: curve,
        startDate: startDate,
        startTime: startTime,
        endDate: endDate,
        endTime: endTime,
    };
  };

  parseResponse = (data: TAPIResponse) => {
    /* Data transform for the incoming API Response. Return that data.*/

    return data;
  };
}

export default SetSettingsAdapter;
