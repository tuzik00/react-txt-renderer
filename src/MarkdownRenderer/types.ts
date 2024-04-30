import type {
    ComponentType,
    ReactChildren,
} from 'react';

import type {
    MarkdownRendererTags,
    MarkdownRendererDirectives,
} from './constants';

export type MarkdownRendererComponentsMapType = {
    [MarkdownRendererTags.H1]: ComponentType<{ children: ReactChildren; }>;
    [MarkdownRendererTags.H2]: ComponentType<{ children: ReactChildren; }>;
    [MarkdownRendererTags.H3]: ComponentType<{ children: ReactChildren; }>;
    [MarkdownRendererTags.H4]: ComponentType<{ children: ReactChildren; }>;
    [MarkdownRendererTags.H5]: ComponentType<{ children: ReactChildren; }>;
    [MarkdownRendererTags.H6]: ComponentType<{ children: ReactChildren; }>;
    [MarkdownRendererTags.BLOCKQUOTE]: ComponentType<{ children: ReactChildren; }>;
    [MarkdownRendererTags.PARAGRAPH]: ComponentType<{ children: ReactChildren; }>;
    [MarkdownRendererTags.ANCHOR]: ComponentType<{ children: ReactChildren; href: string; title: string; }>;
    [MarkdownRendererTags.UL]: ComponentType<{ children: ReactChildren; }>;
    [MarkdownRendererTags.OL]: ComponentType<{ children: ReactChildren; }>;
    [MarkdownRendererTags.LI]: ComponentType<{ children: ReactChildren; }>;
    [MarkdownRendererTags.BOLD]: ComponentType<{ children: ReactChildren; }>;
    [MarkdownRendererTags.ITALIC]: ComponentType<{ children: ReactChildren; }>;
    [MarkdownRendererTags.STRIKETHROUGH]: ComponentType<{ children: ReactChildren; }>;
    [MarkdownRendererTags.SUP]: ComponentType<{ children: ReactChildren; }>;
    [MarkdownRendererTags.IMAGE]: ComponentType<{ children: ReactChildren; src: string; title: string; }>;
    [MarkdownRendererTags.CODE]: ComponentType<{ children: ReactChildren; }>;
    [MarkdownRendererTags.HR]: ComponentType<{ children: ReactChildren; }>;
    [MarkdownRendererTags.BR]: ComponentType<{ children: ReactChildren; }>;
    [MarkdownRendererDirectives.LINK]: ComponentType<{ children: ReactChildren; href: string; id?: string; title?: string; classNames?: string; }>;
    [MarkdownRendererDirectives.YOUTUBE]: ComponentType<{ title?: string; id: string; }>;
};

export type MarkdownRendererPropsType = {
    value?: string;
    componentsMap?: Partial<MarkdownRendererComponentsMapType>;
    allowedElements?: (MarkdownRendererDirectives | MarkdownRendererTags)[];
    disallowedElements?: (MarkdownRendererDirectives | MarkdownRendererTags)[];
};
