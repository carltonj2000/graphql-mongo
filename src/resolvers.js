import Product from "./models/product";

export const resolvers = {
  Query: {
    hello(root, args, context, info) {
      //console.log(info); // provides information about the query
      console.log(context);
      return `Welcome to GraphQL. You sent ${args.msg}`;
    },
    async allProducts(root, args, context, info) {
      return await Product.find();
    },
    async oneProduct(root, { _id }, context, info) {
      return await Product.findById(_id);
    }
  },
  Mutation: {
    async createProduct(_, args) {
      let { input } = args;
      return await Product.create(input);
    },
    async updateProduct(_, { _id, input }) {
      // new below specifies to return the new update record
      return await Product.findOneAndUpdate({ _id }, input, { new: true });
    },
    async deleteProduct(_, { _id }) {
      return await Product.findByIdAndRemove({ _id });
    }
  }
};
