import { MainForm, Transactions } from "./components";
const App = () => {
  return (
    <div className="min-h-screen gradient-bg-welcome text-white">
      <h1 className="text-3xl font-bold underline">CEND</h1>
      <MainForm/>
      <Transactions />
    </div>
  );
};

export default App;
