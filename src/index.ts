import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import typeDefs from './type-def';

const server = new ApolloServer({ resolvers, typeDefs });

server.listen().then(({ url }) => console.log(`Server Ready at ${url}`));

// HMR
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log('Module disposed. '));
}