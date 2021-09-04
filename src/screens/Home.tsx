import CommonLayout from "../layouts/CommonLayout";
import TweetList from "../concepts/tweet/components/TweetList";

export default function Home() {
  return (
    <CommonLayout title="Home">
      <TweetList />
    </CommonLayout>
  );
}
