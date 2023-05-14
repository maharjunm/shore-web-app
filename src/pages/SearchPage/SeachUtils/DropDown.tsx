import React, { useState } from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './DropDown.scss';
interface Props{
  values:string[],
  name: string,
  updateSearchContents: (field:string,value:string|number|Set<string>)=> void,

}
export const DropDown = (props:Props) => {

  const { values, name, updateSearchContents } = props;

  const [ rotation, setRotation ] = useState('rotateup');
  const [ dropDownValues, setDropDownValues] = useState(new Set<string>());


  const capitalizeFirstLetter = (str:string) =>{
    return str.charAt(0).toUpperCase()+str.slice(1);
  };
  const dropDownName = capitalizeFirstLetter(name);

  const openCloseFields = () => {
    setRotation((updatedRotation)=>{
      if(rotation==='rotatedown'){
        return 'rotateup';
      }
      return 'rotatedown';
    });
  };
  const updateDropDown = (e:any)=>{
    const { id, checked } = e.target;
    const newDropDownValues = new Set<string>(dropDownValues);
    if(checked) newDropDownValues.add(id);
    if(!checked) newDropDownValues.delete(id);
    setDropDownValues((updatedDropDownValues)=>{
      updateSearchContents(name,newDropDownValues);
      console.log(newDropDownValues);
      return newDropDownValues;
    });
  };

  return (
    <div className='selectFields'>
      <div className="pair">
        <FA className={rotation} icon={faPlay} onClick={openCloseFields} />
        <label className='box'> {dropDownName} </label>
      </div>
      <div className={rotation==='rotatedown'?'fields show':'fields hide'}>
        {
          values.map((value:string)=>(
            <div className="pair" key={value}>
              <input type="checkbox" name={value} id={value} onChange={updateDropDown} />
              <label htmlFor={value}>{value}</label>
            </div>
          ))
        }
      </div>
    </div>
  );
};