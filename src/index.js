import { createRoot } from 'react-dom/client';
import App from './components/App';

/* Using new React v18 syntax */
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App tab='home' />);