import React from 'react';
import './Location.scss';
interface city {
    id: number;
    name: string;
    state: string;
}

const Location = () => {
    const [location, setLocation] = React.useState('');
    const [cityData, setCityData] = React.useState([]);
    const [searchResult, setSearchResult] = React.useState([]);
    const [isOpen, setIsOpen] = React.useState(true);
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const filteredData = cityData.filter((items) =>
            items.name.toLowerCase().includes(location.toLowerCase())
        );
        setSearchResult(filteredData);
    };

    React.useEffect(() => {
        if (location) {
            fetch('../../../public/cities.json')
                .then((response) => response.json())
                .then((data) => setCityData(data));
        }
    }, [location]);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(event.target.value);
        setIsOpen(true);
    };
    const handleClick = (event: React.MouseEvent<HTMLOptionElement>) => {
        setLocation(event.currentTarget.value);
        setIsOpen(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={location}
                    onChange={handleChange}
                    placeholder="Enter location"
                    className="location"
                />
            </form>
            {location.length > 0 && isOpen && (
                <div className="searchResult">
                    {location.length > 0 &&
                        isOpen &&
                        cityData
                            .filter((item) =>
                                item.name
                                    .toLowerCase()
                                    .includes(location.toLowerCase())
                            )
                            .map((item) => (
                                <div key={item.id}>
                                    <option
                                        onClick={handleClick}
                                        value={item.name}
                                        id="options"
                                    >
                                        {item.name},{item.state}
                                    </option>
                                </div>
                            ))}
                </div>
            )}
        </>
    );
};

export default Location;
