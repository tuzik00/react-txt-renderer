import type {
    FC,
    ReactNode,
} from 'react';

import type { BlockSchemaType } from '@/schemas';

export type BlockRendererComponentType<DataType = any> = FC<{
    type: string;
    depth: number;
    data: DataType;
    children: ReactNode;
}>;

export type BlockRendererComponentsMapType = {
    [key: string]: BlockRendererComponentType;
};

export type RecursiveRendererPropsType = {
    blocksList: BlockSchemaType[];
    renderComponent: (block: BlockSchemaType) => BlockRendererComponentType | null;
    maxDepth: number;
};

export type BlockRendererPropsType = {
    value: string;
    componentsMap?: BlockRendererComponentsMapType;
    disallowedBlocks?: string[];
    maxDepth?: number;
};
