'use client'

import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { IconBulb, IconBulbOff } from '@tabler/icons-react'

export function DarkModeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <ActionIcon
      variant="outline"
      onClick={() => toggleColorScheme()}
      title="Acender/desligar a luz"
    >
      {dark ? <IconBulb size={18} /> : <IconBulbOff size={18} />}
    </ActionIcon>
  )
}
