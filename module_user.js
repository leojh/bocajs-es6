import MyModule from './modules'
import {topLevelMethod} from './modules'
import * as allTheThingsFromModule from './modules'

MyModule.doSomething()
topLevelMethod()

allTheThingsFromModule.default.doSomething()
allTheThingsFromModule.topLevelMethod()
