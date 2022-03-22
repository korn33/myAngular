import { Pipe, PipeTransform } from '@angular/core';
import {IPipePost} from "../../interfaces/pipes/IPipePost.js";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: IPipePost[], search: string = '', field: string = 'title'): IPipePost[] {
    if (!search.trim()){
      return posts
    }

    return posts.filter(post => post[field].toLowerCase().includes(search.toLowerCase()))
  }

}
