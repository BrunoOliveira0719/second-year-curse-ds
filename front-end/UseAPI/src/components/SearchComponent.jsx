import { Search } from "react-bootstrap-icons";
import "../App.css"

export default function SearchComponent(props) {
    return (
        <div className="organization-search"><input type="text" className="search" placeholder="Search: " 
      onChange={(e) => {
        const search = e.target.value;
        const response = props.SearchCoutry(search)

        if (!response) {
          props.setData(JSON.parse(localStorage.getItem("countries")))
        };
      }}/>
      <Search size={20} color='#fff'/>
      </div>
    );
};