import CalendarPanel from "@/features/calendar/UI/CalendarPanel";
import UserPanel from "@/features/calendar/UI/UserPanel";
import Container from "@/features/UI/Container";
import { Params, SearchParams } from "@/types/shared";
import { paramsToUser, queryToAvailability } from "@/utils/query";

export interface PageProps {
  params?: Promise<Params>;
  searchParams?: Promise<SearchParams>;
}

const ReadPage = async ({ params, searchParams }: PageProps) => {
  const paramData = (await params) as Params;
  const user = paramsToUser(paramData.emailSlug);

  const query = await searchParams;
  const availability = await queryToAvailability(query?.availability as string);

  return (
    <Container
      className="flex w-full flex-col gap-sections lg:h-[calc(100vh-var(--height-navbar)-(var(--gap-sections)*2))] lg:flex-row"
      as="main"
    >
      <UserPanel user={user} createdAt="11/11/111" />
      <CalendarPanel availability={availability} />
    </Container>
  );
};

export default ReadPage;
