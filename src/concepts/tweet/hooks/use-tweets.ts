import { useQuery } from "react-query";

import getTweets from "../services/getTweets";
import ITweet from "../models/Tweet";

interface IHookApi {
  data: undefined | ITweet[];
}

export default function useTweets(): IHookApi {
  const { data } = useQuery("tweets", getTweets);

  return { data };
}
