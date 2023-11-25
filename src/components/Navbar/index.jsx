import { useState } from 'react';
import { Container, Group, Burger, ActionIcon, useMantineColorScheme, useComputedColorScheme, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './navbar.module.css';
import { IconMoon, IconSun } from '@tabler/icons-react';
import cx from 'clsx';
import { NavLink, useLocation } from 'react-router-dom';

const links = [
  { link: '/', label: 'Home' },
  { link: '/login', label: 'Login' },
  { link: '/signup', label: 'Signup' },
  { link: '/admin', label: 'Admin' },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const location = useLocation();

  const { hash, pathname, search } = location;
  console.log(pathname);

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('auto', { getInitialValueInEffect: true });

  const items = links.map((link) => (
    <NavLink
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={pathname === link.link || undefined}
    >
      {link.label}
    </NavLink>
  ));



  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Title order={3}>Project Name</Title>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <ActionIcon
          onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
          variant="default"
          size="xl"
          aria-label="Toggle color scheme"
        >
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
          <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
        </ActionIcon>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}