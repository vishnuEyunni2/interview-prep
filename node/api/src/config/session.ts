import { SessionOptions } from 'express-session';
import { IN_PROD } from './app';

const HALF_HOUR = 1000 * 30 * 60;

const {
  SESSION_SECRET = `please keep this secret, mate`,
  SESSION_NAME = 'sid',
  SESSION_IDLE_TIMEOUT = HALF_HOUR
} = process.env;

export const SESSION_OPTIONS: SessionOptions = {
  secret: SESSION_SECRET,
  name: SESSION_NAME,
  cookie: {
    maxAge: +SESSION_IDLE_TIMEOUT,
    secure: IN_PROD,
    sameSite: true
  },
  rolling: true,
  resave: false,
  saveUninitialized: false
}