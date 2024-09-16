export class ClientBuilder {
  static build() {
    return new Client();
  }
}

export class Provider {
  static context() {
    return ClientBuilder;
  }
}
