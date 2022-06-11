import { Loading } from './components/common/Loading';
import Navigation from './navigation/index';

export function App() {
  const loading = false;

  return loading ? <Loading /> : <Navigation />;
}

export default App;
