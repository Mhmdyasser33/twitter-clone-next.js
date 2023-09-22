import fetcher from '@/libs/fetcher';
import useSWR from 'swr';



const useUser = (userId : string) => {
    //!check if there is UserId the url will be api/current/ userIdValue else put null ...
  const { data, error, isLoading, mutate } = useSWR(userId ? `/api/current/${userId}` : null, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useUser;