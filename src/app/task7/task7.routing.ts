
import { Task7Component}from "./task7.component";
import { RouterModule, Routes} from "@angular/router";



const arr:Routes=[

  {path : '',
  children:[
  {path:'',component:Task7Component},
  ],
},
]
export const taskRouting = RouterModule.forChild(arr);

