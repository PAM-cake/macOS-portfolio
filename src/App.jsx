import { Dock, Home, Navbar, Welcome } from "#components"
import { Finder, Resume, Safari, Terminal, TextFile, ImageFile, Contact, Gallery, Trash } from "#windows";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable"
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <TextFile/>
      <ImageFile/>
      <Contact/>
      <Gallery/>
      <Trash/>
      <Home/>
    </main>
  )
}

export default App