const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
mongoose.connect('mongodb://localhost:27017/myapp').then(() => {
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
});
