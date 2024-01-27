import { Router, Request, Response } from 'express';
import { rateLimiter, type RateLimiterRule } from '../middlewares/rate-limiter';

const router = Router();

const USER_RATE_LIMITER_RULE: RateLimiterRule = {
  endpoint: 'users',
  rate_limit: {
    time: 60,
    limit: 3,
  },
};

router.get(
  '/users',
  rateLimiter(USER_RATE_LIMITER_RULE),
  (_req: Request, res: Response) => {
    res.send({ message: 'ok' });
  }
);

export default router;
