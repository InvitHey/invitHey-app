import React from 'react';

import { 
    Btn,
    TextBtn 
} from './styles'; 

interface Props {
    textBtn: string;
}

export function Tag_button( { textBtn }: Props ) {
    return (
        <Btn>
            <TextBtn>{textBtn}</TextBtn>
        </Btn>
    );
}