import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CatServiceService } from 'src/app/services/cat-service.service';
import { Category, Images, Image } from 'src/app/shared/interface';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})

export class UserDashboardComponent implements OnInit, OnDestroy {
  catImage: string;
  imagesList: Images;

  /** list of categories */
  protected categories;

  /** control for the selected category */
  public categoryCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword */
  public categoryFilterCtrl: FormControl = new FormControl();

  /** list of categories filtered by search keyword */
  public filteredCategories: ReplaySubject<Category[]> = new ReplaySubject<Category[]>(1);

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();



  constructor(private service: CatServiceService) { }

  ngOnInit() {
    this.getRandomCatImg();
    this.getCategoriesList();
  }

  // function to access randomcat object
  getRandomCatImg() {
    this.service.getCatImage().subscribe((response: Image) => {
      console.log('response from service', response);
      this.catImage = response[0]['url'];
    });
  }

  // function to get the categories list
  getCategoriesList() {
    this.service.getCategories().subscribe((list: Category) => {
      console.log('response of categories', list);
      this.categories = list;
      this.filteredCategories.next(this.categories.slice());

      // listen for search field value changes
      this.categoryFilterCtrl.valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.filterCategories();
        });
    });
  }


  filterCategories() {
    if (!this.categories) {
      return;
    }
    // get the search keyword
    let search = this.categoryFilterCtrl.value;
    if (!search) {
      // here we are making a copy of original list into new using slice which returns selected items
      this.filteredCategories.next(this.categories.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the categories
    this.filteredCategories.next(
      this.categories.filter(category => category.name.toLowerCase().indexOf(search) > -1)
    );
  }

  // function to get the images list of selected category
  showImages(selected: Category) {
    console.log('response of category', selected, selected.id);
    if (selected.id !== null && selected.id !== undefined) {
      const limit = 10;
      this.service.getSelectedCategoryImg(selected.id, limit).subscribe((response: Images) => {
        console.log(response);
        this.imagesList = response;
      });
    } else {
      console.log('selected category id is either null or undefined');
    }
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

}
