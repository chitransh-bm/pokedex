const LoadingPokemonCard = () => (
  <div className="bg-slate-200 flex rounded-xl">
    <div className="flex flex-1 flex-col justify-center pl-4">
      <div className="h-4 w-10 bg-slate-400 rounded mb-2"></div>
      <div className="h-6 w-32 bg-slate-400 rounded mb-3"></div>
      <div className="flex flex-row gap-1">
        <div className="h-5 w-12 bg-slate-400 rounded-full"></div>
        <div className="h-5 w-12 bg-slate-400 rounded-full"></div>
      </div>
    </div>
    <div className="flex flex-1 items-center justify-center h-32">
      <div className="rounded-full bg-slate-400 w-24 h-24"></div>
    </div>
  </div>
);
type Props = {
  count: number; // Specify that count must be a number
};

const LoadingPokemons = ({ count }: Props) => {
  let cards = [];
  for (let i = 0; i < count; i++) {
    cards.push(<LoadingPokemonCard key={i} />);
  }
  return (
    <div
      id="loading-skeleton"
      className="animate-pulse grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
    >
      {cards}
    </div>
  );
};

export default LoadingPokemons;
