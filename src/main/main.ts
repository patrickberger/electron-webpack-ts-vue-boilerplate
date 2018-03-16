import { App, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

const isDevelopment = process.env.NODE_ENV !== 'production';

/**
 * Application entry point.
 *
 * @see https://github.com/electron/electron/blob/master/docs/api/app.md
 * @see https://github.com/electron/electron/blob/master/docs/api/browser-window.md
 */
export default class Main {

  /**
   * Main entry point for the application.
   *
   * @static
   * @param {App} application  The native application.
   * @param {typeof BrowserWindow} window
   * @memberof Main
   */
  public static main(application: App): void {

    Main.application = application;
    Main.application.on('activate', Main.onActivate);
    Main.application.on('ready', Main.onReady);
    Main.application.on('window-all-closed', Main.onWindowAllClosed);

  }

  /** The electron application, */
  private static application: App;

  /** The main window, */
  private static window: BrowserWindow | null;

  /**
   * Factory method for the main window.
   *
   * @private
   * @static
   * @returns {BrowserWindow}
   * @memberof Main
   */
  private static createWindow(): BrowserWindow {

    const window = new BrowserWindow();

    // Load target url.
    const target: string = isDevelopment
      ? `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`
      : url.format({ pathname: path.join(__dirname, 'index.html'), protocol: 'file', slashes: true });
    window.loadURL(target);

    // Wire up some events.
    window.on('closed', Main.onClosed);
    window.webContents.on('devtools-opened', Main.onDevtoolsOpened);

    if (isDevelopment) {
      window.webContents.openDevTools();
    }

    return window;

  }

  /**
   * Handles the app's 'activate' event. Emitted when the application is activated (macOS only).
   *
   * @private
   * @static
   * @memberof Main
   */
  private static onActivate(): void {

    // tslint:disable-next-line:no-console
    console.log('activate');

    if (Main.window == null) {
      Main.window = Main.createWindow();
    }

  }

  /**
   * Handles the window's 'close' event. Emitted when the window is going to be closed.
   *
   * @private
   * @static
   * @memberof Main
   */
  private static onClosed(): void {

    // tslint:disable-next-line:no-console
    console.log('closed');

    Main.window = null;

  }

  /**
   * Handles main window's 'devtools-opened' event. Emitted when DevTools is opened.
   *
   * @private
   * @static
   * @returns {void}
   * @memberof Main
   */
  private static onDevtoolsOpened(): void {

    // tslint:disable-next-line:no-console
    console.log('devtools-opened');

    if (!Main.window) { return; }

    Main.window.focus();
    setImmediate(() => {
      if (Main.window) { Main.window.focus(); }
    });

  }

  /**
   * Handles the app's 'ready' event. Emitted when Electron has finished initializing.
   *
   * @private
   * @static
   * @memberof Main
   */
  private static onReady(): void {

    // tslint:disable-next-line:no-console
    console.log('ready');

    Main.window = Main.createWindow();

  }

  /**
   * Handles the app's 'window-all-closed' event. Emitted when all windows have been closed.
   *
   * @private
   * @static
   * @memberof Main
   */
  private static onWindowAllClosed(): void {

    // tslint:disable-next-line:no-console
    console.log('window-all-closed');

    // On macOS it is common for applications to stay open until the user explicitly quits.
    if (process.platform !== 'darwin') {
      Main.application.quit();
    }

  }

}
