import { CalendarIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Container from "../Container";

const Navbar = () => {
  return (
    <nav className="py-2 mb-4 sticky z-30 border-b border-accent">
      <Container className="flex justify-between items-center">
        <h6 className="text-xl! text-accent hover:cursor-pointer font-logo! flex gap-[2px] items-center">
          <CalendarIcon width={"1.25rem"} />
          <span className="pt-1">MeetMe</span>
        </h6>
        <button className="animation-on-hover py-1 px-2 rounded cursor-pointer ">
          <HamburgerMenuIcon />
        </button>
      </Container>
    </nav>
  );
};

export default Navbar;
