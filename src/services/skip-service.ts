import { useQuery } from '@tanstack/react-query';
import api from './api-service';
import { Skip } from '../types/skips';

const getSkips = async (
  postcode: string = 'NR32',
  area: string = 'Lowestoft',
): Promise<Skip[]> => {
  const skipUrl = `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`;

  try {
    const response = await api.get(skipUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching skips', error);
    return [];
  }
};

export const useGetSkips = () => {
  return useQuery({
    queryKey: ['skips'],
    queryFn: () => getSkips(),
  });
};
