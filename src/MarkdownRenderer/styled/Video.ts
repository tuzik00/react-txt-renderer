import { css } from '@emotion/react';
import styled from '@emotion/styled';

const getDefaultStyles = () => css`
    max-width: 100%;
    width: 688px;
    height: 180px;
    
    & > div {
        height: 100%;
    }

    @media (min-width: 768px) {
        height: 388px;
    }
`;

export default styled.div(getDefaultStyles);
