import {Document} from 'mongoose'

export interface IPr  {
  "status": string;
  "pr_number": string;
  "title": string;
  "description": string;
  "author": string;
  "lables": Array<string>;
}

