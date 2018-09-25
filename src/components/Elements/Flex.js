import styled from 'styled-components'

export const FlexRow = styled.div.attrs({
    justifyContent: props => props.justifyEnd ? `flex-end` : props.justifyBetween ? `space-between` : props.justifyAround ? `space-around` : props.justifyCenter ? `center` : `flex-start`,
    alignItems: props => props.alignEnd ? `flex-end` : props.alignCenter ? `center` : `flex-start`,
    flexWrap: props => props.wrap ? `wrap` : props.wrapReverse ? `wrap-reverse` : `nowrap`,
    padding: props => props.padding ? props.padding + "px" : "0",
    width: props => props.width ? props.width === "full" ? "100%" : props.width : "auto",
    marginTop: props => props.marginTop && typeof parseInt(props.marginTop) === 'number' ? parseInt(props.marginTop) + "px" : props.marginTop ? "10px" : "0",
    marginBottom: props => props.marginBottom && typeof parseInt(props.marginBottom) === 'number' ? parseInt(props.marginBottom) + "px" : props.marginBottom ? "10px" : "0",
    grow: props => ((g = props.grow) => g ? parseFloat(g) > -1 ? g : "1" : "0")()
})`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    flex-wrap: ${props => props.flexWrap};
    padding:${props => props.padding};
    width :${props => props.width};
    margin-top :${props => props.marginTop};
    margin-bottom :${props => props.marginBottom};
    max-width: 100%;
    flex-grow: ${props => props.grow}
`;

export const FlexColumn = styled.div.attrs({
    justifyContent: props => props.justifyEnd ? `flex-end` : props.justifyBetween ? `space-between` : props.justifyAround ? `space-around` : props.justifyCenter ? `center` : `flex-start`,
    alignItems: props => props.alignEnd ? `flex-end` : props.alignCenter ? `center` : `flex-start`,
    flexWrap: props => props.wrap ? `wrap` : props.wrapReverse ? `wrap-reverse` : `nowrap`,
    padding: props => props.padding ? props.padding + "px" : "0",
    width: props => props.width ? props.width === "full" ? "100%" : props.width : "auto",
    marginTop: props => props.marginTop && typeof parseInt(props.marginTop) === 'number' ? parseInt(props.marginTop) + "px" : props.marginTop ? "10px" : "0",
    marginBottom: props => props.marginBottom && typeof parseInt(props.marginBottom) === 'number' ? parseInt(props.marginBottom) + "px" : props.marginBottom ? "10px" : "0",
    grow: props => ((g = props.grow) => g ? parseFloat(g) > -1 ? g : "1" : "0")()
})`
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    flex-wrap: ${props => props.flexWrap};
    padding:${props => props.padding};
    width :${props => props.width};
    margin-top :${props => props.marginTop};
    margin-bottom :${props => props.marginBottom};
    max-width: 100%;
    flex-grow: ${props => props.grow}
`;