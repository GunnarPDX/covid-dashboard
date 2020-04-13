import './country-table.scss'
import React from 'react'

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CountryTable = (props) => {

    const renderCountries = () => {
        return(
            <tbody className={'is-borderless'}>
            {props.countries.data.map((data, index) => {
                if(data.country !== '') {return (
                    <tr key={index}>
                        <td>
                            <p className={'country-title'}>{data.country}</p>
                        </td>
                        <td>
                            <p className={'cases-title'}>{numberWithCommas(data.cases)}</p>
                        </td>
                    </tr>
                )} else return null;
            })}
            </tbody>
        )
    };

    return (
        <div className={'tile-container'}>
            <div className={'table-container scrollable-body'}>
                <table className="table table is-fullwidth">
                    <thead>
                        <tr>
                            <th>
                                <h2>Country</h2>
                            </th>
                            <th>
                                <h2>Cases</h2>
                            </th>
                        </tr>
                    </thead>
                    {renderCountries()}
                </table>
            </div>
        </div>
    )
};

export default CountryTable;