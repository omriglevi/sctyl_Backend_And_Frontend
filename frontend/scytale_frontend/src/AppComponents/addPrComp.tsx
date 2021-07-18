import { useState } from "react";
import { Col, Row, Container, Form, FormControl, Button } from "react-bootstrap";
import { hitApiFun } from "../hit_api";

export default function AddPrComp(props: any) {
  const [formState, updateFormState] = useState({
    pr_num: "2",
    authoer: "omri",
    status: "Closed",
    title: "t",
    description: "sd",
    lables: "",
  });

  // {"author":string, "description":string,"lables":[string],"pr_number":string,"status":string,"title":string}

const onChangeHandlerRadioBtns=(v:string)=>{
updateFormState({...formState,status:v})
}


const hitApiHandler = ()=>{

    const a:Array<string> =formState.lables.split(',')
 
    hitApiFun({author:formState.authoer ,
    description:formState.description,
    pr_number:formState.pr_num,
    status:formState.status , 
    title:formState.title,
    lables:a

    })
}



  return (
    <Container style={{ backgroundColor: "black", marginTop: "5px" }}>
      <Row>
        <Col
          style={{
            color: "white",
            backgroundColor: "#292929",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            padding: "5px",
          }}
          xl="5"
        >
          <Form id='addPrForm' className='prettyTable'>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Title
              </Form.Label>
              <Col sm="10">
                <Form.Control onChange={(e)=>updateFormState({...formState,title:e.target.value})} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Author
              </Form.Label>
              <Col sm="10">
                <Form.Control onChange={(e)=>updateFormState({...formState,authoer:e.target.value})}  />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Description
              </Form.Label>
              <Col sm="10">
                <Form.Control onChange={(e)=>updateFormState({...formState,description:e.target.value})} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Pr_Num
              </Form.Label>
              <Col sm="10">
                <Form.Control  onChange={(e)=>updateFormState({...formState,pr_num:e.target.value})}  />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Lables
              </Form.Label>
              <Col sm="10">
                <Form.Control  onChange={(e)=>updateFormState({...formState,lables:e.target.value})}/>
              </Col>
            </Form.Group>

            <Form.Group>
        
    <div key={`inline-radio`} className="mb-3">
      <Form.Check
        onChange={(e)=>onChangeHandlerRadioBtns(e.target.value)}

        inline
        value="Closed"
        label="Closed"
        name="group1"
        type='radio'
        id={`inline-radio-1`}
      />
      <Form.Check
        onChange={(e)=>onChangeHandlerRadioBtns(e.target.value)}
        inline
        value="Open"
        label="Open"
        name="group1"
        type='radio'
        id={`inline-radio-2`}
      />
      <Form.Check
        onChange={(e)=>onChangeHandlerRadioBtns(e.target.value)}

        inline
        value='Draft'
        label="Draft"
        name="group1"
        type='radio'
        id={`inline-radio-3`}
      />
    </div>
  
            </Form.Group>
                <Button onClick={hitApiHandler} >  Add</Button>
          </Form>
      
        </Col>
        
      </Row>
    </Container>
  );
}
