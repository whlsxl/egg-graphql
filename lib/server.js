'use strict';

const { ApolloServer } = require('apollo-server-koa');
const { applyMiddleware } = require('graphql-middleware');

module.exports = app => {
  const { apolloServerOptions, playground } = app.config.graphql;
  let middlewares = app.config.graphql.middlewares;
  if (!middlewares) {
    middlewares = [];
  }
  const serverOptions = Object.assign(
    {},
    {
      schema: applyMiddleware(app.schema, ...middlewares),
      context: ({ ctx }) => {
        return ctx;
      },
      playground,
    },
    apolloServerOptions
  );
  const server = new ApolloServer(serverOptions);
  app.graphqlServer = server;
};
