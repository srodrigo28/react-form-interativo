export function Card( { name, age, salary  } : any) {
   return(
    <div className="bg-emerald-600 p-3 rounded-md text-white">
        <h3> {name} </h3>
        <p>  {age} </p>
        <p>  {salary} </p>

    </div>
   ) 
}