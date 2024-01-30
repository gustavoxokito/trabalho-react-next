import Livro from '../modelo/Livro';

const livros: Array<Livro> = [
  new Livro(1, 1, 'Node Essencial', 
  'Node.js é uma das plataformas de desenvolvimento mais conhecidas do mercado, que utiliza JavaScript como linguagem de programação e torna o desenvolvimento de web services RESTful muito produtivo.', ['Ricardo R. Lecheta']),

  new Livro(2, 2, 'React - Aprenda Praticando', 'React é uma biblioteca para a criação de sites, interfaces gráficas e aplicações web, criada pelo Facebook, e seu uso tem crescido muito, sendo usada por grandes empresas, como Netflix, Walmart e The New York Times', ['Maurício Samy Silva ']),

  new Livro(3, 3, 'A Biblioteca da Meia-Noite', 'A Biblioteca da Meia-Noite é um romance incrível que fala dos infinitos rumos que a vida pode tomar e da busca incessante pelo rumo certo', ['Matt Haig', 'Adriana Fidalgo ']),
];

class ControleLivro {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(novoLivro: Livro): void {
    const novoCodigo = Math.max(...livros.map(l => l.codigo)) + 1;
    novoLivro.codigo = novoCodigo;
    livros.push(novoLivro);
  }

  excluir(codigo: number): void {
    const index = livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}

export default ControleLivro;
