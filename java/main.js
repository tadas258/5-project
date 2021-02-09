import { socials } from './function.js'
import { socialList } from './data.js'
import { clock } from './clock.js'
import { progressValue } from './progres.js'
import { Progress } from './ProgressBar.js'
import { Forms } from './Forms.js'


clock('.clock', '03-01 14:00:00');
socials('footer > .row', socialList);

const progres = new Progress('.left-column', progressValue);
progres.validSelector()
progres.inputHtml()

new Forms()




