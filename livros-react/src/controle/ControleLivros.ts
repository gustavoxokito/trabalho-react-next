import Livro from '../../src/modelo/Livro';

const livros: Array<Livro> = [
  new Livro(1, 1, 'Mentes Extraordinárias', 
  'Sabemos que todo mundo reconhece aqueles que inovam, criam ou provocam situações que, de alguma forma, chamam a atenção. Então, faz sentido afirmar que o segredo do sucesso pode ser resumido em ser criativo. Neste livro, o leitor entrará em contato com técnicas profissionais para desenvolver toda a capacidade do cérebro e impressionar com novas ideias.', ['Alberto Dell’Isola']),

  new Livro(2, 2, 'O poder do hábito', 'Charles Duhigg, repórter investigativo do New York Times, mostra que a chave para o sucesso é entender como os hábitos funcionam - e como podemos transformá-los.', ['Rafael Mantovani']),

  new Livro(3, 3, 'React - Aprenda Praticando', 'React é uma biblioteca para a criação de sites, interfaces gráficas e aplicações web, criada pelo Facebook, e seu uso tem crescido muito, sendo usada por grandes empresas, como Netflix, Walmart e The New York Times', ['Maurício Samy Silva']),
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
