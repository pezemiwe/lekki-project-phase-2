import PropertyDetails from "../../components/Properties/PropertyDetails";
import { useQueryParam } from '../../hooks/common/useQuery';

export default function PropertyDetailsPage() {
    const [paramPropertyId] = useQueryParam('propertyId');
  return (
    <PropertyDetails propertyId={paramPropertyId || ''} />
  );
}