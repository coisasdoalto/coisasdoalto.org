'use client';

import { Box, NavLink } from '@mantine/core';
import { IconBooks, IconHome, IconInfoSquare } from '@tabler/icons-react';
import Link from 'next/link';

export function VerticalNavigation({ onNavigation }: { onNavigation: () => void }) {
  return (
    <Box>
      <NavLink
        label="Início"
        leftSection={<IconHome size={16} stroke={1.5} />}
        component={Link}
        href="/"
        onClick={onNavigation}
      />

      <NavLink
        label="Artigos"
        leftSection={<IconBooks size={16} stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
      >
        <NavLink
          label="Igreja sem placa?"
          component={Link}
          href="/posts/igreja-sem-placa"
          onClick={onNavigation}
        />
      </NavLink>

      <NavLink
        label="Sobre"
        leftSection={<IconInfoSquare size={16} stroke={1.5} />}
        component={Link}
        href="/sobre"
        onClick={onNavigation}
      />
    </Box>
  );
}
