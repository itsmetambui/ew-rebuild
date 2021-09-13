import {
  Avatar,
  Box,
  Flex,
  Heading,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import {
  BsFillBookmarksFill,
  BsFillInboxFill,
  BsPencilSquare,
  BsSearch,
} from 'react-icons/bs';
import {
  MobileMenuButton,
  NavBreadcrumb,
  NavSectionTitle,
  ScrollArea,
  SearchInput,
  SidebarLink,
  useMobileMenuState,
  AccountSwitcher,
} from '@ew/ui';

const data = {
  users: [
    {
      name: 'Melinda Jones',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Ram Prakash',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNob3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Gernald Hawkins',
      image:
        'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGhlYWRzaG90fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Jessie Munday',
      image:
        'https://images.unsplash.com/photo-1595875708571-854a3492c245?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTZ8fGhlYWRzaG90fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Diana Fisher 🏳️‍🌈',
      image:
        'https://images.unsplash.com/photo-1531078215167-91fcfe45b39e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjF8fGhlYWRzaG90fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
  ],
};

export const App = () => {
  const { isOpen, toggle } = useMobileMenuState();
  return (
    <Flex
      height="100vh"
      bg="gray.800"
      overflow="hidden"
      sx={{ '--sidebar-width': '16rem' }}
    >
      <Box
        as="nav"
        display="block"
        flex="1"
        width="var(--sidebar-width)"
        left="0"
        py="6"
        px="3"
        color="gray.200"
        position="fixed"
      >
        <Box fontSize="sm" lineHeight="tall">
          <AccountSwitcher />
          <ScrollArea pt="5" pb="6">
            <SidebarLink
              display={{ base: 'block', lg: 'none' }}
              mb="2"
              icon={<BsSearch />}
            >
              Search
            </SidebarLink>
            <Stack pb="6">
              <SidebarLink icon={<BsFillInboxFill />}>Inbox</SidebarLink>
              <SidebarLink icon={<BsFillBookmarksFill />}>
                Bookmarks
              </SidebarLink>
              <SidebarLink icon={<BsPencilSquare />}>Drafts</SidebarLink>
            </Stack>
            <Stack pb="6">
              <NavSectionTitle>Chats</NavSectionTitle>
              <SidebarLink>🎉 Inbox</SidebarLink>
              <SidebarLink>👍 Personal</SidebarLink>
              <SidebarLink>🦋 Work</SidebarLink>
            </Stack>
            <Stack>
              <NavSectionTitle>Members</NavSectionTitle>
              {data.users.map((user, index) => (
                <SidebarLink
                  key={index}
                  avatar={
                    <Avatar size="xs" name={user.name} src={user.image} />
                  }
                >
                  {user.name}
                </SidebarLink>
              ))}
            </Stack>
          </ScrollArea>
        </Box>
      </Box>
      <Box
        flex="1"
        p={{ base: '0', md: '6' }}
        marginStart={{ md: 'var(--sidebar-width)' }}
        position="relative"
        left={isOpen ? 'var(--sidebar-width)' : '0'}
        transition="left 0.2s"
        bg="white"
      >
        <Box
          maxW="2560px"
          bg={mode('white', 'gray.700')}
          height="100%"
          pb="6"
          rounded={{ md: 'lg' }}
        >
          <Flex direction="column" height="full">
            <Flex
              w="full"
              py="4"
              justify="space-between"
              align="center"
              px="10"
            >
              <Flex align="center" minH="8">
                <MobileMenuButton onClick={toggle} isOpen={isOpen} />
                <NavBreadcrumb />
              </Flex>
              <SearchInput />
            </Flex>
            <Flex direction="column" flex="1" overflow="auto" px="10" pt="8">
              <Heading size="md" fontWeight="extrabold" mb="6">
                Product Vision
              </Heading>
              <Box
                flex="1"
                borderWidth="3px"
                borderStyle="dashed"
                rounded="xl"
              />
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
