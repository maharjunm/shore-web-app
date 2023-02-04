import React from 'react';
import './SearchBar.scss';
interface Props {
    data: {
        id: number;
        name: string;
    }[];
}
const Searchbar: React.FC<Props> = ({ data }) => {
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
    console.log(event.currentTarget.value);
    setSearchData(event.currentTarget.value);
    setIsOpen(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input id="search" type="text" placeholder="search for job" onChange={handleChange} value={searchData}  className="searchInput"/>
      </form>
      {searchData.length > 0 && isOpen && (
        <div className="searchResult">
          {searchData.length > 0 && isOpen && data.filter((item) => item.name.toLowerCase().includes(searchData.toLowerCase()))
            .map((item) => (
              <div key={item.id}>
                <option onClick={handleClick} value={item.name} id="options" >
                  {item.name}
                </option>
              </div>
            ))}
        </div>
      )}
    </>
  );
};
export default Searchbar;
