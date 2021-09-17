import styled from '../../../styled-components';

export const FilterList = styled.View`
    background-color: #FAFAFA;
`;

export const Container = styled.View`
    flex: 1; 
    padding: 0 16px;
    background-color: #FCFCFC; 
`;

export const Header = styled.View`
    margin-bottom: 16px;
    background-color: #FAFAFA;
    padding: 0 16px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const FilterButtonList = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})`
    margin-top: 8px;
    flex-direction: row;
`;

export const Main = styled.View`
    flex: 1;
    background-color: #FCFCFC;
`;

