import type {
    FC,
} from 'react';

import React from 'react';

import MarkdownRenderer, {
    MarkdownRendererDirectives,
    MarkdownRendererTags,
} from '@/MarkdownRenderer';

import type { MarkdownRendererComponentsMapType } from '@/MarkdownRenderer';

import type { ClearMarkdownPropsType } from './types';

const componentsMap: Partial<MarkdownRendererComponentsMapType> = {
    [MarkdownRendererTags.ANCHOR]: ({ title }) => <>{title}</>,
    [MarkdownRendererTags.IMAGE]: () => null,
    [MarkdownRendererTags.BLOCKQUOTE]: ({ children }) => <div>{children}</div>,
    [MarkdownRendererTags.HR]: () => null,
    [MarkdownRendererTags.BOLD]: ({ children }) => <>{children}</>,
    [MarkdownRendererTags.ITALIC]: ({ children }) => <>{children}</>,
    [MarkdownRendererTags.STRIKETHROUGH]: ({ children }) => <>{children}</>,
    [MarkdownRendererTags.SUP]: ({ children }) => <>{children}</>,
    [MarkdownRendererTags.H1]: ({ children }) => <div>{children}</div>,
    [MarkdownRendererTags.H2]: ({ children }) => <div>{children}</div>,
    [MarkdownRendererTags.H3]: ({ children }) => <div>{children}</div>,
    [MarkdownRendererTags.H4]: ({ children }) => <div>{children}</div>,
    [MarkdownRendererTags.H5]: ({ children }) => <div>{children}</div>,
    [MarkdownRendererTags.H6]: ({ children }) => <div>{children}</div>,
    [MarkdownRendererTags.CODE]: () => null,

    [MarkdownRendererDirectives.LINK]: ({ title }) => <>{title}</>,
    [MarkdownRendererDirectives.YOUTUBE]: () => null,
};

const ClearMarkdown: FC<ClearMarkdownPropsType> = ({
    value,
}) => (
  <MarkdownRenderer
    componentsMap={componentsMap}
    value={value}
  />
);

export default ClearMarkdown;
