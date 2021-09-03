import faker from "faker";
import ITweet from "../models/Tweet";

interface IHookApi {
  data: ITweet[];
}

export default function useTweets(): IHookApi {
  const data: ITweet[] = Array.from({ length: 15 }).map(() => {
    const id = faker.datatype.uuid();

    return {
      id,
      avatar: `https://i.pravatar.cc/64?u=${id}`,
      content: faker.lorem.paragraph(1),
    };
  });

  return { data };
}
