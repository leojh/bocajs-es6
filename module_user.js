import MyModule from './my_module'
import {topLevelMethod} from './my_module'
import * as allTheThingsFromModule from './my_module'

MyModule.doSomething()
topLevelMethod()

allTheThingsFromModule.default.doSomething()
allTheThingsFromModule.topLevelMethod()
