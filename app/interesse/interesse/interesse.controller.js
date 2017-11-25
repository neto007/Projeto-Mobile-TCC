import styles from './interesse.scss';

export default class {

  constructor(CategoriasService) {
    'ngInject';

    this.categoriesSelected = [];
    this.categoriasService = CategoriasService;
    this.categorias = [];
    // css-modules (https://github.com/webpack/css-loader#css-modules)
  }

  selectItem(category) {
    if(!this.categoryIsSelected(category)) {
      this.categoriesSelected.push(category);
    } else {
      this.categoriesSelected = this.categoriesSelected
        .filter((categorySelected) => categorySelected !== category);
    }
  }

  categoryIsSelected(category) {
    return this.categoriesSelected.indexOf(category) !== -1;
  }

  $onInit() {
    this.categoriasService.findAll()
      .then(categorias => this.categorias = categorias);
  }
}
