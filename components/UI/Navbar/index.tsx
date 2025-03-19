import { CalendarIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import Container from '../Container'

const Navbar = () => {
  return (
    <nav className="sticky z-30 mb-4 h-navbar border-b border-accent py-2">
      <Container className="flex items-center justify-between">
        <h6 className="flex items-center gap-[2px] font-logo! text-xl! text-accent hover:cursor-pointer">
          <CalendarIcon width={'1.25rem'} />
          <span className="pt-1">MeetMe</span>
        </h6>
        <button className="animation-on-hover cursor-pointer rounded px-2 py-1">
          <HamburgerMenuIcon />
        </button>
      </Container>
    </nav>
  )
}

export default Navbar
