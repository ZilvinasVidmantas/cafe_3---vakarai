import Button from './components/button';

function App() {

  return (
    <>
      <h1>Čia yra app'sas</h1>
      <Button style={{ color: 'yellow' }}>Tekstas viduje mygtuko</Button>
      <Button style={{ backgroundColor: '#000000' }}>Click</Button>
      <Button type="submit" >Submit</Button>
      <Button>Send</Button>
    </>
  );
}

export default App;