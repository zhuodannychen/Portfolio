import './app.css';
import LandingPage from './routes/+page.svelte';

const app = new LandingPage({
  target: document.getElementById('app')!,
});

export default app;

