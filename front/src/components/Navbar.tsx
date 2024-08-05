import { Button, Input, rem, Title } from "@mantine/core"
import { Link, NavLink } from "react-router-dom"
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';
import { ChangeEvent, useState } from "react";

function TopNavbar() {
  const [search, setSearch] = useState<SpotlightActionData[]>([])

  function updateSearch(value: ChangeEvent<HTMLInputElement>) {
    const query = value.target.value.toLowerCase();
    query.length > 0    
    setSearch([]);
  }

  return (
    <>
      <div className="flex flex-row justify-between w-full items-center">
        <Link to="/" className="flex flex-row items-center gap-2">
          <Title order={3}>Squidwock.com</Title>
        </Link>
        <div className="flex flex-row gap-2">
          <Input className="md:flex hidden" placeholder="Search..." leftSection={<IconSearch size={16} />} onClick={spotlight.open} />
          <Button className="md:hidden flex" variant="outline" onClick={spotlight.open}><IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} /></Button>
          <Spotlight
            actions={search}
            nothingFound="Nothing found..."
            highlightQuery
            searchProps={{
              leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />,
              placeholder: 'Search...',
              onChange: updateSearch,
            }}
          />

          <Button component={NavLink} to="/login" variant="light">Login</Button>
        </div>
      </div>
    </>
  )
}

export { TopNavbar }