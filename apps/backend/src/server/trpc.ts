import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson';
import { serverConfig } from '../configs/server.config';
import { Context } from './context';
export { AppRouter } from './router';

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
  isDev:
    serverConfig.environment === 'development' ||
    serverConfig.environment === 'local',
});

const isAuthenticated = t.middleware(({ next, ctx }) => {
  if (!ctx.user) {
    throw new TRPCError({ message: 'Unauthorized', code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      user: ctx.user,
    },
  });
});

const isAdmin = t.middleware(({ next, ctx }) => {
  if (!ctx.user || ctx.user.role !== 'admin') {
    throw new TRPCError({ message: 'Unauthorized', code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      user: ctx.user,
    },
  });
});

export const router = t.router;

export const procedure = t.procedure.use(isAuthenticated);
export const noAuthProcedure = t.procedure;
export const adminProcedure = t.procedure.use(isAdmin);
