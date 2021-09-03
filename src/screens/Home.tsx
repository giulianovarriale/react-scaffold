import CommonLayout from "../layouts/CommonLayout";
import TweetList from "../tweet/components/TweetList";

export default function Home() {
  return (
    <CommonLayout title="Home">
      <TweetList />
    </CommonLayout>
  );
}
