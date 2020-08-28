import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchServiceInterface } from './interface/search.service.interface';

@Module({
  imports: [],
  providers: [
    {
      provide: 'SearchServiceInterface',
      useClass: SearchService
    }
  ],
  controllers: [],
  exports: [SearchModule]
})
export class SearchModule {}
