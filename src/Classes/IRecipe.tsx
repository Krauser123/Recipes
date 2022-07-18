
export interface IRecipe {
    Id: number;
    Title: string;
    Amount: string;
    Utility: string | null;
    Tags: string[];
    Type: string | null;
    Ingredients: string[];
    Ingredients2: Ingredients2;
    Steps: string[];
}

export interface Ingredients2 {
    TitleIngredients2: string;
    Ingredients: string[];
}