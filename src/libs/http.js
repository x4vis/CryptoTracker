export const Http = {
  URL: 'https://api.coinlore.net/api/tickers/',

  get: async(url) => {
    try {
      let req = await fetch(url);
      let json = await req.json();
      return json;
    } catch (error) {
      console.log('http get error :>> ', error);
      throw Error(error);
    }
  },

  post: async(url, body) => {
    try {
      let req = fetch(url, {
        method: 'POST',
        body,
      });

      let json = await req.json();
      return json;
    } catch (error) {
      console.log('http post error :>> ', error);
      throw Error(error);
    }
  },

  put: async(url, body) => {
    try {
      let req = await fetch(url, {
        method: 'PUT',
        body,
      });

      let json = req.json();
      return json;
    } catch (error) {
      console.log('http put error :>> ', error);
      throw Error(error);
    }
  },

  remove: async(url) => {
    try {
      let req = await fetch(url, {
        method: 'DELETE'
      })

      let json = await req.json();
      return json;
    } catch (error) {
      console.log('http delete error :>> ', error);
      throw Error(error);
    }
  }
}