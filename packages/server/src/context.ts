import { GBooksAPI } from "./data-sources/gbooks";

export type DataSourceContext = {
    dataSources: {
        gbooks : GBooksAPI;
    }
}
