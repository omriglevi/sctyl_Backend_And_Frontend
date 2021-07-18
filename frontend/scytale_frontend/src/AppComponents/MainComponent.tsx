import axios, { AxiosResponse } from "axios";
import { parse } from "path";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AddPrComp from "./addPrComp";
import arrowDown from "../iconsBS/arrow-down.svg";
import arrowUp from "../iconsBS/arrow-up.svg";
import { filter_byFun, sortASC } from "../sort_functions";


export interface IPr {
  _id: string;
  status: string;
  pr_number: string;
  title: string;
  description: string;
  author: string;
  lables: Array<string>;
  creationDate: string;
}

export default function MainComponent(props: any) {
  const initialState: Array<IPr> = [];
  const [prList, updatePrList] = useState(initialState); // The full PR list from DB unsorted and unfiltered

  const getPrsFromDB = async () => {
    try {
      const r: AxiosResponse = await axios.get("http://localhost:3001/prs");
      updatePrList(r.data.items);
      console.log(r);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPrsFromDB();
  }, []);
  return (
    <Container>
       
            
      <Row>
        <Col>
          <Row>
          
            <PrTable curState={prList} updateStateF={updatePrList} />
          </Row>
          <Row>
            <AddPrComp/>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

function PrTable(props: any) {
  const initialState: Array<IPr> = new Array<IPr>();
  const [prList, updatePrList] = useState(initialState); // The full PR list from DB unsorted and unfiltered
  const { curState, updateStateF } = props;
  const [fUpdate, hitFUpdate] = useState(true);
  const triggerForceUpdate = () => {
    hitFUpdate(!fUpdate);
  };
  useEffect(() => {
    if (prList.length < 1) {
      updatePrList(curState);
    }
  }, [props, triggerForceUpdate]);

  return (
    <Container>

<Button style={{borderRadius:'15px', margin:'1px'}}
          onClick={() => {
            let d  = filter_byFun(prList,"Open");
            updateStateF(d);
            triggerForceUpdate();
            console.log(d)
          }}
        >
             Open Prs
            </Button>
            {/* 
            <Button style={{borderRadius:'15px', margin:'1px'}}
          onClick={() => {
            let d = filter_byFun(prList,"Closed");
            updateStateF(d);
            triggerForceUpdate();
            return;
          }}
        >
             Closed Prs
            </Button>
            <Button style={{borderRadius:'15px', margin:'1px'}}
          onClick={() => {
            let d = filter_byFun(prList,"Draft");
            updateStateF(d);
            triggerForceUpdate();
            return;
          }}
        >
            Draft
            </Button> */}



      
      <table className=" prettyTable ">
        <thead>
          <th> ID</th>
          <th> Author</th>
          <th> Description</th>
          <th>
            <img src={arrowDown} onClick={()=>{
              let d=sortASC(prList,"pr_num","dec");
              updateStateF(d);
              triggerForceUpdate();
              return;

            }}/>
             PR_num
             <img src={arrowUp} onClick={()=>{
              let d=sortASC(prList,"pr_num","asc");
              updateStateF(d);
              triggerForceUpdate();
              return;

            }} />
             </th>
          <th>Status</th>
          <th> 
            <img src ={arrowDown} onClick={()=>{
              let d = sortASC(prList,"title","dec") ;
              updateStateF(d);
              triggerForceUpdate(); 
            }}/>
            Title
            <img src={arrowUp} onClick={()=>{
                   let d = sortASC(prList,"title","asc") ;
                   updateStateF(d);
                   triggerForceUpdate(); 
            }} />
            
            </th>
          <th> Lables</th>
          <th>
            <img
              src={arrowDown}
              onClick={() => {
                let d = sortASC(prList, "date", "dec");
                updateStateF(d);
                triggerForceUpdate();
                return;
              }}
            />
            Date Created
            <img
              src={arrowUp}
              onClick={() => {
                let d = sortASC(prList, "date", "asc");

                updateStateF(d);
                triggerForceUpdate();
                return;
              }}
            />
          </th>
        </thead>
        <tbody>
          {prList.map((item) => {
            return (
              <tr>
                <td key={item._id}> {item._id}</td>
                <td key ={item.author}> {item.author}</td>
                <td key ={item.description}> {item.description}</td>
                <td key={item.pr_number}> {item.pr_number}</td>
                <td key={item.status}> {item.status}</td>
                <td key={item.title}> {item.title}</td>
                <td key={item.lables.join()}> {item.lables.join()}</td>
                <td key={item.creationDate}> {item.creationDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
