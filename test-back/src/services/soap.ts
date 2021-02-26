import { networkClient } from './networkClient';
import { getXMLResponseValue } from '../utils/xmlResponse';

export const soapRequest = async (url: string, body: string) => {
  try {
    const response = await networkClient.post(url + '?WSDL', body);
    return getXMLResponseValue(url, response.data);
  } catch (error) {
    throw error;
  }
};
