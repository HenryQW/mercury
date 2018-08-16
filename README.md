# mercury-wrapper

mercury-wrapper utilizes [Mercury Parser](https://mercury.postlight.com/web-parser/) to extract the full content for feeds. An API key is required to use this plugin, which is available for free [here](https://mercury.postlight.com/web-parser/).

Also availble as a [Tiny Tiny RSS plugin](https://github.com/HenryQW/mercury_fulltext)

### Installation

```
npm install mercury-wrapper
```

### Usage

```js
const mercury = require("./mercury-wrapper")(process.env.API_KEY);

const res = async () => {
  await mercury.parse(
    "https://en.wikipedia.org/wiki/List_of_airports_by_IATA_code:_L"
  );
};

console.log(res.data);
```

## Reference
------------------------
* [Mercury Parser](https://mercury.postlight.com/web-parser/).
