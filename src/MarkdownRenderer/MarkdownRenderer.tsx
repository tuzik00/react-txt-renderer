import type { FC } from 'react';

import React, {
    memo,
    useMemo,
} from 'react';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkSupersub from 'remark-supersub';
import remarkDirective from 'remark-directive';

import youtubePlugin from './plugins/youtube';
import linkPlugin from './plugins/link';

import {
    MarkdownRendererTags,
    MarkdownRendererDirectives,
} from './constants';

import { defaultComponents } from './defaultComponents';

import { clearMarkdown } from './utils';
import type { MarkdownRendererPropsType } from './types';

const MarkdownRenderer: FC<MarkdownRendererPropsType> = ({
    value = '',
    componentsMap = {},
    allowedElements = [
        MarkdownRendererTags.H1,
        MarkdownRendererTags.H2,
        MarkdownRendererTags.H3,
        MarkdownRendererTags.H4,
        MarkdownRendererTags.H5,
        MarkdownRendererTags.H6,
        MarkdownRendererTags.BLOCKQUOTE,
        MarkdownRendererTags.PARAGRAPH,
        MarkdownRendererTags.ANCHOR,
        MarkdownRendererTags.UL,
        MarkdownRendererTags.OL,
        MarkdownRendererTags.LI,
        MarkdownRendererTags.BOLD,
        MarkdownRendererTags.ITALIC,
        MarkdownRendererTags.STRIKETHROUGH,
        MarkdownRendererTags.SUP,
        MarkdownRendererTags.IMAGE,
        MarkdownRendererTags.CODE,
        MarkdownRendererTags.HR,
        MarkdownRendererTags.BR,
        MarkdownRendererDirectives.YOUTUBE,
        MarkdownRendererDirectives.LINK,
    ],
    disallowedElements,
}) => {
    const clearedMarkdown = useMemo(
        () => clearMarkdown(value),
        [
            value,
        ],
    );

    const components: Record<string, unknown> = {
        ...defaultComponents,
        ...componentsMap,
    };

    const allowedEl = useMemo(
        () => allowedElements?.filter((item) => !disallowedElements?.includes(item)),
        [
            allowedElements,
            disallowedElements,
        ],
    );

    return (
      <ReactMarkdown
        allowedElements={allowedEl}
        components={components}
        remarkPlugins={[
            remarkGfm,
            remarkSupersub,
            remarkDirective,
            youtubePlugin,
            linkPlugin,
        ]}
      >
        {clearedMarkdown}
      </ReactMarkdown>
    );
};

export default memo(MarkdownRenderer);
