import Editora from '../modelo/Editora';
const editoras: Array<Editora> = [
  new Editora(1, 'Novatec Editora'),
  new Editora(2, 'Universo geek'),
  new Editora(3, 'Bertrand Brasil'),
];

class ControleEditora {
  getEditoras(): Array<Editora> {
    return editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : undefined;
  }
}

export default ControleEditora;
