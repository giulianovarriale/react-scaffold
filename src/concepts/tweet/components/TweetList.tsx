import useTweets from "../hooks/use-tweets";
import TweetCard from "./TweetCard";

export default function TweetList() {
  const { data: tweets } = useTweets();

  return (
    <>
      {tweets?.map((tweet, index) => (
        <div key={tweet.id} className={index > 0 ? "mt-2" : ""}>
          <TweetCard tweet={tweet} />
        </div>
      ))}
    </>
  );
}
