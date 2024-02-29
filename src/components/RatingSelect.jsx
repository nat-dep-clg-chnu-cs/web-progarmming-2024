import {useState} from "react";


const RatingItem = ({nmbr, handlCh, selected}) => {
    return (
        <li>
            <input
                type="radio"
                id={`num${nmbr}`}
                value={`${nmbr}`}
                onChange={handlCh}
                checked={selected === nmbr}
            />
            <label htmlFor={`num${nmbr}`}>{nmbr}</label>
        </li>
    )
}

const RatingSelect = ({select}) => {
    const [selected, setSelected] = useState(1)

    const handleChange = e => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    return (
        <ul className="rating">
            {[1,2,3,4,5,6,7,8,9,10].map(i => <RatingItem key={i}
                                                           nmbr={i}
                                                           selected={selected}
                                                           handlCh={handleChange} />)}
        </ul>
    );
};

export default RatingSelect;
