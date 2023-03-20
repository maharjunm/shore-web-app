import React from 'react';
import './SearchBar.scss';
import { FontAwesomeIcon as Font } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
interface Job {
    id: number;
    name: string;
}
interface Props{
  data: Job[];
  onJobSelect :(jobName: String)=> void;
}
const Searchbar: React.FC<Props> = ({ data,onJobSelect }) => {
  const [searchData, setSearchData] = React.useState('');
  const [searchResult, setSearchResults] = React.useState([]);
  const [selectData, setSelectData] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(event.target.value);
    setIsOpen(true);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const filteredData = data.filter((items) =>
      items.name.toLowerCase().includes(searchData.toLowerCase())
    );
    setSearchResults(filteredData);
  };
  const handleClick = (event: React.MouseEvent<HTMLOptionElement>) => {
    setSearchData(event.currentTarget.value);
    setIsOpen(false);
    onJobSelect(event.currentTarget.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="searchInput">
          <input id="search" type="search" placeholder="Search for job" onChange={handleChange} value={searchData} />
          <span className="searchIcons">
            <b><Font icon={faSearch}></Font></b>
          </span>
        </div>
        {searchData.length > 0 && isOpen && (
          <div className="searchResultLeft">
            {searchData.length > 0 && isOpen && data.filter((item) => item.name.toLowerCase().includes(searchData.toLowerCase()))
              .map((item) => (
                <div key={item.id} className="opt">
                  <option onClick={handleClick} value={item.name} id="options" >
                    {item.name}
                  </option>
                </div>
              ))}
          </div>
        )}
      </form>

    </>
  );
};
export default Searchbar;
