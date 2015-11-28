import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
@Component({
    selector: 'my-app'
})
@View({
    template: `<p>
                    myName: {{ myName }}
                <p>
                <ul>
                    <li *ng-for="#name of names">{{name}}</li>
                </ul>`,
    directives: [NgFor]
})
class AppComponent {
    myName: string;
    names: string[];
    constructor() {
        this.myName = 'dank3';
        this.names = ['dank', 'carl'];
    }
}
bootstrap(AppComponent);

