import React from 'react';

const Select = ({ state }) => {
  return (
    <select
      className='select'
      value={state.role}
      name='Choose Roles'
      onChange={(e) => state.setRole(e.target.value)}
    >
      <option value='listener'>Msikilizaji (Anasikiliza tu)</option>
      <option value='speaker' >Msemaji (Atazungumza pia) </option>
      {/* <option value='moderator'>Msimamizi (Muongozaji)</option> */}
    </select>
  );
};

export default Select;