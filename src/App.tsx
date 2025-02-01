import { CurrencyInput } from '@/shared/components/ui/inputs.tsx';
import Progress from '@/shared/components/progress.tsx';

function App() {
  return (
    <main className="mx-auto h-dvh max-w-[1200px] p-5">
      <section className="flex flex-col gap-[43px] md:flex-row">
        <div className="flex w-full flex-col gap-2">
          <CurrencyInput currency="RUB" />
          <Progress progress={25} />
        </div>
        <div className="flex w-full flex-col gap-2">
          <CurrencyInput currency="RUB" />
          <Progress progress={60} />
        </div>
      </section>
    </main>
  );
}

export default App;
