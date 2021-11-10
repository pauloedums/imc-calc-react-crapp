import "whatwg-fetch"

export default class HttpUtil {
  createRequest(method, body = "") {
    return {
      method: method,
      headers: {
        "Content-Type": "application/json; charset=UTF-8;",
      },
      body: JSON.stringify(body),
    };
  }

  get(hostname, url) {
    return fetch(`${hostname}${url}`);
  }

  post(hostname, url, obj) {
    const req = this.createRequest("POST", obj);
    return fetch(`${hostname}${url}`, req);
  }
}
