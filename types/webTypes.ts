export interface ICard {
  _id: string;
  thumbnail: string;
  description: string;
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
  content: { _id: string; img: string }[];
}

export interface IAuthor {
  _id: string;
  fullName: string;
  thumbnail: string;
  created_at: Date;
  dateOfBirth: Date;
  nationality: string;
  contents: unknown[];
}

export interface ContentFormValues {
  title: string;
  type: string;
  description: string;
  thumbnail: File | null;
  thumbnailPreview: string;
  language: string;
  authors: string[];
  categories: string[];
}

export enum ModalTypes {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
}
export interface ChapterModelProps {
  id: number;
  modelValue: boolean;
  type: ModalTypes;
  description: string;
  thumbnail: string;
  title: string;
  number: number;
}
