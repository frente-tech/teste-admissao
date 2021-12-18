require('dotenv').config();
const express = require('express');
const path = require('path');

const { User } = require('./models');

const PORT = process.env.PORT || 3000;

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
}

app.get('/', [
  async (req, res, next) => {
    try {
      console.log(req.body);
      const users = await User.findAll();
      if (!users.length) throw new Error('There aren\'t any user');
      return res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  },
  async (error, _req, res, _next) => {
    console.error('Something Broken at GET /', error);
    return res.status(500).json({ message: 'Oops! Something Broken' });
  },
]);

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
