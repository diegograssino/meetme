import Container from "@/components/UI/Container";
import GridTemplate, { GridArea } from "@/components/UI/GridTemplate";
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
      <GridTemplate
        templateAreas={`"user" "calendar"`}
        config={{ cols: 1, gap: 4 }}
        responsive={{
          sm: { cols: 1, gap: 4 },
          md: { cols: 1, gap: 4 },
          lg: { cols: 1, gap: 4 },
          xl: { cols: 1, gap: 4 },
        }}
        className="gap-sections"
      >
        <GridArea
          area="user"
          as="aside"
          className="h-user-section border-2 border-foreground"
        >
          User
        </GridArea>
        <GridArea
          area="calendar"
          as="section"
          className="h-[calc(100vh-var(--height-navbar)-var(--height-user-section)-(var(--gap-sections)*3))] border-2 border-foreground"
        >
          Calendar
        </GridArea>
      </GridTemplate>
    </Container>
  );
};

export default ReadPage;
