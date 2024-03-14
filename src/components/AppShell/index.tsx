'use client';

import { PropsWithChildren, useState } from 'react';

import {
  Breadcrumbs,
  Burger,
  Button,
  Container,
  Flex,
  AppShell as MantineAppShell,
  useMantineTheme,
} from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import Link from 'next/link';

import { DarkModeToggle } from './DarkModeToggle';
import { VerticalNavigation } from './VerticalNavigation';

export default function AppShell({ children }: PropsWithChildren) {
  const theme = useMantineTheme();
  const colorScheme = useColorScheme();
  const [opened, setOpened] = useState(false);

  return (
    <MantineAppShell
      styles={{
        main: {
          background: colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      aside={{
        breakpoint: 'lg',
        width: { sm: 200, lg: 300 },
      }}
      header={{
        height: { base: 50, md: 70 },
      }}
      navbar={{
        breakpoint: 'md',
        width: { sm: 200, lg: 300 },
        collapsed: { mobile: !opened },
      }}
    >
      <MantineAppShell.Header p="md">
        <Flex
          h="100%"
          align="center"
          justify="center"
        >
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
            hiddenFrom="lg"
          />

          <Breadcrumbs style={{ marginRight: 'auto' }}>
            <Button variant="subtle" component={Link} href="/">
              Coisas do Alto
            </Button>
          </Breadcrumbs>

          <DarkModeToggle />
        </Flex>
      </MantineAppShell.Header>

      <MantineAppShell.Navbar p="md">
        <VerticalNavigation
          onNavigation={() => {
            setOpened(false);
          }}
        />
      </MantineAppShell.Navbar>

      <MantineAppShell.Main px={0} py={16}>
        <Container px={0} py={16}>
          {children}
        </Container>
      </MantineAppShell.Main>
    </MantineAppShell>
  );
}
