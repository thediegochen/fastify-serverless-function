import Fastify, { FastifyRequest, FastifyReply } from "fastify";

import { listExemplos, getExemploById } from "../services/exemplo";

const app = Fastify({
  logger: true,
});

app.get("/api/exemplo/:exemploId", getExemploById);
app.get("/api/exemplo", listExemplos);

export default async function handler(
  req: FastifyRequest,
  reply: FastifyReply
) {
  await app.ready();
  app.server.emit("request", req, reply);
}
