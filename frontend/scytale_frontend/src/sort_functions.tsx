import { idText } from "typescript";
import { IPr } from "./AppComponents/MainComponent";








/* resolver function for sorting by asc/dec */
export const sortASC = (arr: Array<IPr>, sort_by: string, ascDes: string) => {
  if (sort_by === "date") {
    var t: Array<IPr> = [];
    if (ascDes === "asc") {
      return arr.sort((a, b) => {
        return parseInt(a.creationDate) - parseInt(b.creationDate);
      });
    } else {
      return arr.sort((a, b) => {
        return parseInt(b.creationDate) - parseInt(a.creationDate);
      });
    }
  } else if (sort_by === "pr_num") {
    if (ascDes === "asc") {
      return arr.sort((a, b) => {
        return parseInt(a.pr_number) - parseFloat(b.pr_number);
      });
    }
    return arr.sort((a,b)=>{
        return parseInt(b.pr_number) - parseFloat(a.pr_number);
    })
  } else if(sort_by==="title"){
     const x= arr.sort((a,b)=>{
             if(a.title<b.title){
                 return -1;
             }
             if(a.title>b.title){
                 return 1;
             }
             return 0
         })

         if(ascDes==='asc'){
             return x
         } else{
             return x.reverse() ;
         }
     
  }
}





export const filter_byFun =(arr: Array<IPr>, status:string)=>{

if(status==='Draft'){
return arr.filter((el)=>el.status==="Draft");
}
 else if(status==='Open'){
    return arr.filter((el)=> el.status==="Open");
}

else if(status==='Closed'){
    return arr.filter((el)=> el.status==="Closed");
}
return


}

