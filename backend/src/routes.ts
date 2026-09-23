import { app } from "./app.js";

const users: Record<string, string> = {
  alice: "admin",
  bob: "member",
};

app.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});

app
  .route("/users")
  .get((req, res) => {
    res.status(200).json({ users: Object.keys(users) });
  })
  .post((req, res) => {
    res.setHeader("Allow", "GET");
    res.status(405).json({ error: "Method not allowed" });
  });

app.get("/users/:id", (req, res) => {
  const role = users[req.params.id];
  if (!role) {
    return res.status(404).json({ error: "user not found" });
  }
  res.status(200).json({ name: req.params.id, role });
});

app.use((req, res) => {
  res.status(404).json({ error: "route not found" });
});
