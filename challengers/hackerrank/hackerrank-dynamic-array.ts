// https://www.hackerrank.com/challenges/arrays-ds/problem

function dynamicArray(n: number, queries: string[][]): number[] {
  const arr = new Array<number>(n);

  for (let i = 0; i < n; i++) {
    arr[i] = 0;
  }

  const results: number[] = [];
  for (const query of queries) {
    if (query.length !== 3) {
      throw new Error(`Query inválida: tamanho incorreto (${query.length})`);
    }

    const [typeStr, indexStr, valueStr] = query;

    const type = parseInt(typeStr);
    const index = parseInt(indexStr) || 0;
    const value = parseInt(valueStr) || 0;

    if (isNaN(type) || type < 1 || type > 3) {
      throw new Error(`Tipo de consulta inválido: ${type}`);
    }

    if (index < 0 || index >= n) {
      throw new Error(`Índice inválido: ${index}`);
    }

    if (type === 1 && isNaN(value)) {
      throw new Error(`Valor inválido: ${value}`);
    }

    switch (type) {
      case 1:
        arr.push(value);
        break;

      case 2:
        arr[index] = value;
        break;

      case 3:
        results.push(arr[index]);
        break;

      default:
        break;
    }
  }

  return results;
}
