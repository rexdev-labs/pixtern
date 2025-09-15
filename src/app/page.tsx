import { Button, HStack } from "@chakra-ui/react";

export default function Home() {
  const foo = 1;
  const bar = [1, 2, 3];
  return (
    <>
      <HStack bg="brand.bg">
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </>
  );
}
