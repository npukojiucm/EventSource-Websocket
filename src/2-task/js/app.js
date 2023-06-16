import Instances from './Instances';
import StateManager from './StateManager';
import WorkLog from './WorkLog';

const stateManager = new StateManager('ws://localhost:3000');
stateManager.setConnect([{
  channel: 'command_response',
  function: stateManager.commandListener,
}]);

const instances = new Instances('.container', stateManager);
instances.init();

const worklog = new WorkLog('.container', stateManager);
worklog.init();
