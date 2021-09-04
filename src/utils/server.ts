import faker from "faker";
import { createServer } from "miragejs";

import ITweet from "../concepts/tweet/models/Tweet";

const server = createServer({
  routes() {
    this.get("/api/tweets", () => {
      const data: ITweet[] = Array.from({ length: 15 }).map(() => {
        const id = faker.datatype.uuid();

        return {
          id,
          avatar: `https://i.pravatar.cc/64?u=${id}`,
          content: faker.lorem.paragraph(1),
          user: {
            name: faker.name.findName(),
          },
        };
      });

      return { data };
    });

    this.post("/api/login", () => {
      return {
        token: faker.datatype.uuid(),
      };
    });
  },
});

export default server;
