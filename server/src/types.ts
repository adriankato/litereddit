import { Request, Response } from "express";
import { Redis } from "ioredis";
import { Session, SessionData } from "express-session";
import { createUpdootLoader } from "./utils/createUpdootLoader";
import { createUserLoader } from "./utils/createUserLoader";

export type MyContext = {
  req: Request & { session: Session & Partial<SessionData> & { userId: number }; };
  redis: Redis;
  res: Response;
  userLoader: ReturnType<typeof createUserLoader>;
  updootLoader: ReturnType<typeof createUpdootLoader>;
};