import wretch from "wretch";

import ITweet from "../models/Tweet";

interface ITweetsDto {
  data: ITweet[];
}

export default async function getTweets(): Promise<ITweet[]> {
  const response = await wretch().url("/api/tweets").get().json<ITweetsDto>();

  return response.data;
}
