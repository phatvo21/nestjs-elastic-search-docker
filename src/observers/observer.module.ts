import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../components/product/entity/product.entity';
import { SearchService } from '../services/search/search.service';
import { ProductElasticIndex } from '../services/search/search-index/product.elastic.index';
import { SearchServiceInterface } from '../services/search/interface/search.service.interface';
import { PostSubscriber } from './subscribers/product.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product])
  ],
  providers: [
    {
      provide: 'SearchServiceInterface',
      useClass: SearchService
    },
    ProductElasticIndex,
    PostSubscriber
  ],
  controllers: [],
  exports: []
})
export class ObserverModule {}
