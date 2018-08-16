const mercury = require("./mercury-wrapper")(process.env.API_KEY);

const res = async () => {
  await mercury.parse(
    "https://en.wikipedia.org/wiki/List_of_airports_by_IATA_code:_L"
  );
};

console.log(res.data);
