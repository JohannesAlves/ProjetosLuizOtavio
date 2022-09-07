// interface is like a object (it's perfect to model object)
interface TypeName {
  firstname: string;
}

interface TypeLastName {
  lastname: string;
}

interface TypeFullname {
  fullName(): string;
}

interface TypePerson extends TypeName, TypeLastName, TypeFullname {}

export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

const empresa1 = new Empresa('Facebook', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Johannes', 'Alves');
empresa1.adicionaColaborador(colaborador1);

empresa1.mostrarColaboradores();
