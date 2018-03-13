import {NgModule} from '@angular/core';
import {FilterLastPipe} from './filter-last.pipe';
import {FormatRelativeTimePipe} from './format-relative-time.pipe';
import {PaginationPipe} from './pagination.pipe';
import {SearchEmployeesPipe} from './search-employees.pipe';


@NgModule({
  exports: [
    FilterLastPipe,
    FormatRelativeTimePipe,
    PaginationPipe,
    SearchEmployeesPipe
  ],
  declarations: [
    FilterLastPipe,
    FormatRelativeTimePipe,
    PaginationPipe,
    SearchEmployeesPipe
  ]
})
export class AppPipesModule {}
