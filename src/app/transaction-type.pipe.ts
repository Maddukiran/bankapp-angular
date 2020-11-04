import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionType'
})
export class TransactionTypePipe implements PipeTransform {

  transform(data:[]): [] {
    console.log("Transaction Type:" , data );
    return data;
  }

}
