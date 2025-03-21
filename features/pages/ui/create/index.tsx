import CalendarPanel from "@/features/calendar/ui/calendar-panel";
import UserPanel from "@/features/calendar/ui/user-panel";
import Container from "@/features/ui/Container";

const Create = () => {
  return (
    <Container
      className="flex w-full flex-col gap-sections lg:h-[calc(100vh-var(--height-navbar)-(var(--gap-sections)*2))] lg:flex-row"
      as="main"
    >
      <UserPanel user="" createdAt="" />
      <CalendarPanel availability={[]} />
    </Container>
  );
};

export default Create;
