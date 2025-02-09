import React from 'react';

import {
    MarkdownRendererTags,
    MarkdownRendererDirectives,
} from './constants';

import type { MarkdownRendererComponentsMapType } from './types';

import {
    ImageStyled,
    VideoStyled,
} from './styled';

export const defaultComponents: MarkdownRendererComponentsMapType = {
    [MarkdownRendererTags.H1]: ({ children }) => (
      <h1>
        {children}
      </h1>
    ),

    [MarkdownRendererTags.H2]: ({ children }) => (
      <h2>
        {children}
      </h2>
    ),

    [MarkdownRendererTags.H3]: ({ children }) => (
      <h3>
        {children}
      </h3>
    ),

    [MarkdownRendererTags.H4]: ({ children }) => (
      <h4>
        {children}
      </h4>
    ),

    [MarkdownRendererTags.H5]: ({ children }) => (
      <h5>
        {children}
      </h5>
    ),

    [MarkdownRendererTags.H6]: ({ children }) => (
      <h6>
        {children}
      </h6>
    ),

    [MarkdownRendererTags.BLOCKQUOTE]: ({ children }) => (
      <blockquote>
        {children}
      </blockquote>
    ),

    [MarkdownRendererTags.PARAGRAPH]: ({ children }) => (
      <p>
        {children}
      </p>
    ),

    [MarkdownRendererTags.ANCHOR]: ({
        children,
        href,
        title,
    }) => (
      <a
        href={href}
        title={title}
      >
        {children}
      </a>
    ),

    [MarkdownRendererTags.IMAGE]: ({ src, title }) => (
      <ImageStyled
        src={src}
        alt={title}
      />
    ),

    [MarkdownRendererTags.LI]: ({ children }) => (
      <li>
        {children}
      </li>
    ),

    [MarkdownRendererTags.UL]: ({ children }) => (
      <ul>
        {children}
      </ul>
    ),

    [MarkdownRendererTags.OL]: ({ children }) => (
      <ol>
        {children}
      </ol>
    ),

    [MarkdownRendererTags.BOLD]: ({ children }) => (
      <b>
        {children}
      </b>
    ),

    [MarkdownRendererTags.ITALIC]: ({ children }) => (
      <i>
        {children}
      </i>
    ),

    [MarkdownRendererTags.STRIKETHROUGH]: ({ children }) => (
      <s>
        {children}
      </s>
    ),

    [MarkdownRendererTags.SUP]: ({ children }) => (
      <sup>
        {children}
      </sup>
    ),

    [MarkdownRendererTags.BR]: () => (
      <br />
    ),

    [MarkdownRendererTags.HR]: () => (
      <hr />
    ),

    [MarkdownRendererTags.CODE]: ({ children }) => {
        // Для старых статей в обзорах ситилинк, сейчас для вставки видео используется
        // тип code, формат разметки такой ```youtube id```.
        const text = (children as unknown as string[])[0] || '';

        if (text.indexOf(MarkdownRendererDirectives.YOUTUBE) === 0) {
            const [, id] = text.split(' ');

            return (
              <VideoStyled>
                <iframe
                  allowFullScreen
                  width={'100%'}
                  height={'100%'}
                  frameBorder={'0'}
                  title={'YouTube Видео'}
                  src={`https://www.youtube.com/embed/${id}`}
                  allow={'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'}
                />
              </VideoStyled>
            );
        }

        return (
          <code>
            {children}
          </code>
        );
    },

    [MarkdownRendererDirectives.YOUTUBE]: ({ title, id }) => (
      <VideoStyled>
        <iframe
          allowFullScreen
          width={'100%'}
          height={'100%'}
          frameBorder={'0'}
          title={title || 'YouTube Видео'}
          src={`https://www.youtube.com/embed/${id}`}
          allow={'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'}
        />
      </VideoStyled>
    ),

    [MarkdownRendererDirectives.LINK]: ({
        children,
        href,
        id,
        title,
        classNames,
    }) => (
      <a
        id={id}
        href={href}
        title={title}
        className={classNames}
      >
        {children}
      </a>
    ),
};
