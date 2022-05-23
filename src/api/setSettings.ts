// import { privateAPI } from "shared/api";
import { ISetSettingPayload } from "types";
import SetSettingsAdapter from "../adapters/setSettings";

const URL = "";
const adapter = new SetSettingsAdapter();

const setSettings = async (payload: ISetSettingPayload) => {
  try {
    // const { data } = await privateAPI.post(
    //   URL,
    //   adapter.parsePayload(payload)
    // );
    // return adapter.parseResponse(data);
    return true;
  } catch (e: any) {
    console.log(e);
  }
};

export default setSettings;
