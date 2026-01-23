

function Select({handle, data}) {
    return (

        <select onChange={handle}>
        {data.map((m) => (
            <option key={m.id} value={m.id}>{m.name || m.thickness}</option>))}
        </select>
    );
}

export default Select;