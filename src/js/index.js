import './bootstrap.js';
import { Range } from './libs/range';
import './components/foo-component';
import '@dile/dile-modal/dile-modal';


let range1 = new Range(1, 5);
range1.show();
console.log(Range.type);

