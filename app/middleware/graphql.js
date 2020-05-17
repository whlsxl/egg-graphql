'use strict';

module.exports = (_, app) => {
  return async (ctx, next) => {
    if (app.graphqlServer) {
      const middlewares = app.graphqlServer.getMiddleware();
      await middlewares(ctx, next);
    } else {
      await next();
    }
  };
};
