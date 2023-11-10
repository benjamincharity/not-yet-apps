import { Box, Heading, Image, LinkBox, LinkOverlay, SimpleGrid, Text } from '@chakra-ui/react';
import { NavLink, Outlet, useLoaderData } from '@remix-run/react';
import { json, LoaderFunctionArgs } from '@remix-run/router';
import { AppShape, getApps } from '~/data/app.queries';

export async function loader({ params }: LoaderFunctionArgs) {
  const apps = await getApps(params);
  console.log('apps in loader: ', apps);
  return json(apps);
}

export default function Route() {
  const result = useLoaderData<typeof loader>();
  console.log('Apps, result: ', result);

  return (
    <Box p={4}>
      <Box mb={4}>Apps count: {result?.total}</Box>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={4}>
        {result?.apps?.map((app: AppShape) => (
          <LinkBox as={'article'} outline={'2px solid'} key={app.id} rounded={'md'}>
            <LinkOverlay as={NavLink} to={`/app/${app.id}`}>
              <Heading fontSize={'lg'}>{app.name}</Heading>
            </LinkOverlay>
            <Text size={'sm'}>{app.id}</Text>
            <Box>
              <Image
                alt=""
                fallbackSrc="https://placehold.co/600x400?text=Not+found"
                borderRadius={'md'}
                src={app.imageUrl}
              />
            </Box>
          </LinkBox>
        ))}
      </SimpleGrid>
    </Box>
  );
}
