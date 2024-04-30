import type { FC } from 'react';

import React, {
    memo,
} from 'react';

import type { RecursiveRendererPropsType } from './types';

const RecursiveRenderer: FC<RecursiveRendererPropsType> = ({
    blocksList = [],
    renderComponent = () => null,
    maxDepth = 10,
}) => {
    if (maxDepth === 0) {
        return null;
    }

    const depth = maxDepth - 1;

    const components = blocksList.map((block, index) => {
        const Component = renderComponent(block);

        if (!Component) {
            return null;
        }

        const key = `${block.type}-${index}`;

        return (
          <Component
            key={key}
            type={block.type}
            depth={depth}
            data={block.data}
          >
            {block.children ? (
              <RecursiveRenderer
                blocksList={block.children}
                maxDepth={depth}
                renderComponent={renderComponent}
              />
                ) : null}
          </Component>
        );
    });

    return (
      <>
        {components}
      </>
    );
};

export default memo(RecursiveRenderer);
