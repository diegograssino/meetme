import Container from "@/components/UI/Container";
import { Grid } from "@/components/UI/Grid";
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
      <Grid
        templateAreas={`"user" "calendar"`}
        cols={1}
        className="gap-sections"
      >
        <Grid.Area
          area="user"
          as="aside"
          className="h-user-section border-2 border-foreground"
        >
          User
        </Grid.Area>
        <Grid.Area
          area="calendar"
          as="section"
          className="h-[calc(100vh-var(--height-navbar)-var(--height-user-section)-(var(--gap-sections)*3))] border-2 border-foreground"
        >
          Calendar
        </Grid.Area>
      </Grid>
    </Container>
  );
};

export default ReadPage;
