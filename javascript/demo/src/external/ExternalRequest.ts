import Provider, {
  AnyMap,
  Client,
  ReponseData,
  ResponseBody,
  RequestParams,
  Response,
} from '@ebay/service-client-ebay';
/*
// Define the request parameters
export interface RequestParams {
  url: string;
  queryParams?: { [key: string]: string };
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'; // You can extend with other HTTP methods
  headers?: { [key: string]: string };
  body?: any;
}

// Define the generic response wrapper
export interface Response<T> {
  data: T;
  status: number;
  statusText: string;
}

const buildQueryString = (queryParams: { [key: string]: string } = {}): string => {
  const queryString = Object.keys(queryParams)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
    .join('&');
  return queryString ? `?${queryString}` : '';
};

// The getData function
export const getData = async <ResponseBody>(
  request: RequestParams
): Promise<Response<ResponseBody>> => {
  const client = Provider.context().build();
  return client.mockFetch(request.url);
};

*/

export const getData = async <ResponseBody>({
  req,
  clientName,
  path,
  params,
  extraHeaders = {},
  setHeader = true,
}: RequestParams): Promise<Response<ResponseBody>> => {
  const client = Provider.context(req).getClient(clientName).get(params);
  return client.path(path).endAsAsync();
};
