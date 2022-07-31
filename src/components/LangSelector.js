import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
function LangSelector() {
    function handleChange(e) {
        e.preventDefault();
        alert(e.target.value);
    }
    return (
        <select onChange={handleChange}>
            <option>fr</option>
            <option >en</option>
        </select>
    );
}
export default LangSelector;