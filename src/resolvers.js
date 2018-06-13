const products = [
  {
    _id: "12",
    name: "GraphQL course",
    qty: 1
  },
  {
    _id: "13",
    name: "Node course",
    qty: 1
  }
];

export const resolvers = {
  Query: {
    hello(root, args, context, info) {
      //console.log(info); // provides information about the query
      console.log(context);
      return `Welcome to GraphQL. You sent ${args.msg}`;
    },
    allProducts(root, args, context, info) {
      return products;
    }
  },
  Mutation: {
    createProduct(_, args) {
      let { input } = args;
      input._id = "123";
      products.push(input);
      return input;
    }
  }
};
