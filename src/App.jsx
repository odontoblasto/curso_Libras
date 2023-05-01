import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavHeader } from './components/NavHeader'


function App() {


  return (
    <>
    <NavHeader/>

    <main className='mainApp'>
      <h1> Curso de Libras</h1>
      <h3>Profa. Sabrina Pimentel</h3>
      <h4>licenciada Letras Libras UFPE</h4>   

      <div className='articleApp'>
        <article>Sobre a Professora</article>
        <article>Cursos Disponíveis</article>
        <article>Dúvidas ? </article>
      </div>
    </main>
    <footer className='footerApp'>
      <h5>Powered By</h5>
    </footer>

    </>
  )
}

export default App
