import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const postsState = atom({
  key: "todos",
  //ダミーデータ
  default: [
    {
      id: 1,
      name:"エレン",
      title: "始祖の巨人の力を使ってテレパシー送ったけど届いた？",
      text: "私は立体機動装置の使い心地があまり良いとは思いません。開発局に改善を求めたいので、調査兵団の方は使いやすいかどうかYes or Noでお答えください。",
      createDate: "2022-2-1",
      yes:0,
      no:0
    },
    {
      id: 2,
      name:"ミカサ",
      title: "立体機動装置って使いやすい?",
      text: "私は立体機動装置の使い心地があまり良いとは思いません。開発局に改善を求めたいので、調査兵団の方は使いやすいかどうかYes or Noでお答えください。",
      createDate: "2022-2-1",
      yes:0,
      no:0
    },
    {
      id: 3,
      name:"アルミン",
      title: "超大型巨人の能力欲しい人いますか？",
      text: "ひょんなことから超大型巨人の能力を継承しましたが、癖があってまだ有用性を見出せずどれほど価値のあるものなのか分かりかねています。実際にマーレ国の皆さん、「もし超大型巨人を継承する機会がある場合に継承するか」をYes or Noで教えてください。",
      createDate: "2022-2-20",
      yes:0,
      no:0
    },
  ],
});

