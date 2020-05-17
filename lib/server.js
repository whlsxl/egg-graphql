'use strict';

const ApolloServer = require('apollo-server-koa');

module.exports = app => {
  const { apolloServerOptions } = app.config.graphql;
  const serverOptions = Object.assign({}, {
    schema: app.schema,
    context: ({ ctx }) => {
      return ctx;
    },
  }, apolloServerOptions);
  const server = new ApolloServer(serverOptions);
  app.graphqlServer = server;
};
