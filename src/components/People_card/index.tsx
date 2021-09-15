import React from 'react';

import { 
    Card,
    Btn, 
    PeopleImage,
    PeopleInfo,
    NickName,
    NormalName,
    BtnText,
    View
} from './styles';

interface Props {
    nickName: string;
    normalName: string;
    textBtn: string;
}

export function People_card( { nickName, normalName, textBtn }: Props ) {
    return(
        <Card>
            <PeopleInfo>
                <PeopleImage />
                <View>
                    <NickName>{nickName}</NickName>
                    <NormalName>{normalName}</NormalName>
                </View>
            </PeopleInfo>
            <Btn>
                <BtnText>{textBtn}</BtnText>
            </Btn>
        </Card>
    );
}