export class Client {
  constructor() {
    // Constructor
  }

  mockFetch(url: string): Promise<Response> {
    return Promise.resolve({
      ok: true,
      status: 200,
      statusText: 'OK',
      json: async () => {
        url;
      },
    } as Response);
  }

  path(url: string): Promise<Response> {
    const response = this.mockFetch(url);
    return response;
  }
}
