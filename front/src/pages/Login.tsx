import { Button, Center, Container, Group, Paper, TextInput } from "@mantine/core"
import { useForm } from '@mantine/form';
import { notifications } from "@mantine/notifications";
import { useState } from "react";

interface LoginFormData {
  email: string;
  password: string;
}

function Login() {
  function onSubmit(values: LoginFormData) {
    setLoading(true);
    setLoading(false);
    notifications.show({
      title: 'Success',
      message: 'Login successful',
      color: 'green',
      icon: null,
      autoClose: 5000,
    })
    // todo
  }

  const [loading, setLoading] = useState(false);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <>
      <Center style={{ height: 'calc(100vh - 100px)' }}>
        <Container className="w-96 md:w-120">
          <form className="w-full" onSubmit={form.onSubmit((values) => onSubmit(values))}>
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              key={form.key('email')}
              {...form.getInputProps('email')}
            />

            <TextInput
              withAsterisk
              label="Password"
              placeholder="Password"
              type="password"
              key={form.key('password')}
              {...form.getInputProps('password')}
            />

            <Group justify="flex-end" mt="md">
              <Button loading={loading} loaderProps={{ "type": "dots" }} type="submit">Submit</Button>
            </Group>
          </form>
        </Container>
      </Center>
    </>
  )
}

export default Login