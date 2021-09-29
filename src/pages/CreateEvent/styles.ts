import styled from '../../../styled-components';

export const Title = styled.Text`
    margin: 24px 0 16px 0;
`;

export const Case = styled.Text`
    ${(props) => {
        return `
        color: ${ props.theme.colors.darkGray};
        font-size: ${props.theme.typography.smallFont};
        font-family: ${props.theme.typography.regular};
        `
    }}
    margin-left: 20px;
`;

export const Div = styled.View`
    width: 48%;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Description = styled.Text`
    ${(props) => {
        return `
        color: ${ props.theme.colors.darkGray};
        font-size: ${props.theme.typography.smallFont};
        font-family: ${props.theme.typography.regular};
        `
    }}
`;

export const EventDescription = styled.View`
    background-color: #EDEFF3;
    padding: 16px;
    width: 100%;
    border-radius: 16px;
    margin-bottom: 24px;
`;

export const Category = styled.View`
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
`;

export const Separator = styled.View`
    width: 100%;
    margin: 0 auto;
    height: 1px;
    background-color: #EDEFF3;
`;

export const Section = styled.View`
    align-items: flex-start;
`;

export const InputsList = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
})`
    width: 100%;
`;

export const Condition = styled.Text`
    ${(props) => {
        return `
        color: ${ props.theme.colors.textGray};
        font-size: ${props.theme.typography.smallestFont};
        font-family: ${props.theme.typography.regular};
        `
    }}
`;