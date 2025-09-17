// App.jsx
import Card from './Card';

function App() {

  return (
    <>
      <header>
        <h3>CSS Animation</h3>
      </header>
      <main>
        <Card 
          title="Hover over this Card!"
          body="This is a card. Hover over me to see the animation effect."
          imageUrl="https://picsum.photos/300/200"
        />
        <Card 
          additionalClassName="second-card"
          title="Another Card"
          body="This is another card. These are Millie & Neo."
          imageUrl="https://placecats.com/millie_neo/300/200"
        />
      </main>
    </>
  )
}

export default App;
