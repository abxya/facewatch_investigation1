import './App.css'
import ImageScrollPan from './ImageScrollPan'

function App() {
  return (
    <ImageScrollPan
      imageUrl="./resources/timeline_1.png"
      imageWidth={13115}
      imageHeight={7377}
      viewWidth={3000}
      viewHeight={1600}
      start={{ x: 2900, y: 800 }}
      end={{ x: 9569, y: 4650 }}
    />
  )
}

export default App
