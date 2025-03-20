import CalendarPanel from "@/components/shared/CalendarPanel";
import UserPanel from "@/components/shared/UserPanel";
import Container from "@/components/UI/Container";

const CreatePage = () => {
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

export default CreatePage;
