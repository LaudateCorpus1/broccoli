declare class WatchPreference {
  watcher: string;
}

declare class WatchDetector {
  constructor(options: any);

  findBestWatcherOption: (options: {
    watcher: string | undefined
  }) => WatchPreference;
}

export default WatchDetector;
