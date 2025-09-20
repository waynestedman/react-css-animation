// App.jsx
import Stuff from './Stuff';
import Card from './Card';

function App() {

  return (
    <>
      <header>
        <h3>CSS Animation</h3>
      </header>
      <main>
        <section className='moving-stuff'>
          <Stuff />
        </section>
        <section className='card-container'>
          <Card 
            title="Hover over this Card!"
            body="This is a card. Hover over me to see the animation effect."
            imageUrl="https://picsum.photos/300/200?grayscale"
          />
          <Card 
            additionalClassName="second-card"
            title="Another Card"
            body="This is another card. These are Millie & Neo."
            imageUrl="https://placecats.com/millie_neo/300/200"
          />
          <Card 
            additionalClassName="third-card"
            title="Ummm ... Dog?"
            body="Dogs are cool! Right?"
            imageUrl="https://placedog.net/300/200?id=1"
          />
        </section>
      </main>
    </>
  )
}

export default App;
