export default class SessionPlugin {
  constructor() {
    this.user = null;
  }

  static install(Vue, options) {
    let session = new SessionPlugin(options);
    session._recoverSession();
    console.debug('Session Plugin installed');
    Vue.session = session;
  }

  start(profile) {
    this.user = profile;
    this._saveSession(profile);
  }

  end() {
    this.user = null;
    localStorage.removeItem('sessionProfile');
  }

  isAuthorized() {
    return !!this.user;
  }

  _recoverSession() {
    let storedSession = localStorage.getItem('sessionProfile');
    if (storedSession) {
      this.user = storedSession;
    }
  }

  _saveSession(profile) {
    localStorage.setItem('sessionProfile', JSON.stringify(profile));
  }
}