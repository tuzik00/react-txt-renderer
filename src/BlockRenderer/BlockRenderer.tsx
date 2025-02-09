import type { FC } from 'react';

import React, {
    memo,
    useMemo,
    useCallback,
} from 'react';

import type { BlockSchemaType } from '@/schemas';

import RecursiveRenderer from './RecursiveRenderer';
import type { BlockRendererPropsType } from './types';

const BlockRenderer: FC<BlockRendererPropsType> = ({
    value = '',
    componentsMap = {},
    maxDepth = 10,
    disallowedBlocks = [],
}) => {
    const blocksList = useMemo(
        () => {
            try {
                return JSON.parse(value) as BlockSchemaType[];
            } catch (e) {
                console.error(e);
                return [];
            }
        },
        [
            value,
        ],
    );

    const renderComponent = useCallback(
        (block: BlockSchemaType) => {
            const Component = componentsMap[block.type];

            if (disallowedBlocks?.includes(block.type)) {
                return null;
            }

            if (!Component) {
                return null;
            }

            return Component;
        },
        [
            componentsMap,
            disallowedBlocks,
        ],
    );

    return (
      <RecursiveRenderer
        blocksList={blocksList}
        maxDepth={maxDepth}
        renderComponent={renderComponent}
      />
    );
};

export default memo(BlockRenderer);
