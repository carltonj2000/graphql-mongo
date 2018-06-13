export const resolvers = {
  Query: {
    hello(root, args, context, info) {
      //console.log(info); // provides information about the query
      console.log(context);
      return `Welcome to GraphQL. You sent ${args.msg}`;
    }
  }
};
