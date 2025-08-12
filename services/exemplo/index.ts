import { FastifyRequest, FastifyReply } from "fastify";

export const listExemplos = (req: FastifyRequest, res: FastifyReply) => {
  try {
    // PROCURAR TODOS OS EXEMPLOS

    res.status(200).send({ message: "List Exemplos" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

export const getExemploById = (req: FastifyRequest, res: FastifyReply) => {
  try {
    const { exemploId } = req.params as Record<string, any>;
    // PROCURAR POR UM EXEMPLO ESPECIFICO

    res.status(200).send({ message: `Get Exemplo By Id: ${exemploId}` });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};
