import { Button, Center, Title } from "@mantine/core"
import { Link } from "react-router-dom"

function NoMatch() {
  return (
    <>
      <Center style={{ height: 'calc(100vh - 100px)' }}>
        <div className="text-center">
          <Title order={1}>404</Title>
          <Link to="/">
            <Button variant="transparent">Return to home</Button>
          </Link>
        </div>
      </Center>
    </>
  )
}

export default NoMatch