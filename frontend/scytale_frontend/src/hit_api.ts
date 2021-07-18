import axios, { AxiosResponse } from 'axios' ;
import { IPr } from './AppComponents/MainComponent';



export const hitApiFun= async (obj:{"author":string, "description":string,"lables":Array<string>,"pr_number":string,"status":string,"title":string})=>{




        try {
          const r: AxiosResponse = await axios.post("http://localhost:3001/prs", obj);
          console.log(JSON.stringify(r));
        } catch (error: any) {
          console.log(error);
        }
      }
