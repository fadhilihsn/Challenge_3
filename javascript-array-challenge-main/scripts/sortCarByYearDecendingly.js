function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  

  i=0;
  while(i<result.length){
    j=0;
    temp=[];

    while(j<result.length-1){
      if(result[j].year<result[j+1].year ){
        temp=result[j]

        result[j]=result[j+1]
        result[j+1]=temp

      }
      j+=1
    }

    i+=1

  }

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
