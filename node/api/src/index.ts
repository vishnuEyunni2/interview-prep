import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import Redis from 'ioredis';
import connectRedis from 'connect-redis';
import { MONG_URI, MONGO_OPTIONS, REDIS_OPTIONS, SESSION_OPTIONS, APP_PORT } from "./config";

; (async () => {
  await mongoose.connect(MONG_URI)
})();

const RedisStore = connectRedis(session);
const client = new Redis(REDIS_OPTIONS)

const app = express();
app.use(
  session({
    ...SESSION_OPTIONS,
    store: new RedisStore({ client })
  })
);
app.use(session())

app.get('/', (req, res) => res.json({ 'message': 'OK' }));

app.listen(APP_PORT, () => console.log(`https://localhost:${APP_PORT}`))