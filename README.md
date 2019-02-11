# mercury-wrapper

mercury-wrapper utilizes [Mercury Parser](https://mercury.postlight.com/web-parser/) to extract the full content for feeds. An API key is required to use this plugin, which is available for free [here](https://mercury.postlight.com/web-parser/).

Also availble as a [Tiny Tiny RSS plugin](https://github.com/HenryQW/mercury_fulltext)

## Warning

**Mercury API will be shutting down** in the future, please read more [here](https://postlight.com/trackchanges/mercury-goes-open-source)

You'are advised to host your own mercury instance, thus **this repo will be deprecated** in the future. For a dockerized self-host solution, please visit my repo [mercury-parser-api](https://github.com/HenryQW/mercury-parser-api).

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
