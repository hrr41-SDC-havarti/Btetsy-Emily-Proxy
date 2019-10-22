const express = require('express');
const PORT = 4321;
app = express();

app.use(express.static('./public'));

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}:`)
});
