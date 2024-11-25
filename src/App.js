import ButtonComponent from './components/ButtonComponent'
import ImageComponent from './components/ImageComponent'

function App() {
  return (
    <div>
      <ButtonComponent text="ciaooooo" />
      <ImageComponent
        url="https://media.autoaddicted.com/2017/05/2015-dodge-challenger-srt-hellcat-photo-615334-s-986x603-986x580.jpg"
        alt="Hellcat"
      />
    </div>
  )
}

export default App
