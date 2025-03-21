import { Availability } from '@/features/calendar/types/availability'

interface Props {
  availability: Availability[]
}

const CalendarPanel = ({ availability }: Props) => {
  return (
    <section className="h-[calc(100vh-var(--height-navbar)-var(--height-user-section)-(var(--gap-sections)*3))] border-2 border-foreground lg:h-[calc(100vh-var(--height-navbar)-(var(--gap-sections)*2))] lg:w-10/12">
      <pre>
        <code className="text-wrap">{JSON.stringify(availability)}</code>
      </pre>
    </section>
  )
}

export default CalendarPanel
