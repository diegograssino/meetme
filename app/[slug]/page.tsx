import CalendarPanel from "@/features/calendar/ui/calendar-panel";
import UserPanel from "@/features/calendar/ui/user-panel";
import { Params, SearchParams } from "@/features/pages/types";
import { paramsToUser, queryToAvailability } from "@/features/pages/utils";
import Container from "@/features/ui/container";

export interface PageProps {
  params?: Promise<Params>;
  searchParams?: Promise<SearchParams>;
}

const ReadPage = async ({ params, searchParams }: PageProps) => {
  const {slug} = (await params) as Params;
  const user = paramsToUser(slug);

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
