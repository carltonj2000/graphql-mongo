import express from "express";
import graphqlHTTP from "express-graphql";

import schema from "./schema";

const app = express();

const PORT = process.env.PORT || "3000";

app.get("/", (req, res) => {
  return res.json({ msg: "hi" });
});

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    context: {
      userId: 1
    }
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
