import { useRouter } from "next/router";
import { MainLayout } from "../../layouts";

const DocumentsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <MainLayout
      title={`Documents Page ${id}`}
      description={"Documents Page Description"}
    >
      <div className="mt-4">
        <h6>{`Test Documents Page ${id}`}</h6>
      </div>
    </MainLayout>
  );
};

export default DocumentsPage;
