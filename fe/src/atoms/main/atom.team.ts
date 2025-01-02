import { atom } from 'recoil';

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
      say: '안녕하세요! 프론트 엔드 개발을 맡은 서성준입니다',
      url: 'seoungjun.png',
    },
    {
      name: 'Lee Sa Bine',
      roll: 'AI',
      say: '안녕하세요! 인공지능 개발을 맡은 이사빈니다',
      url: 'sabin.png',
    },
    {
      name: 'Choi Seung Hoon',
      roll: 'Back-end',
      say: '안녕하세요! 백엔드 개발을 맡은 최승훈입니다',
      url: 'sunghoon.png',
    },
  ],
});
