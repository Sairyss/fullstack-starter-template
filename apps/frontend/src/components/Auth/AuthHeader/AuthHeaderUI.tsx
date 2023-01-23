import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export type User = {
  username: string;
  role: string;
  avatarUrl: string;
};

export type AuthHeaderProps = {
  user?: User;
  handleSignOut: () => void;
};

const AuthHeaderUI = (props: AuthHeaderProps) => {
  const navigate = useNavigate();
  return (
    <HStack position={'relative'} spacing={{ base: '0', md: '6' }}>
      <Flex alignItems={'center'}>
        {props.user ? (
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <Avatar size={'xs'} src={props.user.avatarUrl} />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{props.user.username}</Text>
                  <Text fontSize="xs" color="gray.600">
                    {props.user.role}
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem onClick={props.handleSignOut}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Flex gap={2}>
            <Button onClick={() => navigate('/sign-up')}>Sign up</Button>
            <Button onClick={() => navigate('/login')}>Sign in</Button>
          </Flex>
        )}
      </Flex>
    </HStack>
  );
};

export default AuthHeaderUI;
