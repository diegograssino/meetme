import Container from "@/components/UI/Container";
import { Params, SearchParams } from "@/types/shared";
import { paramsToUser, queryToAvailability } from "@/utils/query";

export interface PageProps {
  params?: Promise<Params>;
  searchParams?: Promise<SearchParams>;
}

const ReadPage = async ({ params, searchParams }: PageProps) => {
  const paramData = (await params) as Params;
  const user = await paramsToUser(paramData.emailSlug);

  const queryData = await searchParams;
  const availability = queryToAvailability(queryData?.availability as string);

  return (
    <Container className="w-full" as="main">
      <h1>Read</h1>
    </Container>
  );
};

export default ReadPage;
