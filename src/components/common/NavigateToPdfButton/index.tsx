import * as React from 'react';
import ButtonLink from "../ButtonLink";

const NavigateToPdfButton = ({ pdfFile }) => {
    return (
        <a href={pdfFile} target="_blank" rel="noreferrer">
            <ButtonLink text="Learn more" size='' disabled={false} onClickCallback={undefined}/>
        </a>
    );
};

export default NavigateToPdfButton;
