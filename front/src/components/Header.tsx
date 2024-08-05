import { AppShell, Group } from "@mantine/core"
import { TopNavbar } from "./Navbar";

function Header() {
  return (
    <>
      <AppShell.Header>
        <Group h="100%" px="md" className="flex flex-row">
          <TopNavbar />
        </Group>
      </AppShell.Header>
    </>
  )
}

export default Header