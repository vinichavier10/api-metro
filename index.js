const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', async(req, res) => {
  const data = await fetch('http://apps.cptm.sp.gov.br:8080/AppMobileService/api/LinhasMetropolitanas')
  .then(response => { return response.json() })

  res.json(data);
});

app.listen(port, () => {
  console.log(`Server on http://localhost:${port}`);
});
