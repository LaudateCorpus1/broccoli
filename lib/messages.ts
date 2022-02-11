import UI from '../types/console-ui';

export default {
  onBuildSuccess(builder: any, ui: UI) {
    ui.writeLine(
      'Built - ' +
        Math.round(builder.outputNodeWrapper.buildState.totalTime) +
        ' ms @ ' +
        new Date().toString()
    );
  },
};
