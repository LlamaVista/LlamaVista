import { atom, selector } from 'recoil';

export enum Grammar {
  'Seaborn' = 'SEABORN',
  'Altair' = 'ALTAIR',
  'MatPlotlib' = 'MATPLOTLIB',
  'GGPlot' = 'GGPLOT',
}

export enum TokenKey {
  'accessToken' = 'access_token',
  'refreshToken' = 'refresh_token',
}

export interface PostFileFormDataBody {
  [key: string]: any;
}

export interface ISettings {
  grammar: Grammar;
  max_tokens: string;
  temperature: string;
  number_messages: string;
  presence_penalty: string;
  frequency_penalty: string;
  user_message?: string;
  file: any;
}

interface IgenerateSettingsMinMaxValue {
  maxToken: {
    min: number;
    max: number;
  };
  temperature: {
    min: number;
    max: number;
  };
  numberMessages: {
    min: number;
    max: number;
  };
  presencePenalty: {
    min: number;
    max: number;
  };
  frequencyPenalty: {
    min: number;
    max: number;
  };
}

interface ImageContent {
  image_file: {
    file_id: string;
  };
  type: string;
}

interface TextContent {
  text: {
    annotations: any;
    value: string;
  };
  type: string;
}

export interface IResponseData {
  data: IVisualizationData[];
}

export interface ITokenResponse {
  access_token: string;
  expires_in: number;
  id_token: string;
  refresh_token: string;
  scope: string;
  token_type: string;
}

export interface IVisualizationData {
  id: string;
  assistant_id: string;
  content: any;
  created_at: number;
  file_ids: any;
  metadata: any;
  object: string;
  role: string;
  run_id: string;
  thread_id: string;
}

export interface ILocation {
  data: IVisualizationData[];
}

export interface IDemoLocation {
  email: string;
  given_name: string;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
}

export interface IUserInfo {
  email: string;
  given_name: string;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
}

export const grammarSettings = atom({
  key: 'grammerList',
  default: [
    Grammar.Seaborn,
    Grammar.Altair,
    Grammar.MatPlotlib,
    Grammar.GGPlot,
  ],
});

export const fileUpLoadSettings = atom<ISettings>({
  key: 'fileUpLoadSettings',
  default: {
    grammar: Grammar.Seaborn,
    max_tokens: '6336',
    temperature: '0',
    number_messages: '1',
    presence_penalty: '-2',
    frequency_penalty: '-2',
    user_message: '',
    file: null,
  },
  dangerouslyAllowMutability: true,
});

export const generateSettingsMinMaxValue = atom<IgenerateSettingsMinMaxValue>({
  key: 'generateSettingsMinMaxValue',
  default: {
    maxToken: {
      min: 128,
      max: 8192,
    },
    temperature: {
      min: 0,
      max: 1,
    },
    numberMessages: {
      min: -2,
      max: 10,
    },
    presencePenalty: {
      min: -2,
      max: 2,
    },
    frequencyPenalty: {
      min: -2,
      max: 2,
    },
  },
});

export const resultDatas = atom<IVisualizationData[]>({
  key: 'resultData',
  default: [],
});

export const isDataExist = atom({
  key: 'isExist',
  default: false,
});

export const visualizationDatas = selector<IVisualizationData[]>({
  key: 'visualizationDatas',
  get: ({ get }) => {
    const resultData = get(resultDatas);
    const visualData = resultData.filter(
      (data: IVisualizationData) => data.content[0].type === 'image_file'
    );

    return visualData;
  },
});

export const fileId = atom<string[]>({
  key: 'firstId',
  default: [],
});

export const tokenInfo = atom<ITokenResponse>({
  key: 'tokenData',
});

export const userInfo = atom<IUserInfo | null>({
  key: 'userData',
  default: null,
});

export const darkMode = atom({
  key: 'dark',
  default: false,
});

export interface Iintroduce {
  name: string;
  roll: string;
  say: string;
  url: string;
}

export const introduce = atom<Iintroduce[]>({
  key: 'introduce',
  default: [
    {
      name: 'Seo Seoung Jun',
      roll: 'Front-end',
      say: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
      url: 'seoungjun.png',
    },
    {
      name: 'Lee Sa Bine',
      roll: 'AI',
      say: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
      url: 'sabin.png',
    },
    {
      name: 'Choi Seung Hoon',
      roll: 'Back-end',
      say: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
      url: 'sunghoon.png',
    },
  ],
});
