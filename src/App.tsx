import { Card } from './components/Card';
import { User } from './components/User';

function App() {
  return (
    <main className="bg-slate-900 min-h-screen p-24">
      <div className="mx-auto container max-w-md px-10 py-6 rounded-2xl">
        <Card name='Sebastião' age={38} salary={25000} />
      </div>

      <User />
    </main>
  );
}

export default App;
