function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  console.log('cars',cars)
  
  const result = [ ...cars];
  
  // Tulis code-mu disini

  i=0;
  while(i<result.length){
    j=0;
    temp=[];

    while(j<result.length-1){
      if(result[j].year>result[j+1].year ){
        temp=result[j]

        result[j]=result[j+1]
        result[j+1]=temp

      }
      j+=1
    }

    i+=1

  }
  
  console.log('res',result)
   
  // Rubah code ini dengan array hasil sorting secara ascending
  return result;


}
