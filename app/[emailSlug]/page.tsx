import Container from "@/components/UI/Container";
import { PageProps } from "@/types/shared";
import { adaptQueryToAvailability } from "@/utils/query";

const ReadPage = async ({ params, searchParams }: PageProps) => {
  const user = await params;
  const queryData = await searchParams;
  // console.log(encodeURIComponent("sun=[]&mon=[8,9]&mon=[12.13]"));
  const availability = adaptQueryToAvailability(
    queryData?.availability as string
  );

  return (
    <Container className="w-full" as="main">
      <h1>Read</h1>
    </Container>
  );
};

export default ReadPage;
