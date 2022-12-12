const sessionStorage = window.sessionStorage;
export class Storage {
  static getEditableTabs() {
    return sessionStorage.getItem('editableTab')
  }

  static setEditableTabs(value = []) {
    return sessionStorage.setItem('editableTab', JSON.stringify(value))
  }

  static removeEditableTabs() {
    return sessionStorage.removeItem('editableTab')
  }

  static getEditableTabsValue() {
    return sessionStorage.getItem('editableTabsValu')
  }

  static setEditableTabsValue(value) {
    return sessionStorage.setItem('editableTabsValu', value)
  }

  static removeEditableTabsValue() {
    return sessionStorage.removeItem('editableTabsValu')
  }
}

