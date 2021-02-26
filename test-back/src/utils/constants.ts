export const helloBodyRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
   <soapenv:Header/>
   <soapenv:Body>
      <SayHello xmlns="http://learnwebservices.com/services/hello">
         <HelloRequest>
            <Name>Tony Stark</Name>
         </HelloRequest>
      </SayHello>
   </soapenv:Body>
</soapenv:Envelope>`;

export const converterBodyRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
   <soapenv:Header/>
   <soapenv:Body>
      <FahrenheitToCelsiusRequest xmlns="http://learnwebservices.com/services/tempconverter">
            <TemperatureInFahrenheit>100.1</TemperatureInFahrenheit>
      </FahrenheitToCelsiusRequest>
   </soapenv:Body>
</soapenv:Envelope>`;
