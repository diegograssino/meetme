interface Props {
  user: string;
  createdAt: string;
}

const UserPanel = ({ user, createdAt }: Props) => {
  return (
    <aside className="h-user-section rounded border-2 border-foreground lg:h-[calc(100vh-var(--height-navbar)-(var(--gap-sections)*2))] lg:w-2/12">
      <div className="flex h-full">
        <table className="flex-1 table-fixed border-background">
          <tbody className="[&>tr>*]:p-1 [&>tr>*]:text-start [&>tr>td]:pl-2 [&>tr>th]:w-30 [&>tr>th]:border-[.25rem] [&>tr>th]:bg-foreground [&>tr>th]:font-heading [&>tr>th]:text-background">
            <tr>
              <th>From:</th>
              <td>
                <span className="text-xl font-bold">{user}</span>
              </td>
            </tr>
            <tr>
              <th>Created at:</th>
              <td>{createdAt}</td>
            </tr>
          </tbody>
        </table>
        <div />
      </div>
    </aside>
  );
};

export default UserPanel;
