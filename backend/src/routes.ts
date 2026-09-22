import { createServer, IncomingMessage, ServerResponse } from "node:http";

const users: Record<string, string> = {
  alice: "admin",
  bob: "member",
};

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  const respond = (status: number, body: object) => {
    res.statusCode = status;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(body));
  };

  if (!req.url) {
    return respond(400, { error: "Bad Request" });
  }

  const [rawPath] = req.url.split("?");
  const segments = rawPath.split("/").filter(Boolean);
  const [route, id] = segments;

  if (route === "ping") {
    if (req.method !== "GET") {
      res.setHeader("Allow", "GET");
      return respond(405, { error: "method not allowed" });
    }
    return respond(200, { message: "pong" });
  }

  if (route === "users") {
    if (req.method !== "GET") {
      res.setHeader("Allow", "GET");
      return respond(405, { error: "method not allowed" });
    }
    if (!id) return respond(200, { users: ["alice", "bob"] });

    const role = users[id];
    if (!role) return respond(404, { error: "user not found" });

    return respond(200, { name: id, role });
  }
  return respond(404, { error: "route not found" });
});

server.listen(3000);
