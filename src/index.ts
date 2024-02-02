import { Elysia } from "elysia";

const app = new Elysia()
  .group("/models", (app) => {
    return app
      .get("/", () => "List of models")
      .post("/", () => "Create a model")
      .get("/:id", (req) => `Model ${req.params.id}`)
      .put("/:id", (req) => `Update model ${req.params.id}`)
      .delete("/:id", (req) => `Delete model ${req.params.id}`);
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
