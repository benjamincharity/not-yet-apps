import { Heading, Image, LinkOverlay, Text } from '@chakra-ui/react';
import { json } from '@remix-run/node';
import { NavLink, useLoaderData } from '@remix-run/react';
import { LoaderFunctionArgs } from '@remix-run/router';
import { createServerClient } from '@supabase/auth-helpers-remix';

export async function loader({ request }: LoaderFunctionArgs) {
  // const app = await getApp(parseInt(params.id as any));
  // return json(app);

  const response = new Response();
  const supabaseClient = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    { request, response }
  );

  const { data } = await supabaseClient.from('apps').select('*');

  return json(
    { data },
    {
      headers: response.headers,
    }
  );
}

export default function Route() {
  const app = useLoaderData<typeof loader>();
  console.log('AppDetail: ', app);
  // const { data } = useGetApp(id);

  return (
    <div>
      {/*<Heading fontSize={'lg'}>{app?.name}</Heading>*/}
      {/*<Text size={'sm'}>{app?.id}</Text>*/}
      {/*<Image*/}
      {/*  maxW={'400px'}*/}
      {/*  alt=""*/}
      {/*  fallbackSrc="https://placehold.co/600x400?text=Not+found"*/}
      {/*  borderRadius={'md'}*/}
      {/*  src={app?.imageUrl}*/}
      {/*/>*/}
    </div>
  );
}
