import * as xml2js from 'xml2js';

export const getXMLResponseValue = async (type: string, data: object) => {
  const parser = new xml2js.Parser({ tagNameProcessors: [xml2js.processors.stripPrefix] });
  try {
    const parsedData = await parser.parseStringPromise(data);

    switch (type) {
      case 'hello': {
        return parsedData['Envelope']['Body'][0]['SayHelloResponse'][0]['HelloResponse'][0]['Message'][0];
      }
      case 'tempconverter': {
        return parsedData['Envelope']['Body'][0]['FahrenheitToCelsiusResponse'][0]['TemperatureInCelsius'][0];
      }
      default: {
        return parsedData;
      }
    }
  } catch (error) {
    throw error;
  }
};
