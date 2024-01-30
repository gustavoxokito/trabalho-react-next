import Editora from '../modelo/Editora';

const editoras: Array<Editora> = [
  new Editora(1, 'Abril Editora'),
  new Editora(2, 'Pearson Editora '),
  new Editora(3, 'Editora  Moderna'),
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

