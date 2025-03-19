interface Props {
  user: string
}

const UserPanel = ({ user }: Props) => {
  return (
    <aside className="h-user-section border-2 border-foreground lg:h-[calc(100vh-var(--height-navbar)-(var(--gap-sections)*2))] lg:w-2/12">
      {user}
    </aside>
  )
}

export default UserPanel
