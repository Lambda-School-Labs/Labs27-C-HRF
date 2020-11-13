import axios from 'axios';
import { useQuery } from 'react-query';
export const useIncidents = () => {
  return useQuery(
    'incidents',
    () => {
      return axios
        .get(`${process.env.REACT_APP_BACKENDURL}/incidents/showallincidents`)
        .then(res => res.data);
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};
