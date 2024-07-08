import express from 'express';
import { exampleHandler } from './exampleHandler';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/example', async (_req, res) => {
  const data = await exampleHandler();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
