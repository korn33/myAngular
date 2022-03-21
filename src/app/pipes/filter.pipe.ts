import { Pipe, PipeTransform } from '@angular/core';
import {IPipePost} from "../../interfaces/pipes/IPipePost.js";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: IPipePost[], search: string = ''): IPipePost[] {
    if (!search.trim()){
      return posts
    }

    return posts.filter(post => post.title.includes(search))
  }

}
