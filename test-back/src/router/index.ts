import express from 'express';
import { soapRequest } from '../services/soap';
import { converterBodyRequest, helloBodyRequest } from '../utils/constants';

const router = express.Router()

router.get('/hello', async (req, res) => {
  try {
    const soapResponse = await soapRequest('hello', helloBodyRequest);
    console.log(soapResponse);
    res.send(soapResponse);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
})

router.get('/tempconverter', async (req, res) => {
  try {
    const response = await soapRequest('tempconverter', converterBodyRequest);
    console.log(response);
    res.send(response);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
})

export default router;
