import CalendarPanel from '@/components/shared/CalendarPanel'
import UserPanel from '@/components/shared/UserPanel'
import Container from '@/components/UI/Container'
import { Params, SearchParams } from '@/types/shared'
import { paramsToUser, queryToAvailability } from '@/utils/query'

export interface PageProps {
  params?: Promise<Params>
  searchParams?: Promise<SearchParams>
}

const ReadPage = async ({ params, searchParams }: PageProps) => {
  const paramData = (await params) as Params
  const user = paramsToUser(paramData.emailSlug)

  const query = await searchParams
  const availability = await queryToAvailability(query?.availability as string)

  return (
    <Container className="w-full" as="main">
      <div className="flex flex-col gap-sections lg:h-[calc(100vh-var(--height-navbar)-(var(--gap-sections)*2))] lg:flex-row">
        <UserPanel user={user} />
        <CalendarPanel availability={availability} />
      </div>
    </Container>
  )
}

export default ReadPage
