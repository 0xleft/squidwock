import { Button, Input, rem, Title } from "@mantine/core"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { IconAnchor, IconContract, IconHome, IconSearch } from '@tabler/icons-react';
import { ChangeEvent, useState } from "react";

function TopNavbar() {
  const navigate = useNavigate()

  const [search, setSearch] = useState<SpotlightActionData[]>([
    {
      id: 'posts',
      label: 'Posts',
      description: 'General information about all the posts',
      onClick: () => {
        navigate('/posts')
      },
      leftSection: <IconSearch size={16} />
    },
    {
      id: 'about',
      label: 'About',
      description: 'Learn more about the site',
      onClick: () => {
        navigate('/about')
      },
      leftSection: <IconAnchor size={16} />
    },
    {
      id: 'contact',
      label: 'Contact',
      description: 'Contact the site administrator',
      onClick: () => {
        navigate('/contact')
      },
      leftSection: <IconContract size={16} />
    }
  ])

  function updateSearch(value: ChangeEvent<HTMLInputElement>) {
    const query = value.target.value.toLowerCase();
    query.length > 0

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