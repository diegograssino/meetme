import CalendarPanel from "@/features/calendar/UI/CalendarPanel";
import UserPanel from "@/features/calendar/UI/UserPanel";
import Container from "@/features/UI/Container";

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
