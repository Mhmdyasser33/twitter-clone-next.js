import fetcher from '@/libs/fetcher';
import useSWR from 'swr';



const useUsers = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher);

  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useUsers;