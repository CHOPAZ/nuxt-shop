export interface ICategory {
  id: number;
  name: string;
  alias: string;
}

export interface ICategoriesGET {
  categories: ICategory[];
}
