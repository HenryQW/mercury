const axios = require('axios');

const postlight = 'https://mercury.postlight.com/parser?url=';

module.exports = key => ({
  async parse(url) {
    const res = await axios({
      method: 'get',
      url: `${postlight}${encodeURIComponent(url)}`,
      headers: {
        'x-api-key': key,
        'Content-Type': 'application/json',
      },
    });
    return res;
  },
});
