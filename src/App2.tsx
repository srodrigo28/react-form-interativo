import FormHeader from './components/FormHeader';
import Form from './components/Form';

function App() {
  return (
    <main className="bg-slate-900 min-h-screen p-24">
      <div className="mx-auto container max-w-md px-10 py-6 border-slate-300 border-2 rounded-2xl">
        <FormHeader />
        <Form />
      </div>
    </main>
  );
}

export default App;
