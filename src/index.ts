import express from 'express';
import { exampleORM, exampleRAW } from './exampleHandler';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/products/analysis', async (req, res) => {
  return res.json({foo: 'bar'});
});

app.get('/orm', async (_req, res) => {
  const data = await exampleORM();
  res.json(data);
});

app.get('/raw', async (_req, res) => {
  const data = await exampleRAW();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
