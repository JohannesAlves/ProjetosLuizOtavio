// exclusive type of ts.
const dadosCliente: readonly [number, string] = [1, 'Johannes'];
const dadosCliente1: [number, string, string?] = [1, 'Teste'];

dadosCliente1[2] = 'Valor opcional';
console.log(dadosCliente1);
