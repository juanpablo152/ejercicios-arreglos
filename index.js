let numbers = [1, 2, 3, 4];
const m = 4;


/**
 * 
 * @description: esta funcion se encarga de mover los numeros m veces a la derecha y valida si es menor a 0 para no hacer nada retorna los numeros originales tal cual como viene
 * @param {*} numbers array de numeros del enunciado se puede expandir mas para probar
 * @param {*} moves el valor m del enunciado que debe ser m >= 0
 * @returns un array con los numeros movidos m veces a la derecha
 */
const moveRight = (numbers, moves = 0) => {
    if (moves <= 0) return numbers;
    for (let i = 0; i < moves; i++) {
        const last = numbers.pop();
        numbers.unshift(last);
    }
    return numbers;
};

//console.log(moveRight(numbers, 3));

for (let index = 1; index <= m; index++) {
    console.log(moveRight(numbers, index), " moves", index);
}