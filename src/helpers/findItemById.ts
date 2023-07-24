export const findItemById = (array: any[], id: string) =>
    array.find((el: { id: number; }) => el.id === Number(id));
