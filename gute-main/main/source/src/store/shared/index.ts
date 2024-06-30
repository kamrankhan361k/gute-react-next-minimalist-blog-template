export interface ResponeMeta {
  total: number;
  page: number;
  take: number;
  pageCount: number;
}

export enum RequestStatus {
  Idle,
  Loading,
  Success,
  Failed
}
export interface ResponseStatus {
  fetching?: boolean;
  error?: string;
  status?: RequestStatus;
}

export interface ResponseState<T> extends ResponseStatus {
  data: T[];
  meta?: ResponeMeta;
  loadingMore?: boolean;
}

export interface ResponseStateDetail<T> {
  fetching?: boolean;
  data?: T;
  error?: string;
}

export interface QueryParams {
  //NOTE: You should change this interface to conform your backend API, currently i'm using json server for demo purpose
  _sort?: string;
  _order?: string;
  _start?: number;
  _end?: number;
  _page?: number;
  _limit?: number;
  q?: string;
  loadingMore?: boolean;
}
