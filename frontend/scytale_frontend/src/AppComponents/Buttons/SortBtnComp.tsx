import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { IPr } from "../MainComponent";

export default function DropDownButtonSort(props: any) {
  const { curState, updateStatFun } = props;

  const t = ()=>{
    let a=curState.sort((a:IPr,b:IPr)=>{
      return parseInt(a.creationDate) - parseInt(b.creationDate)
    });
    console.log(a);
    updateStatFun(a);
  }

  return (
    <DropdownButton id="dropdown-basic-button" title="Sort DEC">
      <Dropdown.Item>PR Number </Dropdown.Item>
      <Dropdown.Item>Title</Dropdown.Item>
      <Dropdown.Item >
        <Button onClick={t}>
           Creation Date
        </Button>
       
        </Dropdown.Item>
    </DropdownButton>
  );
}
