import { getProperties, getProperty } from '../../api/lib/property';
import { Property } from 'interfaces/property';
import { useQuery } from 'react-query';
import { PROPERTIES, PROPERTY } from 'utils/queryPaths';

export const useProperties = (query?: string) => {
  return useQuery<Property[]>([PROPERTIES, query], () =>
    getProperties(query)
  );
};

export const useProperty = (id: string) =>
  useQuery<Property>([PROPERTY, id], () => getProperty(id));
