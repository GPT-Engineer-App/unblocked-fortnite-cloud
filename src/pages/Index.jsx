import React from "react";
import { Box, Heading, Text, Image, Button, Flex, Link, AspectRatio } from "@chakra-ui/react";
import { FaGamepad } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Box bg="purple.600" py={8} px={12}>
        <Heading as="h1" color="white" size="2xl">
          Unblocked Gaming
        </Heading>
        <Text color="purple.100" fontSize="xl" mt={2}>
          Play Fortnite and other games anywhere, anytime!
        </Text>
      </Box>

      <Flex direction={["column", "row"]} p={8} gap={8}>
        <Box flex={2}>
          <Heading size="xl" mb={4}>
            Play Fortnite
          </Heading>
          <AspectRatio ratio={16 / 9}>
            <iframe src="https://fortnite.com/play" allowFullScreen title="Fortnite Cloud Gaming" />
          </AspectRatio>
          <Text mt={4}>Experience the full version of Fortnite, streamed directly to your browser! No downloads or installs required. Just click play and jump into the action.</Text>
          <Button colorScheme="purple" size="lg" mt={6} leftIcon={<FaGamepad />}>
            Play Fortnite Now
          </Button>
        </Box>

        <Box flex={1}>
          <Heading size="xl" mb={4}>
            More Games
          </Heading>
          <Flex direction="column" gap={4}>
            <Link href="/roblox">
              <Image src="https://images.unsplash.com/photo-1594652634010-275456c808d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2Jsb3glMjBnYW1lJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MTI4Nzg4NTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Roblox" />
              <Text mt={2} fontWeight="bold">
                Roblox
              </Text>
            </Link>
            <Link href="/minecraft">
              <Image src="https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtaW5lY3JhZnQlMjBnYW1lJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MTI4Nzg4NjB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Minecraft" />
              <Text mt={2} fontWeight="bold">
                Minecraft
              </Text>
            </Link>
            <Link href="/among-us">
              <Image src="https://images.unsplash.com/photo-1594652634010-275456c808d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbW9uZyUyMHVzJTIwZ2FtZSUyMHNjcmVlbnNob3R8ZW58MHx8fHwxNzEyODc4ODYwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Among Us" />
              <Text mt={2} fontWeight="bold">
                Among Us
              </Text>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
