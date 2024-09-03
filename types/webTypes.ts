export interface ICard {
  id: string;
  img: string;
  title: string;
  bgColor: string;
  textColor: string;
  mainCategory: string;
  language: string;
}
export interface ICardDetail extends ICard {
  authors: { id: string; name: string }[];
  length: number;
  contentType: "ImageCollection" | "VideoCollection";
  categories: string[];
  description: string;
  created_at: string;
  content: { id: string; img: string }[];
}
