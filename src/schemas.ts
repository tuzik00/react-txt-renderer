export type BlockSchemaType = {
    type: string;
    data: Record<string, string | number> | null;
    children?: BlockSchemaType[];
};
