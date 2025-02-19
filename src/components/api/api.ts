import { create } from "apisauce";

export const api = create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

export const suggestionApi = create({
  baseURL: process.env.EXPO_PUBLIC_SUGGESTION_API_URL,
  headers: {
    'Cookie': 'dtCookie=v_4_srv_36_sn_69057817089FE1468F0380FBAED2D8FC_perc_100000_ol_0_mul_1_app-3Aea7c4b59f27d43eb_0_rcs-3Acss_0',
    'Accept': 'application/json, text/plain, */*',
    'Application-Type': 'APP_PUBLIC_ANDROID',
    'User-Agent': 'Maiia-Mobile/2.25.1',
    'Maiia-Device-Id': '3ee177e7a3e568a6',
    'Maiia-Device-Model': 'sdk_gphone64_x86_64',
    'Maiia-Os-Type': 'android',
    'Maiia-Os-Model': '35',
    'Maiia-Bundle-Id': 'com.cegedim.maiia.patient'
  }
});