import express from 'express';
import routes from './routes';
import cors from 'cors';

const port = 3333;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(port);

console.log(`Server running on the port ${port}`);