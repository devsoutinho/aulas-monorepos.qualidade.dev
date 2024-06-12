
export const httpClient = {
  get(url: string) {
    return fetch(url, {
      headers: {
        "accept": "application/json"
      },
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  }
}