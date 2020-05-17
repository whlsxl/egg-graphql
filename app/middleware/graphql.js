'use strict';

module.exports = (_, app) => {
  return async (ctx, next) => {
    const { router } = app.config.graphql;
    if (app.graphqlServer) {
      const middlewares = app.graphqlServer.getMiddleware({ path: router });
      await middlewares(ctx, next);
    } else {
      await next();
    }
  };
};
