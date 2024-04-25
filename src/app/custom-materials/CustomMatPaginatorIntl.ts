import { MatPaginatorIntl } from '@angular/material/paginator';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomMatPaginatorIntl extends MatPaginatorIntl {
  override itemsPerPageLabel = 'Книг на странице:';
  override nextPageLabel     = 'Следующая страница';
  override previousPageLabel = 'Предыдущая страница';
  override firstPageLabel = `Первая страница`;
  override lastPageLabel = `Последняя страница`;

  override getRangeLabel: (page: number, pageSize: number, length: number) => string =
    (page: number, pageSize: number, length: number) => {
      if (length === 0) {
        return `Страница 1 of 1`;
      }
      const amountPages = Math.ceil(length / pageSize);
      return `Страница ${page + 1} из ${amountPages}`;
    }
}
