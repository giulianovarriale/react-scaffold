import ITweet from "../models/Tweet";

interface IProps {
  tweet: ITweet;
}

export default function TweetCard({ tweet }: IProps) {
  return (
    <div className="bg-white p-6 shadow-sm rounded-md flex">
      <div className="flex-shrink-0">
        <img src={tweet.avatar} alt="Profile" className="rounded-full" />
      </div>

      <div className="ml-4">
        <span className="block font-semibold mb-1">{tweet.user.name}</span>

        <p className="text-gray-600">{tweet.content}</p>
      </div>
    </div>
  );
}
