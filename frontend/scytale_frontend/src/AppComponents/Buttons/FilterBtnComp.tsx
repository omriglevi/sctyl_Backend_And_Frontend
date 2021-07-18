import { Dropdown, DropdownButton } from "react-bootstrap";



export default function DropDownButtonFilter(props:any){
    return(
       <DropdownButton id="dropdown-basic-button" title="Sort ASC">
    <Dropdown.Item >PR ID </Dropdown.Item>
    <Dropdown.Item >Title</Dropdown.Item>
    <Dropdown.Item >Creation Date</Dropdown.Item>
  </DropdownButton>
    )
   
  }