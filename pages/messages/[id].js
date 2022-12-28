import { useRouter } from "next/router";
import { MainLayout } from "../../layouts";

const MessagePage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <MainLayout title={"Message Page"} description={"Message Page Description"}>
      <div className="mt-4">
        <h6>Test Message Page {id}</h6>
      </div>
    </MainLayout>
  );
};

export default MessagePage;
