import { AppShell, Burger, Group } from "@mantine/core"
import Navbar from "./Navbar";

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

function Header({ opened, toggle }: HeaderProps) {
  return (
    <>
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Navbar />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Navbar />
      </AppShell.Navbar>
    </>
  )
}

export default Header