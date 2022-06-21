import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { GET_USER_BY_USER_NAME } from '@graphql/query';
import BottomSheetSlide from '@shared/BottomSheet/BottomSheetContainer/BottomSheetSlide';

const userPage = () => {
  const router = useRouter();
  const { username } = router?.query;
  const { loading, error, data } = useQuery(GET_USER_BY_USER_NAME, {
    variables: {
      username: username,
    },
    fetchPolicy: 'cache-and-network',
  });
  // console.log({ data, username });
  if (loading || error) return <div>Loading...</div>;
  if (error) {
    console.log({ error });
  }
  if (!data) {
    router.push('/');
  }

  return (
    <div>
      <Head>
        <title>{`${username}'s`} VReel</title>
      </Head>
      <BottomSheetSlide data={data} />
    </div>
  );
};

export default userPage;
