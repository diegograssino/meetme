import Container from "@/components/UI/Container";
import GridArea from "@/components/UI/GridArea";
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
      <div
        className="grid grid-cols-3 gap-sections grid-template-read"
      >
        <GridArea
          area="user"
          as="aside"
          className="h-user-section tablet:h-[calc(100vh-var(--height-navbar))-(var(--gap-sections)*3))] desktop:h-[calc(100vh-var(--height-navbar))-(var(--gap-sections)*3))] border-2 border-foreground"
        >
          User
        </GridArea>
        <GridArea
          area="calendar"
          as="section"
          className="h-[calc(100vh-var(--height-navbar)-var(--height-user-section)-(var(--gap-sections)*3))] desktop:h-[calc(100vh-var(--height-navbar))-(var(--gap-sections)*3))] border-2 border-foreground"
        >
          Calendar
        </GridArea>
      </div>
    </Container>
  );
};

export default ReadPage;
