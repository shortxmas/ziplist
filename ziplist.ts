function zipList(listOne: any[], listTwo: any[]) {
  let result = [];
  const length = Math.min(listOne.length, listTwo.length);

  for (let i = 0; i < length; i++) {
    result.push(listOne[i]);
    result.push(listTwo[i]);
  }

  return result;
}

console.log(zipList(["a", "b", "c"], [1, 2, 3]));

function zipListTheFunctionalWay(listOne: any[], listTwo: any[]) {
  return listOne
    .reduce((acc, current, index) => {
      return acc.concat(current, listTwo[index]);
    }, [])
    .filter((item: any) => item !== undefined);
}
console.log(zipListTheFunctionalWay(["a", "b", "c"], [1, 2, 3]));
