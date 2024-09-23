import type {
    ComponentType,
    ReactNode,
} from 'react';

import type {
    MarkdownRendererTags,
    MarkdownRendererDirectives,
} from './constants';

export type MarkdownRendererComponentsMapType = {
    [MarkdownRendererTags.H1]: ComponentType<{ children: ReactNode; }>;
    [MarkdownRendererTags.H2]: ComponentType<{ children: ReactNode; }>;
    [MarkdownRendererTags.H3]: ComponentType<{ children: ReactNode; }>;
    [MarkdownRendererTags.H4]: ComponentType<{ children: ReactNode; }>;
    [MarkdownRendererTags.H5]: ComponentType<{ children: ReactNode; }>;
    [MarkdownRendererTags.H6]: ComponentType<{ children: ReactNode; }>;
    [MarkdownRendererTags.BLOCKQUOTE]: ComponentType<{ children: ReactNode; }>;
    [MarkdownRendererTags.PARAGRAPH]: ComponentType<{ children: ReactNode; }>;
    [MarkdownRendererTags.ANCHOR]: ComponentType<{ children: ReactNode; href: string; title: string; }>;
    [MarkdownRendererTags.UL]: ComponentType<{ children: ReactNode; }>;
    [MarkdownRendererTags.OL]: ComponentType<{ children: ReactNode; }>;
    [MarkdownRendererTags.LI]: ComponentType<{ children: ReactNode; }>;
    [MarkdownRendererTags.BOLD]: ComponentType<{ children: ReactNode; }>;
    [MarkdownRendererTags.ITALIC]: ComponentType<{ children: ReactNode; }>;
    [MarkdownRendererTags.STRIKETHROUGH]: ComponentType<{ children: ReactNode; }>;
    [MarkdownRendererTags.SUP]: ComponentType<{ children: ReactNode; }>;
    [MarkdownRendererTags.IMAGE]: ComponentType<{ children: ReactNode; src: string; title: string; }>;
    [MarkdownRendererTags.CODE]: ComponentType<{ children: ReactNode; }>;
    [MarkdownRendererTags.HR]: ComponentType<{ children: ReactNode; }>;
    [MarkdownRendererTags.BR]: ComponentType<{ children: ReactNode; }>;
    [MarkdownRendererDirectives.LINK]: ComponentType<{ children: ReactNode; href: string; id?: string; title?: string; classNames?: string; }>;
    [MarkdownRendererDirectives.YOUTUBE]: ComponentType<{ title?: string; id: string; }>;
};

export type MarkdownRendererPropsType = {
    value?: string;
    componentsMap?: Partial<MarkdownRendererComponentsMapType>;
    allowedElements?: (MarkdownRendererDirectives | MarkdownRendererTags)[];
    disallowedElements?: (MarkdownRendererDirectives | MarkdownRendererTags)[];
};
