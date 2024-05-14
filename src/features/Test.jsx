function Test() {
  const numbers = [1, 5, 9, 3, 7, 6, 2];
  console.log(numbers);

  const ascend = numbers.sort((a, b) => a - b);
  console.log(ascend);

  const decend = numbers.sort((a, b) => b - a);
  console.log(decend);

  const min = Math.min(...numbers);
  console.log(min);

  const max = Math.max(...numbers);
  console.log(max);

  const letters = ["apples", "bananas", "mangos", "grapes", "oranges"];
  console.log(letters);

  const sort = letters.sort((a, b) => (a > b ? 1 : -1));
  console.log(sort);

  const sortRev = letters.sort((a, b) => (a > b ? -1 : 1));
  console.log(sortRev);

  return (
    <div>
      <h1>Yo</h1>
    </div>
  );
}
export default Test;
