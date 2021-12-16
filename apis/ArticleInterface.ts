import { AxiosResponse, AxiosError } from 'axios';
export const isAxiosSuccessResponse = (
  testObj: any
): testObj is AxiosResponse => {
  if ('data' in testObj) if ('status' in testObj) return true;
  return false;
};

export const isAxiosErrorResponse = (testObj: any): testObj is AxiosError => {
  if ('isAxiosError' in testObj) return true;
  return false;
};

export interface Article{
  HashNumber : number;
  title : string;
  imageUrl : string;
  article : string;
  dateTimeCreated : Date;
  author : string;
  visitor : number;
}

export interface ArrayArticle {
  data : Article[]
}