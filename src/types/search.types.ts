/**
 * Types pour la recherche et le filtrage
 */

// Opérateurs de filtre
export type FilterOperator =
    | "eq" // égal
    | "neq" // non égal
    | "gt" // supérieur à
    | "gte" // supérieur ou égal à
    | "lt" // inférieur à
    | "lte" // inférieur ou égal à
    | "in" // dans une liste
    | "nin" // pas dans une liste
    | "contains" // contient
    | "starts_with" // commence par
    | "ends_with" // termine par
    | "between"; // entre deux valeurs

// Filtre
export interface Filter {
    field: string;
    operator: FilterOperator;
    value: any;
}

// Tri
export interface Sort {
    field: string;
    direction: "asc" | "desc";
}

// Pagination
export interface Pagination {
    page: number;
    limit: number;
    total?: number;
    totalPages?: number;
}

// Requête de recherche
export interface SearchQuery {
    query?: string;
    filters?: Filter[];
    sort?: Sort[];
    pagination?: Pagination;
    facets?: string[]; // Champs pour lesquels on veut des facettes
}

// Facette
export interface Facet {
    field: string;
    values: {
        value: string | number | boolean;
        count: number;
        selected?: boolean;
    }[];
}

// Résultat de recherche
export interface SearchResult<T> {
    items: T[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
    facets?: Facet[];
    query?: string;
    filters?: Filter[];
    sort?: Sort[];
    took?: number; // Temps de réponse en ms
}

// Suggestion de recherche
export interface SearchSuggestion {
    text: string;
    type: "product" | "category" | "brand" | "query";
    highlight?: string;
    score?: number;
    id?: string;
    url?: string;
    image?: string;
}

// Historique de recherche
export interface SearchHistory {
    id: string;
    userId?: string;
    sessionId?: string;
    query: string;
    filters?: Filter[];
    resultsCount?: number;
    clickedResults?: {
        id: string;
        type: string;
        position: number;
    }[];
    timestamp: Date;
}