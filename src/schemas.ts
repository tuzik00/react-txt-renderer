import Joi from 'joi';

export type BlockSchemaType = {
    type: string;
    data: Record<string, string | number> | null;
    children?: BlockSchemaType[];
};

export const blockSchema = Joi.array().items(
    Joi.object({
        type: Joi.string().required(),
        data: Joi.object().allow(null).allow({}),
        children: Joi.link('/'),
    }),
);
