import { Container, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="white">
      <Text fontSize="4xl" fontFamily="sans-serif" fontWeight="bold">Hello World</Text>
    </Container>
  );
};

export default Index;